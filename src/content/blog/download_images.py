#!/usr/bin/env python3
import os
import re
import requests
import yaml
from pathlib import Path
from urllib.parse import urlparse
import hashlib

def download_image(url, output_dir):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()

        # Get file extension from URL or default to .jpg
        parsed_url = urlparse(url)
        path = parsed_url.path
        ext = os.path.splitext(path)[1].lower()
        if not ext or ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp']:
            ext = '.jpg'

        # Create a filename based on URL hash
        url_hash = hashlib.md5(url.encode()).hexdigest()[:10]
        filename = f"image_{url_hash}{ext}"
        filepath = os.path.join(output_dir, filename)

        # Download the image
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)

        return filename
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")
        return None

def process_markdown_file(md_file):
    directory = os.path.dirname(md_file)

    # Read the markdown content
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter and content
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"No valid frontmatter found in {md_file}")
        return

    frontmatter = yaml.safe_load(parts[1]) or {}
    markdown_content = parts[2]

    # Find all image URLs in the markdown content
    image_pattern = r'!\[.*?\]\((https?://[^\s\)]+)\)'
    image_matches = re.finditer(image_pattern, markdown_content)

    first_image = None
    url_to_local = {}

    # Download each image
    for match in image_matches:
        url = match.group(1)
        if url not in url_to_local:
            local_filename = download_image(url, directory)
            if local_filename:
                url_to_local[url] = local_filename
                if first_image is None:
                    first_image = local_filename

    # Update frontmatter with featuredImage
    if first_image:
        frontmatter['featuredImage'] = first_image

    # Update image references in the content
    for url, local_file in url_to_local.items():
        markdown_content = markdown_content.replace(url, local_file)

    # Reconstruct the markdown file
    updated_content = f"---\n{yaml.dump(frontmatter, allow_unicode=True)}---{markdown_content}"

    # Write the updated content back to the file
    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Processed {md_file}")
    if url_to_local:
        print(f"Downloaded {len(url_to_local)} images")
        print(f"Featured image: {first_image}")

def main():
    blog_dir = os.path.dirname(os.path.abspath(__file__))

    # Process all index.md files in subdirectories
    for root, dirs, files in os.walk(blog_dir):
        if 'index.md' in files:
            md_file = os.path.join(root, 'index.md')
            print(f"\nProcessing {md_file}...")
            process_markdown_file(md_file)

if __name__ == '__main__':
    main()
