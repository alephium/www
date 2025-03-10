---
title: "Alephium — Q1 Project Update"
date: "2022-01-04"
description: "Alephium mainnet is live and fully functional since November 8th, 2021. We are now focused on building and enriching tooling for wallets…"
---

<div>

# Alephium — Q1 Project Update

</div>

<div class="section p-summary" field="subtitle">

Alephium mainnet is live and fully functional since November 8th, 2021. We are now focused on building and enriching tooling for wallets…

</div>

<div class="section e-content" field="body">

<div id="0402" class="section section section--body section--first section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### Alephium — Q1 Project Update

<figure id="020d" class="graf graf--figure graf-after--h3">
<img src="https://cdn-images-1.medium.com/max/800/1*acXXT6VDrHXD7wb2KL3nSg.jpeg" class="graf-image" data-image-id="1*acXXT6VDrHXD7wb2KL3nSg.jpeg" data-width="768" data-height="467" data-is-featured="true" />
</figure>

<span class="graf-dropCap">A</span>lephium mainnet is live and fully functional since November 8th, 2021. We are now focused on building and enriching tooling for wallets, mining, explorer, bridges, DeFi, dApps and NFT’s, as well as expanding our community of developers, miners and users.

During December, almost everyone from the team was able to get together and attend a moment of both retro and futuro-spective in the home of Scala at the EPFL in Lausanne, Switzerland.

To begin this new year, we’d like to share what came out of this meeting in the form of a project update. Please note that this update includes a non-exhaustive and non-binding draft of what lays ahead and what we want to achieve during the first part of 2022.

### Business & Operations Update

#### Listing

We are very happy to say that we are on track for a listing in January. However, the listing won’t be accompanied by a public sale. Indeed, the exchange we are moving forward with no longer offers it due to a change in the regulatory framework. We will communicate more information as soon as we can.

#### Strategic Partnerships

Several potential partners that could greatly benefit the project have reached out to Alephium with a desire to get involved. Growing our ecosystem and fostering contributions is key to increasing Alephium’s adoption.

Given that we will not be able to hold a public sale, we have decided to conduct a small private sale ahead of the listing. This sale targets exclusively participants who can contribute strategically to the development of the technical and dApps ecosystem of Alephium as well connected people or groups who can help us ease access to key entities and individuals. The ALPH sold to strategic partners will be subject to 3 years on-chain lock with quarterly vesting.

We’re not looking to sell a predefined amount of ALPH. If anything, we would like to minimize the number of tokens sold. We only consider selling if the strategic partnership makes sense for the project, if it does not, the sale will not take place.

The ALPH sold during this sale will come from the allocation planned for future sales.

The purchase will take place through a recognized Swiss Financial Intermediary and participants will need to complete KYC.

#### Marketing / Project awareness

Alephium aims for organic and qualified growth over exponential, short-lived growth. It has proven very difficult to find an agency that can cater to our expectations. The main issue resides in the fact that we currently need to raise awareness in a very small segment of highly technical communities. This is why we opted for moving the project awareness in-house and hired a skilled teammate with a good understanding of crypto and solid marketing background. We hope that this will help us attain the visibility we need in the segments we target at the moment.

### Technology update

#### Full node

Alephium full node development has reached the end of the pre-maturity phase and will soon enter the maturity phase. The core algorithm will be further optimized and new features will be added. Later on, we’ll move to v2 with the goal of scaling group numbers, improving stability, and so forth.

The service layer requires attention and improvements, specifically the endpoints. We want to enhance the UX for dApp developers. This is critical to foster the adoption and growth of the Alephium ecosystem. If Devs have fun and painless building time on our infrastructure, chances are that they will come up with fantastic projects.

In terms of network, synchronization of the full-node still takes more time than we’d like. Further optimization is necessary and can be achieved without changes to the core algorithm.

For now, the IO is not a bottleneck. But it has become clear that it could be if transactions would increase significantly.

The Database side needs a proper upgrade. Part of our team will work on a faster synchronization mode similar to ETH’s. Networking is complicated in peer-to-peer setups as parameters and configuration impact greatly the ability of the network to operate as intended.

#### Bridges

Bridges are a key component of the project’s ecosystem as they will provide interoperability between Alephium and other blockchains, effectively increasing the decentralization. The aim is to start building our own bridges, but we will be reaching out to other bridge projects as well. Collaboration is important for decentralization and interoperability!

Bridging is also necessary to bring stable coins to Alephium, although we are considering creating our own implementation as well. This will be worked on during the coming months.

#### dApps

We identified DeFi and dApps to be the next critical focus for Alephium. To support development in these areas, we will need to build quite a lot of tools. The endpoints are already being worked on. We’d like to quickly be able to offer debugging tools and unit tests for smart contracts.

To this end, we will set up a separate repo and work to improve the development experience.   
To kickstart the development we will also build clean Proof-of-concept dApps, to serve as examples. This will help us find bottlenecks or edge cases we haven’t been able to identify before. It will also serve as a basis to compile the necessary documentation to help community developers to build and deploy their applications.

**Tell us which PoC you’d like to see in the discord!**

#### Wallet

The wallet will get a lot of love. A Browser extension and a hook to connect to dApps are in the making.

An important security piece is hardware wallets. Currently, we are thinking of working with an external Swiss team of professional hardware developers for the first iteration and eventually internalizing the development to accelerate support of the main HW players in the space internally (namely ledger/trezor).

#### NFT Platform

NFT being self-contained, in the sense that it doesn’t require any bridges on Alephium, an NFT platform is a great candidate for our next dApp proof of concept. We have started the investigation work. As of now, it doesn’t seem that the full node would require any changes for this to be possible. But it may show us where we could improve endpoints and the explorer backend. We are looking into the best approach for the storage of the data attached to the NFT.

**Get ready to mint!**

#### Mining Pool

Security is key for mining pools. But the tricky part is the algorithm to distribute rewards as the amount of mining-pool members and the hashrate increase. Right now we are building small to medium-sized pools. These could be scaled to several terahash. However, larger pools would need greater expertise in the domain than is currently available. The pools first need improved source code and better testing, after which there will be a need to implement data analysis. Integrating a UI would be a welcomed addition. Some of this is already being built by a team member who has managed to resolve most of the issues reported.   
Ideally, the development of the mining pool needs to be passed on to the community. This poses interesting challenges in how to help community operators and professional pools to collaborate.   
The handover has already begun! A 3rd party pool called <a href="https://pool.devgent.net/" class="markup--anchor markup--p-anchor" data-href="https://pool.devgent.net/" rel="noopener" target="_blank">Devgent</a> has been created by a community member and it is currently open for registrations. And a second 3rd party pool is in the way of integrating Alephium support.

#### Explorer

The explorer will see small improvements too. Mainly in terms of readability. It should be as easy as possible to understand the data displayed. Metrics have been requested many times by several community members and will be added.

#### 2022

2021 was a strange year. Simultaneously full of uncertainty and plenty of opportunities. If anything for Alephium it’s been a pivotal year with many exciting moments and will forever be the year of the project’s inception. The entire Alephium team thanks you for being an integral part of this journey, for your insights, contributions and support. It’s been a privilege to get to learn from the community and we’re looking forward to seeing the goodness that 2022 will bring to the stack.

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [January 4, 2022](https://medium.com/p/50f4a7b354b0).

<a href="https://medium.com/@alephium/alephium-q1-project-update-50f4a7b354b0" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
