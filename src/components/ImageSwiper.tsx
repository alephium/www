import React, { FC } from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'

import WalletWelcomeImage from '../images/wallet-welcome.png'
import WalletSecurityImage from '../images/wallet-security.png'
import WalletReadyImage from '../images/wallet-ready.png'

interface ImageSwiperProps {
  className?: string
}

const ImageSwiper: FC<ImageSwiperProps> = ({ className }) => (
  <SwipeableViews enableMouseEvents className={className}>
    <View>
      <img src={WalletSecurityImage} alt="Wallet security check screen" />
    </View>
    <View>
      <img src={WalletWelcomeImage} alt="Wallet hi there screen" />
    </View>
    <View>
      <img src={WalletReadyImage} alt="Wallet everything is ready screen" />
    </View>
  </SwipeableViews>
)

const View = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
`

export default ImageSwiper
