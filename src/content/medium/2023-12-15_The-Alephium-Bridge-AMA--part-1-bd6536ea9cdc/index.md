---
title: "The Alephium Bridge AMA— part 1"
date: "2023-12-15"
description: "One month after the release of the bridge on mainnet, Cheng, Hongchao & Maud were interviewed by Vladimir in a Twitter space AMA. Where are…"
---

<div>

# The Alephium Bridge AMA— part 1

</div>

<div class="section p-summary" field="subtitle">

One month after the release of the bridge on mainnet, Cheng, Hongchao & Maud were interviewed by Vladimir in a Twitter space AMA. Where are…

</div>

<div class="section e-content" field="body">

<div id="e872" class="section section section--body section--first section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### The Alephium Bridge AMA— part 1

<figure id="99e2" class="graf graf--figure graf-after--h3">
<img src="https://cdn-images-1.medium.com/max/800/0*h_HBh2b3T5XPTQ8r" class="graf-image" data-image-id="0*h_HBh2b3T5XPTQ8r" data-width="1600" data-height="914" data-is-featured="true" />
</figure>

*One month after the release of the* <a href="https://bridge.alephium.org/#/transfer" class="markup--anchor markup--p-anchor" data-href="https://bridge.alephium.org/#/transfer" rel="noopener" target="_blank"><em>bridge</em></a> *on mainnet, Cheng, Hongchao & Maud were interviewed by Vladimir in a Twitter space AMA. Where are we on the bridge, how did it come to be, and what’s ahead for the bridge?*

*You can listen to the Twitter space itself* <a href="https://twitter.com/i/spaces/1mrGmydQreMGy" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/i/spaces/1mrGmydQreMGy" rel="noopener" target="_blank"><em>here</em></a>*, or read on at your own pace! This article is a lightly edited version of the AMA, to improve the clarity and readability. This is part 1 of 3.*

**Intro & bridge stats**

Over the past month (as of 12.7.23), we have observed a significant uptick in activity. This includes approximately 5,000 new live addresses and nearly 4,000 <a href="https://alephium.org/#wallets" class="markup--anchor markup--p-anchor" data-href="https://alephium.org/#wallets" rel="noopener" target="_blank">wallet</a> activations across both desktop and mobile platforms, excluding extensions. The statistics from <a href="https://ayin.app/" class="markup--anchor markup--p-anchor" data-href="https://ayin.app/" rel="noopener" target="_blank">Ayin</a> (our native DEX) indicate a trading volume exceeding \$3 million, over thousands of transactions. Additionally, the number <a href="https://etherscan.io/token/0x590f820444fa3638e022776752c5eef34e2f89a6" class="markup--anchor markup--p-anchor" data-href="https://etherscan.io/token/0x590f820444fa3638e022776752c5eef34e2f89a6" rel="noopener" target="_blank">of $ALPH Ethereum holders</a> is approaching a thousand. There has been almost 600 bridge transfers, amounting to a total value of \$2.5 million. The Total Value Locked (TVL) on the <a href="https://bridge.alephium.org/#/transfer" class="markup--anchor markup--p-anchor" data-href="https://bridge.alephium.org/#/transfer" rel="noopener" target="_blank">Alephium Bridge</a>, as reported by <a href="https://defillama.com/protocol/alephium-bridge" class="markup--anchor markup--p-anchor" data-href="https://defillama.com/protocol/alephium-bridge" rel="noopener" target="_blank">DefiLlama</a>, currently stands at \$1.8 million.

**The Alephium Bridge**

**Vladimir: Can you tell us a bit about the story about the bridge? How long did it take to get there? How did you decide to go for a warm whole fork? What was the process with the guardians?**

Hongchao: I would like to acknowledge the contributions of Muchen, who has been the lead on this project. Our initial efforts for the bridge began before the summer of 2022.

Given the high-security demands of such critical infrastructure, we prioritized leveraging existing, proven technologies rather than creating our own from scratch. After evaluating various bridge implementations available in the market, we selected <a href="https://docs.wormhole.com/wormhole/" class="markup--anchor markup--p-anchor" data-href="https://docs.wormhole.com/wormhole/" rel="noopener" target="_blank">Wormhole</a> for several reasons.

Firstly, the code quality of Wormhole is impressive and arguably among the best in the market.

Secondly, the significant Total Value Locked (TVL) in Wormhole at the time was a positive indicator of its reliability and adoption.

Lastly, despite some known hacks, these incidents primarily affected peripheral elements rather than the core components of the bridge, and Wormhole has demonstrated stability over an extended period.

We are confident in the robustness of the core component of the bridge, which was a key factor in our decision to choose it. The development process for the bridge was extensive, primarily because the bridge’s smart contracts were among the first complex contracts written on Alephium. During this process, we encountered various challenges related to the language, the virtual machine (VM), and development tools. These challenges allowed us to revisit and enhance both the VM and the language.

Additionally, we significantly improved our <a href="https://github.com/alephium/alephium-web3" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium-web3" rel="noopener" target="_blank">software development kit (SDK</a>) to facilitate more effective unit testing. For instance, we introduced a full node endpoint to test the contracts and upgraded our SDK to support better unit testing practices. We also developed a build tool analogous to Hardhat or Truffle used in the Ethereum ecosystem. This entire process was an opportunity for us to make comprehensive improvements and advancements in our development infrastructure.

While it may seem that our development process for the bridge was lengthy, it involved much more than just its construction. Our goal was to thoroughly address any issues and potential bugs, which is why we ran extensive tests on the testnet for a considerable period. In addition to building the bridge, <a href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" target="_blank">a significant focus was placed on its infrastructure</a>. Proper management and maintenance of the bridge are crucial, as many bridge hacks are often the result of inadequate infrastructure maintenance, such as poor key management. In our approach, we’ve implemented robust security measures. For example, <a href="https://twitter.com/alephium/status/1716858711493493013" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1716858711493493013" rel="noopener" target="_blank">all our guardians</a> operate within a transparently codified infrastructure, ensuring that any changes to the infrastructure require two-factor authentication. This is part of our comprehensive effort to maintain the bridge secure and efficient.

**Vladimir: What was the most challenging part of the work?**

Hongchao: Undoubtedly, ensuring security has been a challenging aspect of this project, given its critical role in our infrastructure. We’re optimistic that developing in Alephium now offers an even more positive experience. When looking back a year, the scenario was different due to the lesser maturity of tools, some complexities in the VM, and the language, which added an extra layer of challenge.

I feel that this project has also provided a sense of validation. While it’s one thing to discuss the potential of <a href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" target="_blank">our VM</a> (Alphred), <a href="https://docs.alephium.org/ralph/getting-started" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/ralph/getting-started" rel="noopener" target="_blank">language</a> (Ralph), and the capabilities of our <a href="https://medium.com/@alephium/an-introduction-to-the-stateful-utxo-model-8de3b0f76749" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/an-introduction-to-the-stateful-utxo-model-8de3b0f76749" target="_blank">state-of-the-art UTXO</a>, the <a href="https://medium.com/@alephium/alephiums-aps-eliminating-evm-token-approval-risks-5407e7e70a33" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephiums-aps-eliminating-evm-token-approval-risks-5407e7e70a33" target="_blank">Asset Permission System (APS)</a>, and the <a href="https://twitter.com/alephium/status/1643961985841905664" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1643961985841905664" rel="noopener" target="_blank">language’s conciseness</a>, it’s entirely another to witness these elements being effectively utilized in a serious software application. Successfully deploying this software has indeed been a significant achievement that reinforces our confidence in the technology we’ve developed.

**Vladimir: My next question is for Maud because you have been on the other side of the experience of the bridge, and you have worked on the ops and legal part of it. How have you managed the legal aspects of the bridge? How did you make it so that it just works for normal people?**

Maud: Under Alephium, we operate as a known entity based in Switzerland, which necessitates compliance with local laws. While we are not anonymous, ensuring legal compliance is crucial for us. One challenge we’ve encountered is that bridges in the crypto industry, unlike exchanges and other components, haven’t been extensively scrutinized legally. Consequently, there isn’t a well-established legal framework or jurisprudence specifically for bridges.

We collaborated with a competent legal team to identify and address critical legal aspects. While the bridge itself, being decentralized and primarily composed of smart contracts, didn’t require extensive legal scrutiny, we focused more on the user interface (UI). The UI, which provides a centralized interface to interact with the bridge, necessitated careful legal consideration due to its deployment and linkage to centralized systems. Although I don’t wish to delve into tedious details, there were specific restrictions and considerations we had to address regarding the UI.

<a href="https://medium.com/@alephium/alephiumalephium-bridge-the-tutorial-28e7b92b339a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephiumalephium-bridge-the-tutorial-28e7b92b339a" target="_blank">We had to ensure that users could connect both their sending and recipient wallets through the interface when using the bridge.</a> Additionally, <a href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" target="_blank">we wanted to clearly communicate</a> that our interface is just one of many possible ways to interact with the bridge. Users can develop their interfaces or directly interact with the smart contract if they have the requisite expertise.

Regarding the guardians we selected for the bridge, which we have publicly disclosed, it’s important to note that most of them are businesses or companies. Consequently, they have their own legal obligations to fulfill. It was essential for us to provide clarity on the implications and responsibilities of being a Guardian to these entities. This aspect of our work was particularly interesting because it addresses issues that haven’t been extensively explored in the industry yet.

**Vladimir: How do you perceive the increasing influx of people into the ecosystem, particularly in terms of realizing a multi-chain world that aligns with your vision? Could you share how this influences and motivates you for the future?**

Cheng: I am personally very excited and impressed by the progress we’ve made with the DEX, including its quality and the active participation from the entire community. It’s not just the core development team and the core team that has excelled; the entire Alephium community has done an exceptional job in providing liquidity for it and promoting both the bridge and DEX, thereby attracting more people to our ecosystem. This is a significant achievement for both the core team and the wider community.

Currently, the price impact of swapping significant amounts, like 10k, is relatively small — a notable improvement from a couple of months ago. This success demonstrates the effectiveness of our UTXO model, which is as functional as the account model but more user-friendly since it doesn’t require token pre-approval. Although using the bridge still requires token approval on the Ethereum side, which has presented some challenges, <a href="https://twitter.com/alephium/status/1673354565801091074" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1673354565801091074" rel="noopener" target="_blank">our blockchain eliminates such concerns</a>. This is an excellent real-life example of our ecosystem’s advantages.

Another significant aspect of our work is the enhanced security of our model. While its robustness might not be immediately apparent when everything functions smoothly, our model is inherently more secure than the traditional account model. It eliminates the need for unlimited token approvals and reduces the risk of token loss due to contract bugs.

Personally, the success of the DEX has been highly motivating. We plan to develop more decentralized finance (DeFi) solutions in collaboration with the community. This approach is particularly beneficial for us as a smaller project, as collaborating with large centralized services like Coinbase or Binance can be challenging. Focusing on DeFi can resolve many issues associated with centralized services. Our commitment extends beyond the DEX; we aim to contribute to the building of a broader range of DeFi solutions to enhance our ecosystem and its capabilities.

**Vladimir: I’d like to take this opportunity to give a shout-out to the team at** <a href="http://ayin.app" class="markup--anchor markup--p-anchor" data-href="http://ayin.app" rel="noopener" target="_blank"><strong>Ayin</strong></a>**. Their work has resulted in a highly effective and enjoyable swapping experience. And if you haven’t tried** <a href="https://docs.ayin.app/ayin/rubber" class="markup--anchor markup--p-anchor" data-href="https://docs.ayin.app/ayin/rubber" rel="noopener" target="_blank"><strong>Rubber</strong></a> **yet, I recommend it — it’s quite an engaging and fun game, with a unique vibe that’s definitely worth experiencing.**

Cheng: The team has done a great job.

**Vladimir: We’ve successfully operated the bridge from and to ETH for a month now, and previously, there was a discussion about creating a bridge to BSC. Is this still part of our roadmap? Additionally, are there plans for other projects, similar to how Flux has developed a bridge with BASE? For instance, are we considering a bridge to an L2? Hongchao, could you provide some insights on this?**

Hongchao: BSC is indeed part of our future roadmap. We already have a <a href="https://testnet.bridge.alephium.org/" class="markup--anchor markup--p-anchor" data-href="https://testnet.bridge.alephium.org/" rel="noopener" target="_blank">testnet bridge</a> where BSC is enabled, making it relatively straightforward to activate it on the mainnet in the future. Regarding other chains, including L2 solutions, our decision to support them will depend on the potential impact they can have on our ecosystem. My last review of the total TVL (Total Value Locked) and the ranking of chains in terms of TVL indicated that most chains supported by Wormhole could be integrated without significant issues. So, supporting these chains should be feasible for us. That’s my perspective on this matter.

Maud: Adding to what Hongchao mentioned, in terms of prioritization, the most straightforward step for us would be to enable chains already supported by Wormhole. Within this scope, our primary focus would be on layer one chains, as this aligns closely with Alephium’s narrative, which emphasizes the potential strength of scalable layer one solutions over layer two. Therefore, in our order of priority, we first look at integrating layer one chains supported by Wormhole, as these require the least effort and are the most aligned with our objectives. From there, we can explore further possibilities.

*To be continued! That is the end of part 1 of the AMA transcript!* <a href="https://medium.com/@alephium/bridge-ama-the-alephium-bridge-part-2-the-roadmap-d18e312df102" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/bridge-ama-the-alephium-bridge-part-2-the-roadmap-d18e312df102" target="_blank"><em>Part 2</em></a> *comes next week!*

*Let us know if you have any questions on* <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank"><em>Twitter</em></a>*,* <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener" target="_blank"><em>Discord</em></a>*,* <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank"><em>Telegram</em></a> *or* <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener" target="_blank"><em>Reddit</em></a>*!*

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [December 15, 2023](https://medium.com/p/bd6536ea9cdc).

<a href="https://medium.com/@alephium/the-alephium-bridge-ama-part-1-bd6536ea9cdc" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
