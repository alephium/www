import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

const useWallets = () => {
  const data = useStaticQuery<Queries.WalletsQuery>(graphql`
    query Wallets {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/wallets.md/" } }) {
        nodes {
          frontmatter {
            wallets {
              desktop {
                image {
                  publicURL
                }
                url
              }
              extension {
                image {
                  publicURL
                }
                urls {
                  chrome
                  firefox
                }
              }
              mobile {
                image {
                  publicURL
                }
                urls {
                  android
                  ios
                }
              }
            }
          }
        }
      }
    }
  `)

  const wallets = data.allMarkdownRemark.nodes[0].frontmatter?.wallets

  return wallets
}

export default useWallets
