import { motion } from 'framer-motion'
import { sortBy } from 'lodash'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import Button from './Button'
import Columns from './Columns/Columns'
import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import SimpleLink from './SimpleLink'
import SubsectionTextHeader from './SubsectionTextHeader'

export type HomepageEcosystemSectionContentType = {
  title: string
  subtitle: string
  subsections: {
    title: string
    description: string
    image: { publicURL: string }
    items: {
      title: string
      logo: { publicURL: string }
      url: string
    }[]
  }[]
}

interface HomepageEcosystemSectionProps {
  content: HomepageEcosystemSectionContentType
  className?: string
}

type Exchange = { name: string; logo: string; trade_url: string }
type EchangesRes = { name: 'Alephium'; tickers: { market: Exchange; trade_url: string }[] }

const HomepageEcosystemSection = ({
  content: { title, subtitle, subsections },
  className
}: HomepageEcosystemSectionProps) => {
  const [exchanges, setExchanges] = useState<Exchange[]>()

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const exchanges = await fetch(
          'https://api.coingecko.com/api/v3/coins/alephium/tickers?include_exchange_logo=true'
        )
        const res = (await exchanges.json()) as EchangesRes

        const exchangeList = res.tickers.reduce((acc, { market, trade_url }) => {
          if (!acc.find((m) => m.name === market.name)) {
            // Coingecko API returns a different (restricted) URL for the logo, so we need to replace it
            acc.push({ name: market.name, logo: market.logo.replace('coin-images', 'assets'), trade_url: trade_url })
          }
          return acc
        }, [] as Exchange[])

        setExchanges(sortBy(exchangeList, (e) => (e.name === 'AYIN' ? 0 : 1)))
      } catch (e) {
        console.error('Error fetching exchanges:', e)
      }
    }

    fetchExchanges()
  }, [])

  return (
    <section className={className}>
      <SectionTextHeader titleRows={[title]} subtitleRows={[subtitle]} bigSubtitle bigText />
      <SectionContainer>
        <Subsections>
          {subsections.map(({ title, description, image, items }) => (
            <Subsection key={title} animateEntry>
              <SubsectionImageContainer>
                {image && <img src={image.publicURL} alt={title} loading="lazy" />}
              </SubsectionImageContainer>
              <SubsectionTextContent>
                <SubsectionTextHeader title={title} subtitle={description} />
                <SubsectionItems variants={containerVariants}>
                  {title === 'dApps & projects' ? (
                    <Button url="https://alph.land">Discover the Alephium ecosystem</Button>
                  ) : (
                    items &&
                    items.map(({ title, logo, url }) =>
                      url ? (
                        <SimpleLink
                          url={url}
                          text={title}
                          key={url}
                          trackingName={`ecosystem-section:${title.replaceAll(' ', '-')}-link`}
                        >
                          <SubsectionItem key={title} variants={itemVariants}>
                            {logo ? (
                              <>
                                <SubsectionItemTitle className="with-logo">{title}</SubsectionItemTitle>
                                <SubsectionItemLogoContainer>
                                  <SubsectionItemLogo src={logo.publicURL} alt={title} loading="lazy" />
                                </SubsectionItemLogoContainer>
                              </>
                            ) : (
                              <SubsectionItemTitle>{title}</SubsectionItemTitle>
                            )}
                          </SubsectionItem>
                        </SimpleLink>
                      ) : (
                        <SubsectionItem key={title}>
                          <SubsectionItemTitle>{title}</SubsectionItemTitle>
                        </SubsectionItem>
                      )
                    )
                  )}
                </SubsectionItems>
              </SubsectionTextContent>
            </Subsection>
          ))}
          {exchanges && (
            <VerticalSubsection>
              <SubsectionTextHeader title="Exchanges" subtitle="Find $ALPH on the following exchanges:" />
              <SubsectionItems variants={containerVariants}>
                {exchanges.map(({ name, logo, trade_url }) => (
                  <SimpleLink
                    url={trade_url}
                    text={name}
                    key={name}
                    trackingName={`ecosystem-section:${name.replaceAll(' ', '-')}-link`}
                  >
                    <ExchangeItem key={name}>
                      <ExchangeLogo src={logo} alt={name} loading="lazy" />
                      <ExchangeName>{name}</ExchangeName>
                    </ExchangeItem>
                  </SimpleLink>
                ))}
              </SubsectionItems>
            </VerticalSubsection>
          )}
        </Subsections>
      </SectionContainer>
    </section>
  )
}

export default styled(HomepageEcosystemSection)`
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
  position: relative;
`

const SectionContainer = styled(PageSectionContainer)`
  margin-top: var(--spacing-12);
`

const Subsections = styled.div`
  margin-top: var(--spacing-5);
`

const SubsectionImageContainer = styled.div`
  flex-grow: 1;

  @media ${deviceBreakPoints.mobile} {
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing-6);
    height: 250px;
  }

  img {
    width: 60%;
  }
`

const SubsectionTextContent = styled.div`
  max-width: 50%;

  @media ${deviceBreakPoints.mobile} {
    max-width: 100%;
  }
`

const Subsection = styled(Columns)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: stretch;
  }

  &:nth-child(odd) {
    ${SubsectionImageContainer} {
      order: 2;
      text-align: right;

      @media ${deviceBreakPoints.mobile} {
        order: 0;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-20);

    @media ${deviceBreakPoints.mobile} {
      margin-bottom: var(--spacing-10);
    }
  }
`

const VerticalSubsection = styled.div`
  display: flex;
  flex-direction: column;
`

const SubsectionItems = styled(motion.div)`
  margin-top: var(--spacing-4);
  gap: var(--spacing-3);
  display: flex;
  flex-wrap: wrap;
`

const SubsectionItemTitle = styled.div`
  font-weight: var(--fontWeight-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  text-align: center;
  padding: var(--spacing-1);
`

const SubsectionItemLogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-5px);
  padding: var(--spacing-2);
  display: flex;
  will-change: opacity, transform;
`

const SubsectionItemLogo = styled.img`
  flex: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  will-change: transform;
`

const SubsectionItem = styled(motion.div)`
  position: relative;
  width: 115px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surface1};
  box-sizing: border-box;
  border-radius: 16px;
  font-size: 13px;
  overflow: hidden;
  will-change: transform;

  &:hover {
    ${SubsectionItemTitle}.with-logo {
      opacity: 0;
      transform: translateY(-5px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    ${SubsectionItemLogoContainer} {
      opacity: 1;
      transform: translateY(0);
    }

    ${SubsectionItemLogo} {
      transform: scale(1.05);
    }
  }
`

const ExchangeItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.surface1};
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.surface2};
  }
`

const ExchangeLogo = styled.img`
  width: 30px;
  height: 30px;
`

const ExchangeName = styled.div`
  font-weight: var(--fontWeight-medium);
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}
