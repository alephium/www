import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import SubpageSection from '../../customPageComponents/SubpageSection'
import TextCard from '../../customPageComponents/TextCard'
import TextCardContent from '../../customPageComponents/TextCardContent'
import TextElement from '../../customPageComponents/TextElement'

const CARD_WIDTH = 380
const CARD_GAP = 24

const baseUrl = 'https://backend.mainnet.alephium.org'

interface Stat<T> {
  value: T
  isLoading: boolean
}

export const iconFragment = graphql`
  fragment Icon on File {
    childImageSharp {
      gatsbyImageData(width: 82, layout: CONSTRAINED, transformOptions: { fit: COVER, cropFocus: CENTER })
    }
  }
`

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'totalTransactions'
type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

const HomepageStatsSection = () => {
  const theme = useTheme()
  const [explorerClient, setExplorerClient] = useState<ExplorerClient>()
  const [statsScalarData, setStatsScalarData] = useState<StatsScalarData>({
    totalTransactions: statScalarDefault
  })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateStatsScalar = useCallback(
    (key: StatScalarKeys, value: StatScalar['value']) => {
      setStatsScalarData((prevState) => ({ ...prevState, [key]: { value, isLoading: false } }))
    },
    [setStatsScalarData]
  )

  useEffect(() => {
    setExplorerClient(new ExplorerClient({ baseUrl }))
  }, [])

  useEffect(() => {
    if (!explorerClient) return

    const fetchAndUpdateStatsScalar = async (
      key: StatScalarKeys,
      fetchCall: () => Promise<HttpResponse<string | number>>
    ) => {
      await fetchCall()
        .then((res) => res.text())
        .then((text) => updateStatsScalar(key, parseInt(text)))
    }

    fetchAndUpdateStatsScalar('totalTransactions', explorerClient.infos.getInfosTotalTransactions)
  }, [explorerClient, updateStatsScalar])

  const { totalTransactions } = statsScalarData

  const checkScrollable = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const canScrollLeft = container.scrollLeft > 0
      const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth

      setCanScrollLeft(canScrollLeft)
      setCanScrollRight(canScrollRight)
    }
  }, [])

  useEffect(() => {
    checkScrollable()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollable)
      window.addEventListener('resize', checkScrollable)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollable)
        window.removeEventListener('resize', checkScrollable)
      }
    }
  }, [checkScrollable])

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = CARD_WIDTH + CARD_GAP // note to self: this isn't really useful thanks to the awesome scroll-snap-align
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  }

  return (
    <SubpageSectionStyled wide contrasted>
      <TextElementStyled>
        <h2>
          <small>Web3, </small>
          <br />
          done right.
        </h2>
      </TextElementStyled>

      <StatsContainer>
        <CardsScroll ref={scrollContainerRef}>
          <CardContainer
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette2}>
                <TextCardContent>
                  <h3>Fast</h3>
                  <TLDRSection>
                    <span>20,000+ transactions per second</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium moves as fast as you do. With block times of just 8 seconds, sharding, and
                    Proof-of-Less-Work, it delivers <strong>fast, efficient, and reliable performance</strong> - ready
                    to scale as adoption grows.
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
          <CardContainer
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette3}>
                <TextCardContent>
                  <h3>Scalable</h3>
                  <TLDRSection>
                    <span>{`${totalTransactions.value.toLocaleString()} total transactions`}</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Built to handle <strong>high throughput without sacrificing security</strong>, Alephium&apos;s
                    architecture ensures that fees remain predictable and affordable - empowering developers and users
                    alike.
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
          <CardContainer
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette4}>
                <TextCardContent>
                  <h3>Secure</h3>
                  <TLDRSection>
                    <span>125+ independent mining nodes</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    With a truly decentralized Proof-of-Work model, Alephium operates independently of vulnerable
                    central validators,{' '}
                    <strong>ensuring maximum security, trustlessness, and censorship resistance.</strong>
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
          <CardContainer
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette1}>
                <TextCardContent>
                  <h3>Sustainable</h3>
                  <TLDRSection color={theme.palette1}>
                    <span>87% more efficient than PoW</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium&apos;s Proof-of-Less-Work mechanism reduces energy consumption, making it{' '}
                    <strong>one of the most sustainable and responsible blockchains</strong> built for the future.
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
          <CardContainer
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette6}>
                <TextCardContent>
                  <h3>Programmable</h3>
                  <TLDRSection color={theme.palette6}>
                    <span>No compromise smart-contracts</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium&apos;s stateful UTXO model merges the best of both worlds -{' '}
                    <strong>Ethereum-like smart contract flexibility with Bitcoin-level security.</strong>
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
          <CardContainer
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <TextCard>
              <TextElement backgroundColor={theme.palette5}>
                <TextCardContent>
                  <h3>Developer-friendly</h3>
                  <TLDRSection color={theme.palette5}>
                    <span>Super simple language and novel VM</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium simplifies decentralized development with an optimized SDK, MEV-resistant design, and
                    built-in security features{' '}
                    <strong>making smart contracts and dApps both easier to build and inherently safer.</strong>
                  </p>
                </TextElement>
              </TextCardContent>
            </TextCard>
          </CardContainer>
        </CardsScroll>
        <ScrollButtonsContainer>
          <ScrollButton onClick={() => handleScroll('left')} aria-label="Scroll cards left" disabled={!canScrollLeft}>
            <Arrow>←</Arrow>
          </ScrollButton>
          <ScrollButton
            onClick={() => handleScroll('right')}
            aria-label="Scroll cards right"
            disabled={!canScrollRight}
          >
            <Arrow>→</Arrow>
          </ScrollButton>
        </ScrollButtonsContainer>
      </StatsContainer>
    </SubpageSectionStyled>
  )
}

const SubpageSectionStyled = styled(SubpageSection)`
  padding-right: 0;
  padding-left: 0;
`

const TextElementStyled = styled(TextElement)`
  width: var(--page-width);
  margin: 0 auto;
`

const StatsContainer = styled.div`
  width: 100%;
  padding: var(--spacing-4) 0;
`

const CardsScroll = styled.div`
  display: flex;
  gap: ${CARD_GAP}px;
  overflow-x: auto;
  padding: var(--spacing-4) 0;
  scroll-snap-type: x mandatory;
  scroll-padding-left: calc(calc(100% - var(--page-width)) / 2);
  -webkit-overflow-scrolling: touch;
  margin-bottom: var(--spacing-4);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-300);
    border-radius: 4px;
  }
`

const CardContainer = styled(motion.div)`
  flex: 0 0 ${CARD_WIDTH}px;
  scroll-snap-align: start;
  position: relative;

  &:first-child {
    padding-left: calc(calc(100% - var(--page-width)) / 2);
  }

  &:last-child {
    margin-right: var(--spacing-4);
  }

  &:hover {
    filter: saturate(160%);
  }
  > div {
    height: 100%;
  }
`

const TLDRSection = styled.div`
  display: flex;
  align-items: center;
  border-radius: var(--radius-small);
  margin-top: var(--spacing-2);
  color: ${({ color }) => color};
  font-size: var(--fontSize-20);
  font-weight: var(--fontWeight-semiBold);
  width: 100%;
  box-sizing: border-box;
  opacity: 0.8;
`

const ScrollButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
  padding: 0 var(--spacing-4) var(--spacing-4);
`

const ScrollButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--color-white);
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 1;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Arrow = styled.span`
  font-size: 24px;
  line-height: 1;
`

export default HomepageStatsSection

const Stat = styled.div`
  font-size: var(--fontSize-28);
  line-height: var(--lineHeight-36);
  margin-top: var(--spacing-6);
`
