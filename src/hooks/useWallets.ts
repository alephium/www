import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

const useWallets = () => {
  const data = useStaticQuery(graphql`
    query Wallets {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/wallets.md/" } }) {
        nodes {
          frontmatter {
            wallets {
              desktop {
                url
              }
              extension {
                urls {
                  chrome
                  firefox
                }
              }
              mobile {
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
