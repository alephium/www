import { useStaticQuery } from 'gatsby'
import { useEffect } from 'react'
import { footerQuery } from '../components/Footer'

const GrantsPage = () => {
  const data = useStaticQuery<Queries.FooterSectionQuery>(footerQuery)
  const pageContent = data.footer.nodes[0].frontmatter
  const grantsUrl = pageContent?.columns
    ?.find((column) => column?.title === 'Explore')
    ?.links?.find((link) => link?.text === 'Reward & grant program')?.url

  useEffect(() => {
    if (grantsUrl) window.location.replace(grantsUrl)
  }, [grantsUrl])

  return null
}

export default GrantsPage
