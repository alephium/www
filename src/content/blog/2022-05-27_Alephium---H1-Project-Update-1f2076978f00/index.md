---
title: 'Alephium — H1 Project Update'
date: '2022-05-27'
description: 'The first half of 2022 was a vigorous but exciting, fun and rewarding period for Alephium in terms of milestones and growth. Read about…'
---

The first half of 2022 was a vigorous but exciting, fun and rewarding period for Alephium in terms of milestones and growth. Read about…

---

### **Alephium — H1 Project Update**

#### The first half of 2022 was a vigorous but exciting, fun and rewarding period for Alephium in terms of milestones and growth. Here’s a look back at some of the highlights, what they meant for us, for the community and what we learned.

<figure id="8d6d" class="graf graf--figure graf-after--h4 graf--trailing">
<img src="https://cdn-images-1.medium.com/max/800/0*O0f5D-jMha9RR4C7" class="graf-image" data-image-id="0*O0f5D-jMha9RR4C7" data-width="768" data-height="432" data-is-featured="true" />
<figcaption>Alephium H1 Project update</figcaption>
</figure>

---

### Technology

#### dApp Tutorial

Boubacar who was an intern at Alephium produced and open-sourced a <a href="https://github.com/alephium/voting-tutorial" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/voting-tutorial" rel="noopener" target="_blank">comprehensive guide to building a dApp on Alephium</a> with the guidance of Thomas. dApps being an imperative part of a successful blockchain ecosystem, this tutorial, including the resulting code, laid an important first step on the road towards integration and adoption of Alephium. For the first time, building dApps on Alephium became accessible to anyone with a development background.

Stay tuned for the upcoming release of the new version of our dApp dev tools!

#### New full-node version

<a href="https://github.com/alephium/alephium/releases" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium/releases" rel="noopener" target="_blank">The full-node saw a major upgrade to version</a> <a href="https://github.com/alephium/alephium/releases/tag/v1.3.2" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium/releases/tag/v1.3.2" rel="noopener" target="_blank">v1.3.2</a> There has been many incremental changes released with bug fixing patches that were always backward compatible. But this version was special because it enabled new features for smart contract development.

#### New desktop-wallet version

With the full-node came a revamped and <a href="https://github.com/alephium/desktop-wallet/releases/tag/v1.2.0" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/desktop-wallet/releases/tag/v1.2.0" rel="noopener" target="_blank">improved v1.2.0 of the desktop wallet.</a>

A new section for advanced management was introduced, effectively allowing miners to derive one address for each of the 4 groups. The possibility to consolidate (merge) all your UTXOs into one and sweep your funds from one address to another, a feature highly anticipated by the community has also been introduced. We’ve added the creation of multiple alternative addresses and ability to label them for a better overview and organization of funds into categories. An offline mode was introduced, allowing the user to create a wallet without connecting to the Internet.

Last but not least, the looks of it got an overhaul, with subtle animations and improved user experience! <a href="https://github.com/alephium/desktop-wallet/releases/latest" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/desktop-wallet/releases/latest" rel="noopener" target="_blank">Have a look at it for yourself</a> if you haven’t already!

<figure id="dbfe" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/1*6bSueMHVMELW8ufUfTYfow.png" class="graf-image" data-image-id="1*6bSueMHVMELW8ufUfTYfow.png" data-width="768" data-height="284" />
<figcaption>Desktop wallet in light and dark mode</figcaption>
</figure>

#### New explorer

We were very keen on adding metrics to the <a href="https://explorer.alephium.org/#/blocks" class="markup--anchor markup--p-anchor" data-href="https://explorer.alephium.org/#/blocks" rel="noopener" target="_blank">explorer.</a> You can now find hashrate, supply, total transactions, total blocks and average block time live on our explorer page. We also added an indicator to display the number of confirmations of a transaction. Thanks to heavy work on the back-end, the performance improved on pages with large amounts of transactions and the explorer got a lot quicker!

<figure id="0200" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/1*dherAJfF6FxjDCxh4lqKYw.png" class="graf-image" data-image-id="1*dherAJfF6FxjDCxh4lqKYw.png" data-width="1237" data-height="193" />
<figcaption>Statistics shown in the explorer</figcaption>
</figure>

#### JS-SDK

We have deprecated alephium-js in favor of the new <a href="https://github.com/alephium/js-sdk/" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/js-sdk/" rel="noopener" target="_blank">@alephium/sdk package</a>:

We learned from our mistakes when introducing breaking changes in a minor version of alephium-js without clarifying it to our dev users and without using a `0.X.X` package version. We created a new package (`0.X.X`) and a clear message in the `README` that breaking changes will from now be introduced in **minor** versions and that users of the package should lock the version of the package in their projects. We will make sure to announce all breaking changes in the release notes, please make sure to read them!

To protect our dev users from accidentally installing an SDK that pretends to be ours, we decided to introduce the `@alephium` scope. Now, you can be sure that all `npm` packages with the `@alephium/` prefix are developed by the core team.

The SDK is now compatible with browser and React Native environments, in addition to Node.js.

---

### Business & Operations Update

#### Listing on Gate.IO

During the second week of 2022, <a href="https://medium.com/@alephium/gate-io-first-to-list-alephium-alph-a7e5fe56cd45" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/gate-io-first-to-list-alephium-alph-a7e5fe56cd45" target="_blank">Alephium got listed on Gate.IO.</a> This was a major milestone for the project. For the first time, the community was able to <a href="https://www.gate.io/trade/ALPH_USDT" class="markup--anchor markup--p-anchor" data-href="https://www.gate.io/trade/ALPH_USDT" rel="noopener" target="_blank">buy and sell ALPH</a> on an exchange. We took great pride in it, as getting listed first on a top-10 exchange is hard! It opened the floodgates to a new crowd of retail investors and miners, who grew our communications channels significantly and from which we learned a lot! We had anticipated this and <a href="https://medium.com/@alephium/welcome-to-alephium-alph-48dfb72aa458" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/welcome-to-alephium-alph-48dfb72aa458" target="_blank">created accessible material</a> to welcome new members of the community and help them get oriented within the project.

#### Strategic Partnership

In mid-april, we officialised a <a href="https://medium.com/@alephium/alephium-partners-with-cetacean-capital-83cf2fbea8a1" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephium-partners-with-cetacean-capital-83cf2fbea8a1" target="_blank">partnership with Cetacean Capital</a>. Its unique mix of diverse skills and long time in crypto, completely peer-to-peer organization and exceptionally entrepreneurial mindset makes it a very special partner. The long-term commitment it’s taking with Alephium will allow the project to leverage Cetacean’s heavy marketing chops and its institutional credibility.

There are more partners to come and we are looking forward to revealing the next one during Q2.

---

### Marketing / Project awareness

After the initial listing, our Twitter followers tripled (to almost 6k) and both Telegram and Discord doubled. Lots of new people joined the project and it became even more fun to hang out in our Discord. We saw a huge surge in the mining community and the hashrate of the network skyrocketed way beyond our expectations reaching as much as 46TH.

#### Naming contest

In the 5th week, we queried the community through <a href="https://medium.com/@alephium/alephium-naming-competition-c1b736797461" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephium-naming-competition-c1b736797461" target="_blank">a naming contest.</a> There were many parts of the project that needed naming and it was clear for everyone involved that these names had to be sourced from the community.

The smallest denomination, or the Satoshi equivalent of ALPH became the SET, Alephium’s custom Virtual Machine became ALPHRED, and Alephium’s smart contract programming language got baptized RALPH.

#### Gate.IO AMA

We held our <a href="https://medium.com/@alephium/gate-io-ama-with-alephium-67b50d179d72" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/gate-io-ama-with-alephium-67b50d179d72" target="_blank">first external AMA within the Gate.io channels.</a> It was, to say the least, an interesting and high-intensity experience!

<figure id="b557" class="graf graf--figure graf--iframe graf-after--p">
<h1 id="not-acceptable">406 Not Acceptable</h1>
<hr />
<p>nginx</p>
</figure>

#### Team interview series

During the 10th week, we started publishing a series covering the individuals behind the project: the team. We felt it was important to let the community get to know us better as we value transparency. We divided the article into 3 episodes: <a href="https://medium.com/@alephium/core-team-interview-series-episode-1-3472f8295af6" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/core-team-interview-series-episode-1-3472f8295af6" target="_blank">Front-end devs</a>, <a href="https://medium.com/@alephium/core-team-interview-series-episode-2-bec6e6908d2f" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/core-team-interview-series-episode-2-bec6e6908d2f" target="_blank">operations and communication team</a> and finally <a href="https://medium.com/@alephium/core-team-interview-series-episode-3-64b6dacc1459" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/core-team-interview-series-episode-3-64b6dacc1459" target="_blank">back-end devs</a>.

#### Paris Blockchain Week Summit

By the end of Q1, we attended <a href="https://pbwsummit.com/" class="markup--anchor markup--p-anchor" data-href="https://pbwsummit.com/" rel="noopener" target="_blank">PBWS</a> where our very own <a href="https://twitter.com/MaudSim0n" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/MaudSim0n" rel="noopener" target="_blank">Maud</a> presented Alephium to an enthusiastic audience of blockchain heads. It was a great opportunity to meet some of you in person.

#### Rewards!

Some of you have produced amazingly detailed tutorials on how to mine Alephium, how to join mining pools or how to triple mine with T-rex (!) Some of you are always present in our channels providing a gentle, guiding hand to new members, directing them to the right resources, or helping us answer questions. To all of you contributing on our GitHub, we salute you, for you are the heroes giving purpose to our work. And let’s not forget all the mining pools and thriving _Buidlers_ making up our ecosystem. You know who you are and we thank you!

---

### In futurospect

The road ahead is long, but the journey is rewarding. We have many exciting things planned for the rest of 2022.

#### Core Platform

- <span id="ddce">Improve the robustness, efficiency and dev-experience of the full node</span>
- <span id="1638">Improve documentation of the core infrastructure</span>
- <span id="0926">Improve the Alephium SDK with more features</span>
- <span id="b958">Improve the robustness and efficiency of the explorer back-end</span>
- <span id="8c65">Include chain statistics and information on the explorer</span>
- <span id="b6bb">Bridge development, testing, and launch</span>
- <span id="bb31">Leman Network Upgrade for cross-chain interoperability</span>
- <span id="6ff7">dApp support in the desktop wallet</span>
- <span id="7036">DEX development, testing, and launch</span>
- <span id="0fab">Mobile wallet</span>
- <span id="b4d7">Hardware wallet integration</span>

#### Ecosystem

- <span id="5349">Website revamp</span>
- <span id="3eed">Build-up community engagement & marketing initiatives (hackathon, AMAs, community competitions, campaigns, etc)</span>
- <span id="3aef">Key industry events (PBWS, CVC, EthCC and others)</span>
- <span id="5c90">DEX listing (after the deployment of the bridge)</span>
- <span id="4293">Additional CEX listing</span>
- <span id="c67c">3rd party dApps (NFT, DEX, stablecoin) on Alephium</span>

We’re thrilled to share this journey with you and we are always open to your feedback and suggestions. If you haven’t already, come join the discussion on our <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>, <a href="https://discord.gg/JErgRBfRSB" class="markup--anchor markup--p-anchor" data-href="https://discord.gg/JErgRBfRSB" rel="noopener" target="_blank">Discord server</a>, our <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram group</a> or the <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener" target="_blank">Subreddit</a>. We can’t wait to meet you!

<a href="https://www.youtube.com/watch?v=VQQA3GRx_es" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=VQQA3GRx_es" rel="noopener" target="_blank"><strong>Let the spring ring in!</strong></a>

<figure id="6ad7" class="graf graf--figure graf--iframe graf-after--p graf--trailing">

<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
JavaScript kann nicht ausgeführt werden.
</figure>
