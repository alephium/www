import React, { FC } from 'react'

import Card from './Card'
import FeedItem from './FeedItem'
import DownloadIcon from '../images/download.svg'
import TestnetIcon from '../images/testnet.svg'
import HiringIcon from '../images/hiring.svg'

const Feed = () => (
  <Card bgColor="var(--color-grey-dark)">
    <FeedItem
      title="0.8.9 is available"
      subtitle="2 days ago"
      link={{
        text: 'Instructions',
        to: '#',
        newTab: true
      }}
      IconComponent={DownloadIcon}
    >
      Try out the latest version of our node! Lots of fixes and performance improvements. Check it out!
    </FeedItem>
    <FeedItem
      title="The testnet is on!"
      subtitle="6 days ago"
      link={{
        text: 'Block Explorer',
        to: 'https://testnet.alephium.org',
        newTab: true
      }}
      IconComponent={TestnetIcon}
    >
      Progress is happening fast. The testnet performances improve day after day, and we're getting closer to the
      mainnet launch. Get ready!
    </FeedItem>
    <FeedItem
      title="We're hiring"
      subtitle="6 days ago"
      link={{
        text: 'Block Explorer',
        to: '#',
        newTab: true
      }}
      IconComponent={HiringIcon}
    >
      You love blockchain and you know how to build something great with Scala? Come and join us!
    </FeedItem>
  </Card>
)

export default Feed