import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

const useSocials = () => {
  const data = useStaticQuery<Queries.SocialsYamlQuery>(graphql`
    query SocialsYaml {
      allSocialsYaml {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return data.allSocialsYaml.edges
}

export default useSocials
