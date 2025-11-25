import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import { isMobile } from '../../../utils/misc'
import Badge from '../../Badge'
import Button from '../../Button'
import CardText from '../../CardText'
import CardFooterButtonContainer from '../../common/CardFooterButtonContainer'
import TextElement from '../../customPageComponents/TextElement'

const HomepageNewsPopup = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const theme = useTheme()

  const toggleVisibility = (visible: boolean) => setIsVisible(visible)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <NewsCardContainer>
      <NewsCard
        initial="hidden"
        animate={!isMounted ? 'hidden' : isVisible ? 'visible' : 'slideOut'}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15
            }
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              bounce: 0
            }
          },
          slideOut: {
            opacity: 0,
            y: isMobile ? '140%' : 0,
            x: isMobile ? 0 : '100%',
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              bounce: 0
            }
          }
        }}
      >
        <CardText>
          <Badge color="palette2">BREAKING NEWS 🔥</Badge>
          <TextElement>
            <h2 style={{ color: theme.palette2 }}>Alephium: Phase 2</h2>
            <p>
              <strong>Road to Core dApp Testnet.</strong>
              <br />
              Full review of what we are cooking.
            </p>
          </TextElement>
        </CardText>
        <CardFooterButtonContainer>
          <Button squared url="https://x.com/alephium/status/1991899471970521370">
            Read the article
          </Button>
        </CardFooterButtonContainer>
        <CloseButton onClick={() => toggleVisibility(false)}>×</CloseButton>
      </NewsCard>
    </NewsCardContainer>
  )
}

export default HomepageNewsPopup

const NewsCardContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: var(--spacing-4);
  right: var(--spacing-4);
  left: var(--spacing-4);
  z-index: 2;
  justify-content: flex-end;
  pointer-events: none;

  @media ${deviceBreakPoints.mobile} {
    justify-content: center;
    bottom: var(--spacing-2);
    right: var(--spacing-2);
    left: var(--spacing-2);
  }
`

const NewsCard = styled(motion.div)<{ border?: boolean }>`
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.surface1};
  backdrop-filter: blur(60px) saturate(3) brightness(1.2);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, ${({ theme }) => (theme.name === 'light' ? 0.1 : 0.3)});
  border-radius: var(--radius-big);
  flex-wrap: wrap;
  pointer-events: auto;

  p {
    margin-bottom: 0;
  }

  h2 {
    font-size: var(--fontSize-36);
    line-height: var(--lineHeight-36);
    font-weight: var(--fontWeight-medium);
    margin-bottom: var(--spacing-2);
  }

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    width: auto;
    max-width: 400px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.background2};
  }
`
