import React, { FC } from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'

import WalletHiThereImage from '../images/wallet-hi-there.png'
import WalletSecurityCheckImage from '../images/wallet-security-check.png'
import WalletEverythingIsReadyImage from '../images/wallet-everything-is-ready.png'

interface ImageSwiperProps {
  className?: string
}

const ImageSwiper: FC<ImageSwiperProps> = ({ className }) => (
  <SwipeableViews enableMouseEvents className={className}>
    <View>
      <img src={WalletSecurityCheckImage} alt="Wallet security check screen" />
    </View>
    <View>
      <img src={WalletHiThereImage} alt="Wallet hi there screen" />
    </View>
    <View>
      <img src={WalletEverythingIsReadyImage} alt="Wallet everything is ready screen" />
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
