import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageEcosystemSection = () => {
  const [dappsLogos, setDappsLogos] = useState<string[]>([])

  useEffect(() => {
    fetch('https://publicapi.alph.land/api/dapps').then((res) =>
      res.json().then((data) => {
        setDappsLogos(data.map((dapp: { media: { logoUrl: string } }) => dapp.media.logoUrl))
      })
    )
  }, [])

  return (
    <>
      <SubpageSection>
        <TextElement isCentered>
          <h2>
            Built on Alephium.
            <br />
            Built to last.
          </h2>
          <p>
            Alephium is home to pioneers, combining <strong>strong technology and a bustling community</strong> to bring
            the <strong>next generation of decentralized applications to life</strong>.
          </p>
          <TextElement isCentered>
            <Button url="https://alph.land">Explore ecosystem</Button>
          </TextElement>
        </TextElement>
        <LogosContainer>
          {dappsLogos.map((logo, index) => (
            <LogoWrapper key={index}>
              <img src={logo} alt={`Dapp logo ${index}`} />
            </LogoWrapper>
          ))}
          <MoreWrapper key="more">
            <a href="https://alph.land" target="_blank" rel="noopener noreferrer">
              <span>See more on Alphland</span>
              <span aria-hidden="true">→</span>
            </a>
          </MoreWrapper>
        </LogosContainer>
      </SubpageSection>
    </>
  )
}

const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  margin-top: var(--spacing-8);
`

const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 9px;
  }
`

const MoreWrapper = styled(LogoWrapper)`
  background-color: ${({ theme }) => theme.bgSecondary};
  width: calc(80px * 3 + 1rem * 2);
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bgPrimary};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    gap: 0.5rem;
  }

  span {
    text-align: center;
    font-size: var(--fontSize-20);
    color: ${({ theme }) => theme.textSecondary};
  }

  span[aria-hidden='true'] {
    display: inline-block;
    transform: rotate(-45deg);
  }
`

export default HomepageEcosystemSection
