import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import EddyBackground from '../../EddyBackground'
import HomepageIntroSection from './HomepageIntroSection'
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
    <SubpageSectionStyled fullWidth>
      <EddyBackgroundStyled />
      <TextElement isCentered>
        <h1>
          The Web3
          <br /> you were promised.
        </h1>
        <p>
          Scalability, smart contracts, and real decentralization <br />
          without the tradeoffs.
          <br />
          <strong>
            <b>Only on Alephium.</b>
          </strong>
        </p>
      </TextElement>

      <Buttons>
        <Button big highlight url="/get-started">
          Get started
        </Button>
      </Buttons>
      {content?.partnersSection && <HomepagePartnersSection {...content.partnersSection} />}
      <HomepageIntroSection />
    </SubpageSectionStyled>
  )
}

export default HomepageHeroSection

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  overflow: visible;
  min-height: 80vh;
  justify-content: center;
  gap: var(--spacing-4);
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
  margin-bottom: var(--spacing-2);

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

const EddyBackgroundStyled = styled(EddyBackground)`
  margin-top: -100px;
`
