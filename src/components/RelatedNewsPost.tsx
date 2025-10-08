import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'

import { NewsCard } from '../pages/news'

const RelatedPost = ({ slug }: { slug: string }) => {
  const data = useStaticQuery(graphql`
    query RelatedPost {
      allMarkdownRemark(filter: { fields: { contentType: { eq: "news" } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            spotlight
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  `)

  const relatedPost = useMemo(() => {
    const cleanSlug = slug.endsWith('index') ? slug.slice(0, -5) : slug

    return data.allMarkdownRemark.nodes.find((post: { fields?: { slug?: string } }) =>
      post.fields?.slug?.endsWith(cleanSlug)
    )
  }, [data, slug])

  if (!relatedPost) {
    return null
  }

  return <NewsCard post={relatedPost} />
}

export default RelatedPost
