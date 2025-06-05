import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import { isMobile } from '../../../utils/misc'
import Badge from '../../Badge'
import Button from '../../Button'
import TextElement from '../../customPageComponents/TextElement'

const HomepageNewsPopup = () => {
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

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
        onClick={() => !isVisible && toggleVisibility(true)}
        initial="hidden"
        animate={!isMounted ? 'hidden' : isVisible ? 'visible' : 'slideOut'}
        style={{
          cursor: !isVisible ? 'pointer' : 'default'
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              duration: 0.5
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
              duration: 0.5
            }
          },
          slideOut: {
            opacity: 1,
            y: isMobile ? '130%' : 0,
            x: isMobile ? 0 : '100%',
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5
            }
          }
        }}
      >
        <CloseButton onClick={() => toggleVisibility(false)}>×</CloseButton>
        <NewsCardContent>
          <Badge color="palette4" style={{ marginBottom: 10 }}>
            BREAKING NEWS 🔥
          </Badge>
          <TextElement isBodySmall noHeadingsMargins>
            <h2 style={{ color: theme.palette4 }}>Danube Upgrade</h2>
            <p>
              A major milestone towards true Web3.
              <br />
              <strong>Going live soon.</strong>
            </p>
          </TextElement>
        </NewsCardContent>
        <Button squared url="https://x.com/alephium/status/1920780688313233634">
          Learn more about Danube
        </Button>
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
  border: 2px solid ${({ theme }) => theme.palette4};
  background-color: ${({ theme }) => theme.background1};
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  border-radius: var(--radius-large);
  padding: var(--spacing-3);
  border-radius: var(--radius);
  flex-wrap: wrap;
  gap: var(--spacing-2);
  pointer-events: auto;

  p {
    margin-bottom: 0;
  }

  h2 {
    font-size: var(--fontSize-28);
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

const NewsCardContent = styled.div`
  flex-direction: column;
  flex: 1;
`

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.palette4};
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
