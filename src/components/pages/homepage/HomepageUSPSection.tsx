import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { motion } from 'framer-motion'
import { graphql } from 'gatsby'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import { formatNumberForDisplay } from '../../../utils/numbers'
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

const HomepageUSPSection = () => {
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
    <SubpageSectionStyled wide edgeGradient>
      <TextElementStyled>
        <h2>
          Web3,
          <br />
          done right.
          <hr />
        </h2>
        <p>
          <strong>
            Dive in. 🐠 <br />
            Discover what makes Alephium stand apart.
          </strong>
        </p>
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
            <TextCard border>
              <TextElement>
                <TextCardContent>
                  <h3 style={{ color: theme.palette2 }}>Fast</h3>
                  <TLDRSection color={theme.palette2}>
                    <span>20,000+ tps, single-chain experience.</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium's BlockFlow sharding processes over 20,000 transactions per second while eliminating
                    cross-chain complexity,{' '}
                    <strong>delivering high throughput and the simplicity of a single-chain environment.</strong>
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
            <TextCard border>
              <TextElement color={theme.palette3}>
                <TextCardContent>
                  <h3 style={{ color: theme.palette3 }}>Scalable</h3>
                  <TLDRSection color={theme.palette3}>
                    <span>{`${formatNumberForDisplay(totalTransactions.value).join(
                      ''
                    )} transactions to date, low and predictable fees.`}</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium’s unique sharding design, built on its unique combination of UTXO and Proof-of-Work model
                    together with a DAG data structure, delivers{' '}
                    <strong>
                      consistent performance at scale, keeping fees stable and affordable for both users and developers.
                    </strong>
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
            <TextCard border>
              <TextElement>
                <TextCardContent>
                  <h3 style={{ color: theme.palette4 }}>Secure</h3>
                  <TLDRSection color={theme.palette4}>
                    <span>0 exploits, 0 hacks, security by design.</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium offers a robust, developer-friendly environment with{' '}
                    <strong>built-in protections against common vulnerabilities</strong>. Its MEV-aware architecture and
                    native safeguards{' '}
                    <strong>
                      prevent threats like reentrancy attacks, unlimited approvals, and flash loan exploits.
                    </strong>
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
            <TextCard border>
              <TextElement>
                <TextCardContent>
                  <h3 style={{ color: theme.palette1 }}>Sustainable</h3>
                  <TLDRSection color={theme.palette1}>
                    <span>The best of PoW, 87% less energy.</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium’s Proof-of-Less-Work consensus delivers true decentralization with a fraction of the
                    energy.{' '}
                    <strong>
                      It retains the security and simplicity of traditional PoW while cutting energy use by over 87%.
                    </strong>
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
            <TextCard border>
              <TextElement>
                <TextCardContent>
                  <h3 style={{ color: theme.palette6 }}>Programmable</h3>
                  <TLDRSection color={theme.palette6}>
                    <span>Stateful UTXO, the best of Bitcoin and Ethereum.</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    <strong>
                      Alephium’s stateful UTXO model combines Ethereum’s flexibility with Bitcoin’s security.
                    </strong>{' '}
                    It enables powerful smart contracts with mutable state while ensuring robust, UTXO-based asset
                    protection.
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
            <TextCard border>
              <TextElement>
                <TextCardContent>
                  <h3 style={{ color: theme.palette5 }}>Dev-friendly</h3>
                  <TLDRSection color={theme.palette5}>
                    <span>Custom VM & language built for performance.</span>
                  </TLDRSection>
                </TextCardContent>
              </TextElement>
              <TextCardContent>
                <TextElement noHeadingsMargins>
                  <p>
                    Alephium empowers developers with its{' '}
                    <strong>
                      purpose-built Virtual Machine, intuitive SDK, and high-performance programming language
                    </strong>
                    , enabling efficient development and unlocking new possibilities for smart contracts, dApps, and
                    tokens.
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
  box-sizing: border-box;
  padding-top: var(--spacing-4);
  position: relative;
`

const CardsScroll = styled.div`
  display: flex;
  gap: ${CARD_GAP}px;
  overflow-x: auto;
  padding: var(--spacing-4) 0;
  padding-left: calc((100% - var(--page-width)) / 2 + var(--spacing-4));
  scroll-snap-type: x mandatory;
  -webkit-mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
  mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);

  @media ${deviceBreakPoints.mobile} {
    gap: ${CARD_GAP / 2}px;
    -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent);
    mask-image: linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent);
  }

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
  z-index: 0;

  @media ${deviceBreakPoints.mobile} {
    flex: 0 0 ${CARD_WIDTH / 1.3}px;
  }

  &:first-child {
    padding-left: calc((100% - var(--page-width)));
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
  font-size: var(--fontSize-22);
  font-weight: var(--fontWeight-semiBold);
  width: 100%;
  box-sizing: border-box;
  opacity: 0.8;
`

const ScrollButtonsContainer = styled.div`
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
  padding-right: var(--spacing-10);
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

export default HomepageUSPSection

const Stat = styled.div`
  font-size: var(--fontSize-28);
  line-height: var(--lineHeight-36);
  margin-top: var(--spacing-6);
`
