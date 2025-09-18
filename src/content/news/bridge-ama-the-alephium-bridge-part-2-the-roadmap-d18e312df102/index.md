---
date: 2023-12-26T09:55:35.249000Z
description: One month after the release of the bridge on mainnet, Cheng, Hongchao
  & Maud were interviewed by Vladimir in a Twitter space AMA. You can…
spotlight: false
featuredImage: image_9f37a62eb7.png
title: Bridge AMA — The Alephium Bridge — part 2 — The roadmap
---

_One month after the release of the_ <a href="https://bridge.alephium.org/#/transfer" ><em>bridge</em></a> _on mainnet, Cheng, Hongchao & Maud were interviewed by Vladimir in a Twitter space AMA. You can listen to the Twitter space itself_ <a href="https://twitter.com/i/spaces/1mrGmydQreMGy" ><em>here</em></a>_, or read on at your own pace! This article is a lightly edited version of the AMA, to improve the clarity and readability. This is part 2 of 3, and you can find part 1_ <a href="/news/post/the-alephium-bridge-ama-part-1-bd6536ea9cdc" ><em>here</em></a>_._

### The Roadmap

_After achieving significant milestones, there is always a period of adjustment as we transition to the next phase. As our team is composed of builders who prioritize development, we always have a list of things we want to build in the short and long term. Often, we work on multiple projects simultaneously. With the [mobile wallet](/wallets) and the bridge being launched, our attention is turning to future optimizations and new developments, with the next major undertaking being a network upgrade._

#### **Vladimir: Cheng has hinted at the next network upgrade on Discord. Could you share more details about this upgrade? Specifically, what are the focal points of the upcoming upgrade, and what time frame are we looking at for its implementation?**

Cheng: The <a href="/news/post/the-leman-network-upgrade-is-live-f52c89b7dd6a" >first network upgrade, Leman</a>, was huge. It improved Alephium significantly, enabling the current dapps. This upgrade was designed alongside the development of the bridge and the DEX. Key features included the dApps subcontract system, the APS system, and a new difficulty adjustment algorithm for stabilizing difficulty changes across different channels. Given that it was the first network upgrade for a new layer one with a new virtual machine and programming language, some refinement post-launch was expected.

Since then, the foundation has proved to be robust, evidenced by the successful development of products like the DEX, the Alephium Bridge, and <a href="https://deadrare.io/" >Deadrare NFT Marketplace</a>. We’ve also received valuable feedback from the community and developers. The next upgrade will focus on improving the blockchain based on this feedback, specifically targeting user and developer experiences. This focus aims to address common feedback and is anticipated to boost adoption significantly.

#### **Vladimir: Can you tell us more about the block time reduction? You’ve mentioned it a few times on Discord. Why did you decide that was one of the priorities? Is reducing the block time safe?**

Cheng: <a href="/news/post/block-time-and-block-size-16e37292444f" >Block time</a> reduction is a highly debated topic in the proof of work space, and there’s no consensus on the ideal block time for proof of work blockchains. Longer block times mean a more lightweight chain regarding storage and CPU computation, as the <a href="https://www.bitstamp.net/learn/blockchain/what-are-orphan-uncle-and-stale-blocks/" >uncle/orphan blocks</a> rate is lower. However, shorter block times are more user-friendly, especially for non-technical users, as they don’t have to wonder why <a href="/news/post/transactions-per-second-tps-f13217a49e39" >transactions take so long</a> to be included in the blockchain. Shorter block times also have technical advantages, such as a smaller mempool in normal cases, simplifying development both on the full node side and in applications interacting with the mempool.

The challenge lies in finding a balance that allows the blockchain to function efficiently, even at a large scale, similar to networks like Bitcoin or Ethereum. A major concern is block propagation time in large networks; a block time that is too short could increase the number of orphan/uncle blocks, affecting network security. Currently, the parameters selected by Ethereum represent a solid choice. We plan to adopt a similar approach for our next upgrade, but there might be room to reduce the block time further in the long term.

I want to highlight that reducing block time can have security implications. For instance, reducing it to 10 to 20 seconds could result in an orphan rate of around 15%, which means a potential 15% compromise in security. However, there are methods to mitigate this, such as the <a href="https://www.geeksforgeeks.org/what-is-ghost-protocol-for-ethereum/" >Ghost algorithm</a>. This algorithm incorporates the hashes of orphan blocks into new blocks, ensuring that the efforts in creating these orphan blocks are not wasted and are still part of the main blockchain. The trade-off here involves increased storage requirements, as more data will be stored on disk.

This trade-off is acceptable for Alephium, which is designed as a sharded, lightweight, and efficient blockchain. A 16-second block time is feasible for Alephium right now. There may be potential to reduce the block time further as bandwidth and CPU capabilities continue to evolve annually. This means the block propagation and the block validation get faster every year. So it means the orphan rate is not a problem.

#### **Vladimir: So you’re saying that our current goal is to reduce the block time from 64 seconds to 16 seconds. In doing so, we aim to maintain the same level of security while significantly increasing transaction speed. The only trade-off for this enhancement would be a slight increase in storage requirements.**

Cheng: Exactly, that’s the way to sum it up.

#### **Vladimir: Does the fourfold increase in the number of blocks within the same timeframe mean that each block will receive only a quarter of the previous reward? And what are the potential trade-offs, especially regarding the impact on the speed of token emissions?**

Cheng: We plan to adjust token emissions to ensure the total emission remains consistent. This means the protocol will emit the same amount of tokens overall.

When we reduce the block time from 64 seconds to 16 seconds, the block reward will be decreased by a factor of four. However, this adjustment alone is insufficient due to the presence of orphan blocks in the blockchain, similar to the proof-of-work version of Ethereum. Consequently, we will also reward miners for these orphan blocks. This requires us to allocate a portion of the main chain’s reward to these orphan blocks. To do this effectively, we first need to estimate the orphan rate. We plan to use data from the Ethereum proof-of-work chain as a reference, making necessary adjustments to fit our context.

#### **Vladimir: In the big picture, it doesn’t change anything to the** <a href="/news/post/alephium-block-rewards-72d9fb9fde33" ><strong>token emission schedule</strong></a>**. It doesn’t change much for the miners too, correct?**

Cheng: The block time change will not change the overall emission.

#### **Vladimir: Can you explain what group abstraction means, and why is it important? And does it mean that I will never have to consider which group I create an address on again? How does the group abstraction work with dApps?**

Hongchao: The need for group abstraction arises from our sharded design, which, while enhancing scalability, can introduce some inconveniences. For instance, with addresses existing in different groups, applications deployed in one group are only accessible by addresses within that specific group. It’s important to note that this limitation doesn’t apply to token transfers. You can freely transfer tokens from an address in one group to an address in any other group without issue. Therefore, when we discuss group abstraction, it pertains specifically to scenarios where addresses and applications are in different groups, potentially across multiple groups.

How do the wallet and <a href="https://www.alphad.app/" >dApps</a> interact to provide users with a smooth experience? For instance, the NFT marketplace is currently deployed in group zero, requiring users to have an address in this group. If a user has an address in group two and wants to buy an NFT, the process isn’t seamless at the moment. Before making the purchase, they would need to create an address in group zero and manually transfer tokens from their group two address to this new address.

This isn’t an optimal experience. However, there’s potential for the wallet to automate this process, managing these transfers and interactions more efficiently. For example, if a user wants to purchase something from the NFT marketplace deployed in group zero, but their address is in group two, the wallet might automatically create an address in group zero for them. It could then transfer the necessary tokens to this new address, complete the purchase, and transfer the bought item back to the user’s group two address. This process would eliminate the need for manual transfers and address management on the user part.

This scenario is just one example of how we can abstract the concept of groups to enhance the user journey. The effectiveness of this abstraction largely depends on how the dApp is written. Achieving a seamless experience requires a coordinated effort between the dApp and the wallet, which is a key aspect of what I consider group abstraction in wallet functionality.

#### **Vladimir: So the goal is that people don’t worry about the groups when using the wallet.**

Hongchao: I don’t know whether you can completely remove that, the goal is to minimize it significantly. The aim is to ensure that it doesn’t become a major user experience (UX) concern, as it currently stands as one of the primary user complaints.

#### **Vladimir: Maud wants to add something.**

Maud: Indeed, as previously mentioned, there are various methods to enhance the user experience, involving wallet improvements and backend developments. Modifications at the blockchain or endpoint level could also facilitate smoother interactions. It’s important to recognize that, despite the existing challenges, our sharding experience remains comparatively smooth. Our UTXO-based design enables us to implement <a href="/news/post/an-introduction-to-blockflow-alephiums-sharding-algorithm-bbbf318c3402" >a more user-friendly sharding design</a>. While it’s not flawless, it’s encouraging to know that refining this aspect will be a primary focus moving forward.

#### **Vladimir: The process of building and optimizing, with its continuous back-and-forth dynamic, is indeed fascinating. This leads me to a question for Chang regarding other exciting elements on the roadmap, such as gasless transaction support and developing more proof of concepts. These proof of concepts for dApps are crucial as they provide foundational blueprints for teams to build upon, evidenced by their instrumental role in developing the DEX and the NFT marketplace.**

#### **Cheng, could you briefly explain what gasless transaction support means? Additionally, could you share insights about the upcoming dApps and whether there are plans to expand hardware wallet support? You can address the first part, and I can follow up with the other questions afterwards.**

Cheng: Addressing the first question, <a href="https://docs.tor.us/customauth/compatibility-and-common-patterns/gasless-meta-transactions#:~:text=Gasless%20or%20meta%20transactions%20are,unfamiliar%20to%20the%20crypto%20ecosystem." >gasless transactions</a> primarily concern user experience. For example, when a new user bridges tokens from Ethereum to Alephium, they use \$ETH to pay for the transaction sending the tokens to the bridge. On Alephium’s side, they will need \$ALPH to interact with the blockchain and claim their tokens from the bridge. This requirement is inconvenient for users who don’t have immediate access to \$ALPH, as they typically need to purchase them from centralized exchanges beforehand, which can be problematic.

Gasless transactions aim to assist users in situations when they have tokens but lack the ALPH to pay for the gas needed for transacting. In the Ethereum ecosystem, there are proposals to address this issue, most of which involve using off-chain relays to cover the gas fees on behalf of the users. This approach is designed to simplify the process for new users who don’t have the necessary tokens to pay for gas fees.

The challenge with this implementation is the necessity of an off-chain component, which involves considerable work. <a href="https://twitter.com/alephium/status/1726556042425995760" >We currently have a relay for the bridge</a>, and managing this involves a significant amount of code and the need to address security concerns. However, we plan to introduce new instructions into the virtual machine in our next upgrade. These instructions will allow every project to create a gasless contract, enabling users to have their gas fees covered for specific services.

This approach will be fully on-chain, eliminating the need for any off-chain components, thereby making it fully decentralized and more secure. It simplifies the process, as projects only need to write a simple smart contract using our framework. This makes it not only secure but also convenient to implement. This could lead to the creating of various projects and new services on top of our platform, which is an exciting prospect.

#### **Vladimir: That’s indeed an exciting development. It will significantly ease access to Alephium for both users and developers, which is great news. Moving on, another aspect to consider is the wallet experience. This includes enhanced support for multi-signature functionality in the SDK and increased support for hardware wallets. Could you elaborate more on these improvements?**

Cheng: Yes, hardware wallet support has always been a goal for us, but bandwidth limitations have delayed its implementation. Following the network upgrade, we plan to prioritize this development. The <a href="https://github.com/alephium/ledger-alephium" >code is open-sourced</a>, allowing users to send transactions in a ‘blind’ mode. This means that <a href="https://docs.alephium.org/wallet/ledger" >with the manual installation of the Ledger app</a>, users can already use Ledger hardware to send transactions based on the transaction hash. This is a significant step forward, and we aim to build upon it after the network upgrade.

The primary aspect we still need to implement is the decoding functionality. This involves the hardware wallet receiving and decoding the transaction, computing the transaction hash from the raw data, and displaying the transaction details to the user. Implementing this will enhance security, although even our current ‘blind’ transaction process marks a significant improvement in security.

We plan to focus on developing this decoding feature soon. Given the solid foundation we have already established, it shouldn’t take too much time to complete. The only constraint has been our time, but we are committed to addressing this as a priority.

#### **Vladimir: The last question on this topic is about dApps’ proof of concepts. Which ones are you the most interested in?**

Cheng: I find lending protocols particularly intriguing, and stablecoins. My personal interest lies in exploring two concepts. The first is <a href="https://twitter.com/FlywheelDeFi/status/1730361602640347314" >Oracle-free protocols</a>, generally more secure than Oracle-based ones and less vulnerable to price manipulation attacks. Such attacks have frequently targeted protocols on EVM, even affecting major DeFi projects. Currently, Oracle-free protocols are <a href="https://www.nascent.xyz/idea/why-defi-is-broken-and-how-to-fix-it-pt-1-oracle-free-protocols" >gaining traction in the space</a>. On EVM, adapting to new protocols is more challenging due to the heavy integration of existing Oracle-based protocols into various systems, making them difficult to replace. Our blockchain is relatively new, so it presents an excellent opportunity to experiment with and adopt these protocols.

Another application I’m keen to see evolve is intent-based trading. Many decentralized exchanges (DEXs) currently operate on the automated market-making (AMM) model, which works well with substantial liquidity. However, in cases where liquidity is not as high, an order book model might be more efficient. To address this, there is emerging interest in the intent-based trading model. Uniswap’s version moves in this direction, along with other projects exploring similar concepts.

Given that these are relatively early-stage projects, we can adopt and adapt these new protocol types. Our use of the UTXO model aligns well with the order book style of dApps, offering a significant advantage for implementing intent-based trading protocols and facilitating peer-to-peer transactions. Unlike Ethereum’s model, which typically allows only one sender per transaction, our platform can handle multiple senders, opening up a range of new use cases. I am particularly excited to see experiments and developments in this area, as they promise to bring innovative and diverse functionalities to our platform.

_That is the end of part 2 of the AMA transcript!_ <a href="/news/post/bridge-ama-the-alephium-bridge-part-3-the-hackathon-grants-more-07942544dcc7" ><em>Part 3</em></a> _comes next week!_

---

Let us know if you have any questions on <a href="https://twitter.com/alephium" >Twitter</a>, [Discord](/discord), <a href="https://t.me/alephiumgroup" >Telegram</a> or <a href="https://www.reddit.com/r/Alephium/" >Reddit</a>!
