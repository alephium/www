import { ExplorerClient } from '@alephium/sdk'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import { colord } from 'colord'
import { graphql, useStaticQuery } from 'gatsby'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import ImageIcon from '../../customPageComponents/ImageIcon'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
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

export const query = graphql`
  query Icons {
    yellowWaveIcon: file(relativePath: { eq: "yellow-wave-icon.png" }) {
      ...Icon
    }
    blueTreeIcon: file(relativePath: { eq: "blue-tree-icon.png" }) {
      ...Icon
    }
    circlesIcon: file(relativePath: { eq: "circles-icon.png" }) {
      ...Icon
    }
    greenDropIcon: file(relativePath: { eq: "green-drop-icon.png" }) {
      ...Icon
    }
    rockPileIcon: file(relativePath: { eq: "rock-pile-icon.png" }) {
      ...Icon
    }
    featherIcon: file(relativePath: { eq: "feather-icon.png" }) {
      ...Icon
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

  const { yellowWaveIcon, blueTreeIcon, circlesIcon, greenDropIcon, rockPileIcon, featherIcon } =
    useStaticQuery<Queries.IconsQuery>(query)

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
      const scrollAmount = CARD_WIDTH + CARD_GAP
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <SubpageSection>
      <TextElement isCentered>
        <h2>
          Made for Real Adoption.
          <br />
          Built to Last.
        </h2>
      </TextElement>

      <SubheaderContent isCentered>
        <StatsContainer>
          <CardsScroll ref={scrollContainerRef}>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon image={yellowWaveIcon?.childImageSharp?.gatsbyImageData} alt="Fast" size={82} rounded />
                    <h3 style={{ color: theme.palette2 }}>Fast</h3>
                    <TLDRSection color={theme.palette2}>
                      <TLDRTag color={theme.palette2}>TL;DR</TLDRTag>
                      <span>20,000+ transactions per second</span>
                    </TLDRSection>
                    <p>
                      Alephium moves as fast as you do. With block times of just 8 seconds, sharding, and
                      Proof-of-Less-Work, it delivers <strong>fast, efficient, and reliable performance</strong> - ready
                      to scale as adoption grows.
                    </p>
                  </TextElement>
                </TextCardContent>
              </TextCard>
            </CardContainer>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon
                      image={blueTreeIcon?.childImageSharp?.gatsbyImageData}
                      alt="Scalable"
                      size={82}
                      rounded
                    />
                    <h3 style={{ color: theme.palette3 }}>Scalable</h3>
                    <TLDRSection color={theme.palette3}>
                      <TLDRTag color={theme.palette3}>TL;DR</TLDRTag>
                      <span>{`${totalTransactions.value.toLocaleString()} total transactions`}</span>
                    </TLDRSection>
                    <p>
                      Built to handle <strong>high throughput without sacrificing security</strong>, Alephium&apos;s
                      architecture ensures that fees remain predictable and affordable - empowering developers and users
                      alike.
                    </p>
                  </TextElement>
                </TextCardContent>
              </TextCard>
            </CardContainer>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon image={circlesIcon?.childImageSharp?.gatsbyImageData} alt="Secure" size={82} rounded />
                    <h3 style={{ color: theme.palette4 }}>Secure</h3>
                    <TLDRSection color={theme.palette4}>
                      <TLDRTag color={theme.palette4}>TL;DR</TLDRTag>
                      <span>125+ independent mining nodes</span>
                    </TLDRSection>
                    <p>
                      With a truly decentralized Proof-of-Work model, Alephium operates independently of vulnerable
                      central validators,{' '}
                      <strong>ensuring maximum security, trustlessness, and censorship resistance.</strong>
                    </p>
                  </TextElement>
                </TextCardContent>
              </TextCard>
            </CardContainer>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon
                      image={greenDropIcon?.childImageSharp?.gatsbyImageData}
                      alt="Sustainable"
                      size={82}
                      rounded
                    />
                    <h3 style={{ color: theme.palette1 }}>Sustainable</h3>
                    <TLDRSection color={theme.palette1}>
                      <TLDRTag color={theme.palette1}>TL;DR</TLDRTag>
                      <span>87% lower environmental impact vs. traditional PoW</span>
                    </TLDRSection>
                    <p>
                      Alephium&apos;s Proof-of-Less-Work mechanism reduces energy consumption, making it{' '}
                      <strong>one of the most sustainable and responsible blockchains</strong> built for the future.
                    </p>
                  </TextElement>
                </TextCardContent>
              </TextCard>
            </CardContainer>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon
                      image={rockPileIcon?.childImageSharp?.gatsbyImageData}
                      alt="Programmable"
                      size={82}
                      rounded
                    />
                    <h3 style={{ color: theme.palette6 }}>Programmable</h3>
                    <TLDRSection color={theme.palette6}>
                      <TLDRTag color={theme.palette6}>TL;DR</TLDRTag>
                      <span>No compromise smart-contracts</span>
                    </TLDRSection>
                    <p>
                      Alephium&apos;s stateful UTXO model merges the best of both worlds -{' '}
                      <strong>Ethereum-like smart contract flexibility with Bitcoin-level security.</strong>
                    </p>
                  </TextElement>
                </TextCardContent>
              </TextCard>
            </CardContainer>
            <CardContainer>
              <TextCard>
                <TextCardContent>
                  <TextElement noHeadingsMargins>
                    <ImageIcon
                      image={featherIcon?.childImageSharp?.gatsbyImageData}
                      alt="Developer-friendly"
                      size={82}
                      rounded
                    />
                    <h3 style={{ color: theme.palette5 }}>Developer-friendly</h3>
                    <TLDRSection color={theme.palette5}>
                      <TLDRTag color={theme.palette5}>TL;DR</TLDRTag>
                      <span>Incredibly easy-to-use language (RALPH) and novel VM</span>
                    </TLDRSection>
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
      </SubheaderContent>
    </SubpageSection>
  )
}

const StatsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: var(--spacing-4) 0;
`

const CardsScroll = styled.div`
  display: flex;
  gap: ${CARD_GAP}px;
  overflow-x: auto;
  padding: var(--spacing-4) 0;
  scroll-snap-type: x mandatory;
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

const CardContainer = styled.div`
  flex: 0 0 ${CARD_WIDTH}px;
  scroll-snap-align: start;

  > div {
    height: 100%;
  }
`

const TLDRSection = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  padding: 10px 18px 10px 10px;
  background-color: ${({ color }) => colord(color).alpha(0.05).toRgbString()};
  border-radius: var(--radius-small);
  margin-top: var(--spacing-2);
  color: ${({ color }) => color};
  font-size: var(--fontSize-20);
  width: fit-content;
`

const TLDRTag = styled.div<{ color: string }>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  margin-right: 10px;
  border: 1px solid ${({ color }) => colord(color).alpha(0.5).toRgbString()};
  font-size: var(--fontSize-18);
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
