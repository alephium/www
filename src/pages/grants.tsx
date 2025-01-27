import { useStaticQuery } from 'gatsby'
import { useEffect } from 'react'
import { FooterContentType, footerQuery } from '../components/Footer'

const GrantsPage = () => {
  const data = useStaticQuery<FooterContentType>(footerQuery)
  const pageContent = data.footer.nodes[0].frontmatter
  const grantsUrl = pageContent.columns
    .find(({ title }) => title === 'Explore')
    ?.links.find(({ text }) => text === 'Reward & grant program')?.url

  useEffect(() => {
    if (grantsUrl) window.location.replace(grantsUrl)
  }, [grantsUrl])

  return null
}

export default GrantsPage
