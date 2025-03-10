---
title: "An introduction to the stateful UTXO model"
date: "2022-11-17"
description: "Combining the expressiveness of the account model & security of the UTXO model."
---

<div>

# An introduction to the stateful UTXO model

</div>

<div class="section p-summary" field="subtitle">

Combining the expressiveness of the account model & security of the UTXO model.

</div>

<div class="section e-content" field="body">

<div id="3f12" class="section section section--body section--first section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### An introduction to the stateful UTXO model

*Combining the expressiveness of the account model & security of the UTXO model.*

<figure id="5b6e" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*EpiUlO8ndw-pqdMq" class="graf-image" data-image-id="0*EpiUlO8ndw-pqdMq" data-width="1024" data-height="576" data-is-featured="true" />
</figure>

*This article is a high-level overview of what the stateful UTXO model is, why it was invented, how it works and what it allows. The stateful UTXO model (sUTXO) is one of the main innovations brought by Alephium, along with* <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank"><em>Proof-of-less-work (PoLW),</em></a> *the Blockflow sharding algorithm, the* <a href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" target="_blank"><em>Alphred Virtual Machine</em></a>*, and the Ralph programming language.*

### What are the UTXO & Account Model?

The UTXO and account-based models are accounting standards most commonly used in blockchains. Both of them allow users & systems to keep track of balances of crypto assets.

<figure id="3603" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*5vv7al_kblqwUazQ" class="graf-image" data-image-id="0*5vv7al_kblqwUazQ" data-width="1024" data-height="525" />
</figure>

The classical UTXO (Unspent Transaction Output) model is famously used to keep track of accounting <a href="https://river.com/learn/bitcoins-utxo-model/" class="markup--anchor markup--p-anchor" data-href="https://river.com/learn/bitcoins-utxo-model/" rel="noopener" target="_blank">in the Bitcoin blockchain</a>. It is also found in Bitcoin Cash, Zcash, Litecoin, Dogecoin, Dash, and more…

In <a href="https://www.geeksforgeeks.org/what-is-unspent-transaction-output-utxo/" class="markup--anchor markup--p-anchor" data-href="https://www.geeksforgeeks.org/what-is-unspent-transaction-output-utxo/" rel="noopener" target="_blank">UTXO</a>, there are no accounts nor balances at the protocol layer, just transactions. Coins are stored as a ledger of unspent transactions output (UTXO) & new transactions consume existing UTXOs to produce new UTXOs. At any point in time, for a wallet to show its balance to a user, it must accumulate all UTXOs associated with the public addresses of that particular user because what is stored is the set of all UTXOs, not a list of accounts & balances.

This model is simple to understand conceptually, it scales well and is very transparent. It has a few downsides: it doesn’t have a state and is not expressive enough for developers, meaning it’s hard to build complex programs on top of it.

<a href="https://www.horizen.io/blockchain-academy/technology/expert/utxo-vs-account-model/#:~:text=The%20account%20model%20keeps%20track,set%20of%20all%20transaction%20outputs." class="markup--anchor markup--p-anchor" data-href="https://www.horizen.io/blockchain-academy/technology/expert/utxo-vs-account-model/#:~:text=The%20account%20model%20keeps%20track,set%20of%20all%20transaction%20outputs." rel="noopener" target="_blank">The account model</a> is more intuitive and closer to a classic database. It records the increase/decrease in balances of addresses when transactions happen. These changes are written in the blockchain, creating a global state (a global record of the current balance in all addresses). This structure is more accessible and easier to master for developers, enabling a more “<a href="https://en.wikipedia.org/wiki/Expressive_power_%28computer_science%29" class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Expressive_power_(computer_science)" rel="noopener" target="_blank">expressive</a>” system: developers can build more complex & powerful programs (called smart contracts).

The account model also has limitations: parallel execution is hard, <a href="https://blog.chain.link/what-is-miner-extractable-value-mev/#:~:text=One%20such%20example%20is%20Miner,excluding%20transactions%20within%20a%20block." class="markup--anchor markup--p-anchor" data-href="https://blog.chain.link/what-is-miner-extractable-value-mev/#:~:text=One%20such%20example%20is%20Miner,excluding%20transactions%20within%20a%20block." rel="noopener" target="_blank">MEV</a> is a constant drag, and it often lacks enough security checks to be secure at the smart contract level.

### Stateful UTXO: The best of both worlds

The stateful UTXO (sUTXO) model combines the advantages of both: it benefits from the security of the UTXO model and the expressiveness of the account model.

It achieves this by actually using both… but for different things! UTXOs are used for assets/tokens and the account model for smart contracts and states.

<figure id="757c" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*76vcp3I_m0nFuin4" class="graf-image" data-image-id="0*76vcp3I_m0nFuin4" data-width="1024" data-height="702" />
</figure>

### Tokens as first-class citizens

In sUTXO, all tokens are handled natively and stored in UTXOs exactly like ALPHs. This is in contrast to Bitcoin, which can’t handle tokens. But it also marks a big difference with Ethereum because it requires containers such as ERC20 and 721 to handle tokens, which introduces complexity and often led to security risks in the past.

This approach is called “Tokens as first-class citizens.” No need to create standards and no risks in the implementation: it’s all there, natively! <a href="https://youtu.be/VVYH9rBJAdA" class="markup--anchor markup--p-anchor" data-href="https://youtu.be/VVYH9rBJAdA" rel="noopener" target="_blank">The VM (virtual machine</a>) also allows for built-in checks to increase transfer security.

It is, of course, possible to create new standards on top of Alephium for tokens with different features, but the core functions (issuance, transfer, accounting) are built-in.

### State: Smart (and secure) Contracts

What’s called the “<a href="https://en.wikipedia.org/wiki/State_%28computer_science%29" class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/State_(computer_science)" rel="noopener" target="_blank">state</a>” in computer science, can be viewed as “storage.” A stateful system “stores” what happened before and can use items from its memory to build on new actions.

sUTXO is called “stateful” because it adds an element of “state” to the classic UTXO model, which is stateless. As <a href="https://www.seba.swiss/research/A-Beginner-s-Guide-to-Blockchain-Accounting-Standards#:~:text=UTXOs%20are%20stateless%2C%20meaning%20no,smart%20contracts%2C%20that%20are%20stateful." class="markup--anchor markup--p-anchor" data-href="https://www.seba.swiss/research/A-Beginner-s-Guide-to-Blockchain-Accounting-Standards#:~:text=UTXOs%20are%20stateless%2C%20meaning%20no,smart%20contracts%2C%20that%20are%20stateful." rel="noopener" target="_blank">Seba explains</a>: “*UTXOs are stateless, meaning no two transactions can affect the same UTXO. Transactions do not refer to any input outside of the consumed UTXOs. As UTXOs can be executed in parallel, they are not well suited for applications, such as smart contracts, that are stateful.*“

That is super useful for developers who want to build programs leveraging the state of the blockchain: the famous smart contracts! Developers use those smart contracts to build decentralized applications. And those dApps allow people to use the blockchain for useful things: borrow, lend, trade, create & trade NFTs, play games, and invent the future!

### A forest of Merkle trees to keep it clean!

<a href="https://www.simplilearn.com/tutorials/blockchain-tutorial/merkle-tree-in-blockchain#:~:text=KanpurEnroll%20Now-,What%20Is%20a%20Merkle%20Tree%3F,data%20more%20efficiently%20and%20securely." class="markup--anchor markup--p-anchor" data-href="https://www.simplilearn.com/tutorials/blockchain-tutorial/merkle-tree-in-blockchain#:~:text=KanpurEnroll%20Now-,What%20Is%20a%20Merkle%20Tree%3F,data%20more%20efficiently%20and%20securely." rel="noopener" target="_blank">Merkle trees</a> are a special data structure used to store information verifiably. Alephium uses three Merkle Trees per group: one for the assets (the <a href="https://river.com/learn/terms/u/utxo-set/" class="markup--anchor markup--p-anchor" data-href="https://river.com/learn/terms/u/utxo-set/" rel="noopener" target="_blank">UTXO set</a>), one for the contract states, and another for the contract logic (its code).

This is great, because for a given smart contract, the data in the state Merkle tree might change often, but the code/logic Merkle tree will be immutable! This allows Alephium to avoid being too bloated with useless code & data.

And to keep things as lightweight as possible, sUTXO enables <a href="https://arxiv.org/pdf/2210.13670.pdf" class="markup--anchor markup--p-anchor" data-href="https://arxiv.org/pdf/2210.13670.pdf" rel="noopener" target="_blank">state storage rent</a>: when a smart contract is deployed, its developer has to pay a deposit of 1 ALPH to protect the state layer against spamming.

The contract deployer will be returned this deposit when the smart contract is destroyed and removed from the blockchain!

### sUTXO & Alphred VM work well together!

sUTXO has many added benefits when combined with other Alephium’s innovations! For example, the Alephium virtual machine (Alphred) knows precisely that a token transfer is happening to a smart contract. In this case, the <a href="https://youtu.be/VVYH9rBJAdA" class="markup--anchor markup--p-anchor" data-href="https://youtu.be/VVYH9rBJAdA" rel="noopener" target="_blank">virtual machine verifies</a> the transfer to check if it is submitted according to the smart contract rules.

Alephium also has built-in virtual machine instructions for upgrading or migrating a smart contract. This permits the developers to upgrade the smart contract to restore the logic and fix bugs. The current option on EVM is to use proxy contracts to enable this migration, which adds a lot of complexity.

### Why should you care?

This is a huge improvement for developers, as the ability to have an upgraded account model with a dedicated model for token handling (UTXO) makes the sUTXO model a solid foundation for building smart contracts with the assurance that secure asset management is a priority.

There will be more details on the sUTXO model in an upcoming interview with <a href="https://twitter.com/wachmc" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/wachmc" rel="noopener" target="_blank">Cheng Wang</a> on the topic, as it is a pivotal piece of Alephium’s tech stack. Below are two videos of him presenting the sUTXO model and its interaction with Alephium’s VM & programming language, one at EthCC, and the other on Crypto Talk Series.

<figure id="0427" class="graf graf--figure graf--iframe graf-after--p">
<div class="iframe">
<div id="player">

</div>
<div class="player-unavailable">
<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<div class="submessage">
<a href="https://www.youtube.com/watch?v=VVYH9rBJAdA" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</div>
</div>
</div>
</figure>

<figure id="28b1" class="graf graf--figure graf--iframe graf-after--figure">
<div class="iframe">
<div id="player">

</div>
<div class="player-unavailable">
<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<div class="submessage">
<a href="https://www.youtube.com/watch?v=r_5U7ZgByt4" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</div>
</div>
</div>
</figure>

#### The next post in the tech series will feature <a href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" class="markup--anchor markup--h4-anchor" data-href="https://medium.com/@alephium/meet-alphred-a-virtual-machine-like-no-others-85ce86540025" target="_blank"><strong>Alphred, the Virtual Machine!</strong></a> **To know** <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--h4-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank"><strong>more about PoLW here.</strong></a>

*If you have more questions on the topic, please come to Alephium’s* <a href="https://discord.gg/JErgRBfRSB" class="markup--anchor markup--p-anchor" data-href="https://discord.gg/JErgRBfRSB" rel="noopener" target="_blank"><em>Discord</em></a>*,* <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank"><em>Telegram</em></a>*, or reach out on* <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank"><em>Twitter</em></a>*!*

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [November 17, 2022](https://medium.com/p/8de3b0f76749).

<a href="https://medium.com/@alephium/an-introduction-to-the-stateful-utxo-model-8de3b0f76749" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
