import { useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'

import Arrow from '../../../images/svgs/arrow-right.svg'

import Spline from '@splinetool/react-spline'
import { AnimatePresence, motion } from 'framer-motion'

import placeholderImage from '../../../images/3d-hero-placeholder.jpg'

import { isMobile } from '../../../utils/misc'
import Button from '../../Button'
import ArrowedLink from '../../ArrowedLink'
import SubpageHeroSection from '../../customPageComponents/SubpageHeroSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageHeroSection = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false)

  const renderAdditionalContent = (inView: boolean) => (
    <>
      <AnimatePresence>
        {(isMobile || !sceneLoaded) && (
          <ThreeDimensionSceneContainer
            style={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <PlaceholderImage src={placeholderImage} />
          </ThreeDimensionSceneContainer>
        )}
      </AnimatePresence>

      {!isMobile && (
        <ThreeDimensionSceneContainer animate={{ opacity: sceneLoaded && inView ? 1 : 0 }}>
          <Spline
            scene="https://prod.spline.design/RlC3pBxC3Bxm4Vv5/scene.splinecode"
            onLoad={() => setSceneLoaded(true)}
          />
        </ThreeDimensionSceneContainer>
      )}
    </>
  )

  return (
    <SubpageHeroSection renderAdditionalContent={renderAdditionalContent}>
      <h1>
        Proof of Work,
        <br />
        Engineered for the Future
      </h1>
      <hr />
      <p>
        Alephium brings the security of Proof-of-Work, the scalability of sharding, and the power of smart contracts to
        real-world applications.
      </p>

      <Buttons>
        <Button url="https://docs.alephium.org">Build on Alephium</Button>
        <ArrowedLink url="/communities">Join the community</ArrowedLink>
      </Buttons>

      <ArrowLink
        href="#intro"
        aria-label="Scroll to the intro section"
        data-goatcounter-click="hero-section:arrow-down"
      >
        <ArrowDown />
      </ArrowLink>
    </SubpageHeroSection>
  )
}

export default HomepageHeroSection

const ThreeDimensionSceneContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;

  @media ${deviceBreakPoints.mobile} {
    left: -60%;
    top: -30%;
    opacity: 0.5;
  }

  @media ${deviceBreakPoints.smallMobile} {
    top: -40%;
    left: -100%;
    opacity: 0.5;
  }
`

const ArrowLink = styled.a`
  pointer-events: all;
`

const ArrowDown = styled(Arrow)`
  width: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  transform: rotate(90deg);

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-5);
  }
`

const PlaceholderImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Buttons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);

  @media ${deviceBreakPoints.mobile} {
    margin-top: var(--spacing-4);
  }

  @media ${deviceBreakPoints.smallMobile} {
    margin-top: var(--spacing-2);
  }
`
