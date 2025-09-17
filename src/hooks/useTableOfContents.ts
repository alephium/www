import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  title: string
  level: number
  element: HTMLElement
}

export const useTableOfContents = (htmlContent: string) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([])

  useEffect(() => {
    if (!htmlContent) return

    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = htmlContent

    // Find all h2 and h3 elements
    const headers = tempDiv.querySelectorAll('h2, h3')
    const items: TocItem[] = []

    headers.forEach((header) => {
      const text = header.textContent?.trim()
      if (!text) return

      // Generate a unique ID from the header text
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, '') // Remove leading/trailing hyphens

      header.id = id

      items.push({
        id,
        title: text,
        level: parseInt(header.tagName.charAt(1)), // h2 = 2, h3 = 3
        element: header as HTMLElement
      })
    })

    setTocItems(items)

    // Clean up the temporary element
    tempDiv.remove()
  }, [htmlContent])

  return tocItems
}
