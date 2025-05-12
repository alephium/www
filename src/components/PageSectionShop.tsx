import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import firstDesign from '../images/t-shirt-mountain.svg'
import tShirtPlaceholder from '../images/t-shirt-placeholder.png'
import secondDesign from '../images/t-shirt-rainbow-fill.svg'
import thirdDesign from '../images/t-shirt-rainbow-stroke.svg'
import fourthDesign from '../images/t-shirt-waves.svg'
import ArrowedLink from './ArrowedLink'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'

export interface PageSectionShopContentType {
  title: string
  subtitle: string
  description: string
  link: {
    url: string
    text: string
  }
}

interface ShopProps {
  className?: string
  content: PageSectionShopContentType
}

const shirtDesigns = [firstDesign, secondDesign, thirdDesign, fourthDesign]

const Shop: FC<ShopProps> = ({ className, content }) => {
  const [shirtDesign, setShirtDesign] = useState(firstDesign)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = shirtDesigns.findIndex((v) => v === shirtDesign)
      const nextIndex = currentIndex === shirtDesigns.length - 1 ? 0 : currentIndex + 1
      setShirtDesign(shirtDesigns[nextIndex])
    }, 600)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <section className={className}>
      <PageSectionContainer>
        <Columns>
          <Column vertialCenter>
            <SectionTextHeader titleRows={[content.title]} subtitleRows={[content.subtitle]} bigSubtitle bigText>
              <p>{content.description}</p>
              <ArrowedLink url={content.link.url} trackingName="shop-section:main-link">
                {content.link.text}
              </ArrowedLink>
            </SectionTextHeader>
          </Column>
          <Column vertialCenter>
            <ShirtDesignWrapper>
              <img src={tShirtPlaceholder} width="70%" style={{ margin: 'auto' }} alt="tee-shirt-placeholder" />
              <TeeShirtDesign>
                {shirtDesigns.map((s) => (
                  <img
                    key={s}
                    src={s}
                    alt="tee-shirt-design"
                    style={{ display: shirtDesign === s ? 'block' : 'none' }}
                  />
                ))}
              </TeeShirtDesign>
            </ShirtDesignWrapper>
          </Column>
        </Columns>
      </PageSectionContainer>
    </section>
  )
}

export default styled(Shop)`
  padding: var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.textPrimary};
  align-items: center;

  * {
    text-align: left;
  }

  .text-content {
    p {
      margin-bottom: var(--spacing-4);
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const ShirtDesignWrapper = styled.div`
  position: relative;
  display: flex;
`

const TeeShirtDesign = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  height: 25%;
  width: 25%;
  margin-right: auto;
  margin-left: auto;
`
