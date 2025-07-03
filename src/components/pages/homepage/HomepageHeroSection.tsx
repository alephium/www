import { motion, useScroll, useTransform } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

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
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [100, 1000], [1, 0])

  return (
    <SectionWrapper>
      <motion.div style={{ opacity }}>
        <SubpageSectionStyled fullWidth>
          <EddyBackgroundStyled />
          <TextElementWithReflection isCentered>
            <h1>
              The <span className="gradient-text">Web3</span>
              <br />
              you were promised.
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
      </motion.div>
    </SectionWrapper>
  )
}

export default HomepageHeroSection

const SectionWrapper = styled.div`
  position: sticky;
  top: 0;
`

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
    background: radial-gradient(
      circle at 100% 0%,
      ${({ theme }) => theme.palette5} 0%,
      ${({ theme }) => theme.palette5} 20%,
      ${({ theme }) => theme.palette2} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline;
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
