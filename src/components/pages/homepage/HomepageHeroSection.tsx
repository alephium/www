import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import ArrowedLink from '../../ArrowedLink'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import EddyBackground from '../../EddyBackground'
import HomepagePartnersSection from './HomepagePartnersSection'

export const pageQuery = graphql`
  query HeroSection {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          partnersSection {
            ...HomepagePartnersSection
          }
        }
      }
    }
  }
`

const HomepageHeroSection = () => {
  const { allMarkdownRemark } = useStaticQuery<Queries.HeroSectionQuery>(pageQuery)
  const content = allMarkdownRemark.nodes[0].frontmatter

  return (
    <SubpageSectionStyled wide>
      <EddyBackground />
      <TextElementStyled isCentered>
        <h1>
          The Web3
          <br /> you were promised.
        </h1>
        <p>
          <strong>
            Scalable Proof-of-Less-Work and secure Smart Contracts,
            <br />
            <b> only on Alephium.</b>
          </strong>
        </p>
      </TextElementStyled>

      <Buttons>
        <Button big highlight url="https://docs.alephium.org">
          Start building
        </Button>
      </Buttons>
      {content?.partnersSection && <HomepagePartnersSection {...content.partnersSection} />}
    </SubpageSectionStyled>
  )
}

export default HomepageHeroSection

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-6);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
`

const TextElementStyled = styled(TextElement)`
  * {
    color: black !important;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
  margin-bottom: var(--spacing-4);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`

const ArrowedLinkStyled = styled(ArrowedLink)`
  color: black;

  * {
    fill: black;
  }
`
