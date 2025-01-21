import { useStaticQuery } from 'gatsby'
import { useEffect } from 'react'
import { FooterContentType, footerQuery } from '../components/Footer'

const GrandsPage = () => {
  const data = useStaticQuery<FooterContentType>(footerQuery)
  const pageContent = data.footer.nodes[0].frontmatter
  const grandsUrl = pageContent.columns
    .find(({ title }) => title === 'Explore')
    ?.links.find(({ text }) => text === 'Reward & grant program')?.url

  useEffect(() => {
    if (grandsUrl) window.location.replace(grandsUrl)
  }, [grandsUrl])

  return null
}

export default GrandsPage
