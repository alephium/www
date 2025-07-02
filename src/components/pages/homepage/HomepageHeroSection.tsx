import { graphql, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
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
  const theme = useTheme()

  return (
    <SubpageSectionStyled fullWidth>
      <EddyBackgroundStyled />
      <TextElementWithReflection isCentered>
        <h1>
          The Web3
          <br />
          <span className="gradient-text">you were promised.</span>
        </h1>
        <p>
          Scalability, smart contracts, and real decentralization <br />
          without the tradeoffs.
          <br />
          <strong>
            <b>Only on Alephium.</b>
          </strong>
        </p>
      </TextElementWithReflection>

      <Buttons>
        <Button big highlight url="/get-started">
          Get started
        </Button>
      </Buttons>
      {content?.partnersSection && <HomepagePartnersSection {...content.partnersSection} />}
    </SubpageSectionStyled>
  )
}

export default HomepageHeroSection

const SubpageSectionStyled = styled(SubpageSection)`
  padding-bottom: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-left: var(--spacing-4);
  overflow: visible;
  min-height: 75vh;
  justify-content: center;
  gap: var(--spacing-4);
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
  margin-bottom: var(--spacing-20);

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

const TextElementWithReflection = styled(TextElement)`
  position: relative;

  .gradient-text {
    position: relative;
    display: inline;

    &::after {
      content: '';
      position: absolute;
      top: 65%;
      left: 0;
      width: 100%;
      height: 50%;
      background: radial-gradient(
        circle,
        ${({ theme }) => (theme.name === 'dark' ? theme.palette2 : theme.palette4)} 0%,
        ${({ theme }) => (theme.name === 'dark' ? theme.palette5 : theme.palette3)} 60%
      );
      mix-blend-mode: ${({ theme }) => (theme.name === 'dark' ? 'multiply' : 'screen')};
      filter: blur(20px);
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      animation: fadeInMask 2s ease-out forwards;
    }
  }

  @keyframes fadeInMask {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.8;
    }
  }
`
