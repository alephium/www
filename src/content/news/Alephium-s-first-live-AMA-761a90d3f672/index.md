---
date: 2021-11-05T15:36:35.780000Z
description: On November 3rd, 2021 the Alephium team answered all the questions sourced
  from the community. A warm thank you to everyone for asking so…
spotlight: false
featuredImage: image_0b65cf3212.jpg
title: Alephium’s first live AMA
---

### On November 3rd, 2021 the Alephium team answered all the questions sourced from the community. A warm thank you to everyone for asking so many interesting questions! Below you will find the transcript of the AMA. Each question deep links to the corresponding passage in the video.

`video: https://www.youtube.com/watch?v=yq6A99DI1nk`

#### **Do you think 10,000 transactions per second is still attractive compared to for example Solana’s 70,000 transactions per second? \[**<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=348s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=348s" rel="noopener" target="_blank"><strong>Video Deep-link</strong></a>**\]**

10'000 is for 32 groups and 1024 shards, right now we have 16 shards, 4 groups as it is sufficient with the current network load.

TPS is not the only index for blockchain. There is always a tradeoff between security, decentralization, scalability, often called the blockchain trilemma. For example, BTC has a low TPS but is the most decentralized. Each project has a different approach to these tradeoffs. Our objective is to achieve the highest TPS possible without sacrificing decentralization and security and we’re confident we’ve done well on that front.

#### What would you say to the devs who advise against dealing with sharded chains? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=478s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=478s" rel="noopener" target="_blank">Video Deep-link</a>\]

Right now, sharding is the only layer one scaling solution. It is challenging and hasn’t been achieved successfully by a lot of projects. We believe Alephium to have one of the most advanced sharding implementations with 16 shards live and single-step cross-shard (or in our case, cross-group) transaction support.

Layer 2 (roll-up) is another way to scale. Currently, the majority of layer 2 projects encounter significant interoperability issues and suffer from the high transaction fee. The migration from Layer1 to Layer2 is expensive, time-consuming, and dramatically impacts user experience. Layers2 act as silos, they are a very isolated environment with partial smart contracts/functionalities support. Moving between the silos is difficult and ultimately, layer1 remains the bottleneck.

Sharding allows you to have access to all of the blockchain functionalities and Alephium’s layer 1 achieves similar performances compared to projects relying on layer 2 solutions. It is future-proof and provides a better user experience. For the long term, we believe Layer1 scaling that doesn’t sacrifice decentralization is a must.

However, sharding and Layer2 ways are not incompatible and Alephium will support both in the future.

#### Can Alephium face the problems that Ethereum has with scalability and transaction fees in the future? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=612s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=612s" rel="noopener" target="_blank">Video Deep-link</a>\]

To address the prospect of scalability issues, Alephium leverages sharding. Currently, we have 16 shards. However, if the demand for transactions would significantly grow, we can increase the number of shards to reduce the transaction fee.

#### How do you plan to encourage building dApps on Alephium? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=683s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=683s" rel="noopener" target="_blank">Video Deep-link</a>\]

We have already started to build dApps for demo purposes. Once the mainnet is launched, the main focus of the team will be to improve the tooling, documentation, specifications as well as the VM, the programming language, and Javascript SDK. The goal is to make building on Alephium as user-friendly and accessible as possible. To further incentivize this, we are working to design a good grant/token program.

#### Do you expect it to be difficult for dApp developers to deploy existing dApps from Ethereum to Alephium? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=738s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=738s" rel="noopener" target="_blank">Video Deep-link</a>\]

Based on our experience, it should be really easy to port dApps from Ethereum to Alephium. Especially once we have provided better documentation, tooling, and UX. Because our smart contract language and VM design solve many of the security issues currently encountered by Dapps, you will not need as many security audits for contracts. And if you take for instance Ethereum the solidity language is easy to learn but quite insecure due to its VM design. In contrast, it is much easier to write secure applications on Alephium. Overall Alephium offers a great balance between easy-to-write and secure applications.

#### How to attract stablecoins to the Alephium ecosystem? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=798s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=798s" rel="noopener" target="_blank">Video Deep-link</a>\]

There are two main ways to approach this. The first one is to bridge existing stablecoins to the Alephium Ecosystem. The second one is to collaborate with stablecoins project. For the latter, the Alephium needs to gain maturity and stability first in order for other projects to find it worthwhile.

However, we will be building our own stablecoin on Alephium, similar to the DAI stablecoin. Building a stablecoin is challenging, the oracle and liquidity being two well-known bottlenecks, but we’re confident in our capacity to offer a great platform for stablecoins.

#### We have seen Sushiswap, Anyswap, Beefy Finance, Curve, pNetwork, UniFi, RenVM, Synapse etc… Developing their application on 10+ chains, will they develop anything on ALPH ? How do you plan to contact them? What would be their incentive to use ALPH instead of MOVR, Polygon or Arbitrum for example? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=870s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=870s" rel="noopener" target="_blank">Video Deep-link</a>\]

Timing is key. It will require the network to gain maturity. But we are being proactive about it through event hosting and networking. We believe our approach to the Cryptocurrency Trilemma (the trade-offs between Decentralization, Security, and Scalability) is our Unique Selling Point in this matter: we are the only layer 1 scalable blockchain right now and the only one that offers smart contracts and dApps functionalities similar to Ethereum but with the Bitcoin security. We can also attract development by thriving for excellence in the User Experience: we offer better security for DeFi, we are a new platform meaning we provide new opportunities for devs, and because of how our transaction fees are designed these will not be a blocker for development as it is for example on Ethereum.

#### Can ALPH be traded in DeFi? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1012s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1012s" rel="noopener" target="_blank">Video Deep-link</a>\]

Yes, we can use bridges and wrap Alephium in Ethereum to use on Ethereum based DeFi for example. Although, since fees are incredibly high on Ethereum it might make more sense to start with some layer 2 projects or Binance Smart Chain. One thing to keep in mind is that preserving decentralization when building bridges is really challenging. In any case, our goal is to have DeFi happening on Alephium directly, since it’s been designed with this use case in mind.

#### What are your plans for the alephium-js repo? Do you plan any web3 npm package so developers can easily talk to f.e. a browser based alephium wallet from any js-based frontend? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1086s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1086s" rel="noopener" target="_blank">Video Deep-link</a>\]

Definitely. After the mainnet launch, we will dive into the DeFi/dApps and develop our libraries. The plan is to include all the packages in the JS repo.

#### Are you planning a new roadmap and if so, when? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1148s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1148s" rel="noopener" target="_blank">Video Deep-link</a>\]

Yes, we will have a more comprehensive and high-level public roadmap. Until then, you can go to our GitHub to see what the team is currently working on and what they will work on next. Everything is public. Our discord is also a very good place to see and participate in discussions about the current technical tasks and their progress.

#### How do you see the development of Alephium in the future and the dissemination of the project among users? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1199s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1199s" rel="noopener" target="_blank">Video Deep-link</a>\]

Our main focuses to grow and disseminate the project are the following:

- Develop and strengthen the Alephium ecosystem, tooling, Dapps while improving the overall User Experience
- Start solid partnerships and create bridges to other thriving projects to integrate with both the existing centralized (exchanges) and decentralized blockchain ecosystems.

In parallel, we are working to grow the technical community of Alephium to strengthen and further decentralize the project.

#### Tell us more about the vision of mass adoption of Alephium? Will it be very difficult, because of how niche the project is? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1262s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1262s" rel="noopener" target="_blank">Video Deep-link</a>\]

It’s definitely going to be a challenge. But all projects started off as “niche”. As it looks now, our approach is unique in the space and it answers an incontestable need. We believe it will generate significant organic traction. Of course, all of it depends also on our ability to expand the ecosystem and therefore our reach. Looking at the concrete reality of the space, being based in Switzerland is an advantage as the local ecosystem is really great.

#### As miners start mining, they will accumulate ALPH, but will have nowhere to sell the tokens initially, since there are no exchanges currently listing ALPH and no public sale yet. Do you believe that the listing on exchange will spark a dramatically higher hashrate? Do you think it could pose risks to the security of the blockchain itself? How long do you think miners will have to hold before being able to trade? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1336s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1336s" rel="noopener" target="_blank">Video Deep-link</a>\]

The future is always uncertain, but from our observations, this is usually how things unfold at the beginning of a blockchain project. The biggest spike of hashrate we predict is if Ethereum goes through with its Docking. The reason is that a large amount of GPUs will be available to mine something else than Ethereum. With more hashrate the block becomes faster but there is also more risk. The main concern is the 51% attack, which we have elegantly mitigated.

With regard to listing or public sale, we hope to make the token publicly available within the next 2 months following the mainnet launch. However, we do not control the timeline of the discussion with venues. Nonetheless, nothing is stopping anyone from trading freshly mined tokens directly with a miner.

#### Question regarding mining wallets and balances, I’m not yet sure if I understand the interplay between the four addresses correctly. \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1560s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1560s" rel="noopener" target="_blank">Video Deep-link</a>\]

This is linked to the notion of Groups. A Group contains a subset of all addresses on Alephium. There are 4 Groups in total and there are 4 shards per Group, making a total of 16 shards currently running on Alephium. You need to have 1 address per Group in order to get the rewards of mining blocks on each shard.

On a more general level, a wallet is just a seed that allows you to have a portfolio of addresses. When you create a miner wallet, you get at least four addresses: one in each group. This means when you query the balance, you see the aggregated balances of all the addresses of the wallet.

#### To compile contracts as of today, running a full node seems to be required. Will you provide an independent compiler to be used without having to run a node? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1632s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1632s" rel="noopener" target="_blank">Video Deep-link</a>\]

Yes. But for the time being, you can also call the public wallet endpoint allowing you to call a full node without having to run it yourself.

#### Are there any plans to write 3rd-party nodes, to have more than one implementation. Or at least produce some documentation regarding the protocols (blockflow, VM, etc.) to allow 3rd-parties to write their own implementation? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1689s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1689s" rel="noopener" target="_blank">Video Deep-link</a>\]

Yes, improving our documentation is a priority after the mainnet launch. As it will take some time, don’t hesitate to ask any questions through our channels. You are also welcome to contribute to the documentation.

#### Where are the specifications for the contract DSL, including a language reference (including grammar in EBNF or similar) and documentation of built-in functions? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1744s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1744s" rel="noopener" target="_blank">Video Deep-link</a>\]

Right now, it’s all in the code and the integration tests which feature multiple examples. We will work hard on improving our documentation after the mainnet is launched.

1.  Simple Uniswap-like contract <a href="https://github.com/alephium/alephium/blob/master/flow/src/test/scala/org/alephium/flow/core/VMSpec.scala#L869-L977" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/flow/src/test/scala/org/alephium/flow/core/VMSpec.scala#L869-L977" rel="noopener" target="_blank">here</a> with more examples in the same file <a href="https://github.com/alephium/alephium/blob/master/flow/src/test/scala/org/alephium/flow/core/VMSpec.scala" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/flow/src/test/scala/org/alephium/flow/core/VMSpec.scala" rel="noopener" target="_blank">here</a>.
2.  An integration test for the Uniswap-like exchange based on Rest API <a href="https://github.com/alephium/alephium/blob/master/app/src/it/scala/org/alephium/app/SmartContractTest.scala" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/app/src/it/scala/org/alephium/app/SmartContractTest.scala" rel="noopener" target="_blank">here</a>.
3.  Smart contract tutorial <a href="https://github.com/alephium/alephium/wiki/Smart-Contract-Guide" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/wiki/Smart-Contract-Guide" rel="noopener" target="_blank">here</a>.
4.  All of the built-ins <a href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/vm/lang/BuiltIn.scala#L195-L218" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/vm/lang/BuiltIn.scala#L195-L218" rel="noopener" target="_blank">here</a> and <a href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/vm/lang/BuiltIn.scala#L367-L393" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/vm/lang/BuiltIn.scala#L367-L393" rel="noopener" target="_blank">here</a>.

#### Is there a max number of shards for Alephium? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1800s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1800s" rel="noopener" target="_blank">Video Deep-link</a>\]

Based on our estimations (10Mb/sec) the maximum is 32 groups and 1024 shards. However hardware and bandwidth are improving every year, so this maximum could probably be increased over time.

#### How does Alephium protect against attack of 51%? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1858s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1858s" rel="noopener" target="_blank">Video Deep-link</a>\]

Alephium will provide a viable and dynamic hashrate in order to throw more resources and increase the hashrate to prevent 51% attacks.

For context, 51% attacks are not as critical as they are sometimes portrayed to be. The scope of such an attack is very limited and the main loss risk is double-spending for exchanges. However, they do render the network unusable for a short period of time. To mitigate the issue of double-spending for exchanges, we have implemented a safeguard: a maximum length of revert. If the fork is too deep, we don’t accept it, and as a result, the majority of the nodes will follow the good/right fork. Obviously, there is an emotional impact of a 51% attack that could trigger a price drop of the token.

#### In 2019 you were active at various conferences, it has quieted down recently, why? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1963s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=1963s" rel="noopener" target="_blank">Video Deep-link</a>\]

In 2019, Alephium only had its white paper. The team at the time participated in events and conferences in order to gain traction and funding in order to develop the blockchain. This effort was successful and the team spent the next 2,5 years turning the white paper into a reality as attested by our GitHub activity. With the mainnet launch approaching, we’ve kick-off more regular communication and online presence and will participate in events and conferences.

#### How are you planning on addressing privacy issues? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2160s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2160s" rel="noopener" target="_blank">Video Deep-link</a>\]

Alephium is a UTXO based blockchain and can provide pseudonymous privacy like Bitcoin where you can use multiple addresses, such as one per payment. Basically, you can use all the techniques available on Bitcoin itself to make more private transactions like no-address reuse, coin-join, and all the similar techniques that are applicable to UTXO.

#### Are you planning on developing standards or use existing ones from other blockchains? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2238s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2238s" rel="noopener" target="_blank">Video Deep-link</a>\]

We already use a lot of standards from Bitcoin and some from Ethereum. For example, the wallet is based on BIP32, BIP39, and BIP44. During the development, we borrowed a lot of ideas from Bitcoin and Ethereum to try and standardize things. On the other hand, we are a new blockchain with a very different architecture, meaning some of the standards we cannot use directly. But we try to adopt as many as possible. Since we might miss out on some useful standards, we welcome contributions from the community and collaboration with other projects. The latter is in part what the grant program will be used for.

#### Are you going to have a place where it is possible to contribute standards? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2366s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2366s" rel="noopener" target="_blank">Video Deep-link</a>\]

Yes we will have something like “AIP, Alephium improvement protocol”.

#### How are tokens handled in Alephium? \[<a href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2434s" class="markup--anchor markup--h4-anchor" data-href="https://www.youtube.com/watch?v=yq6A99DI1nk&amp;t=2434s" rel="noopener" target="_blank">Video Deep-link</a>\]

Alephium has a built-in token support on the VM side, which improves security dramatically. We welcome security reviews of our token feature.
