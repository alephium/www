---
title: 'The Leman Network Upgrade is Live!'

description: 'New features & tools to support a thriving Alephium Ecosystem'
date: 2023-03-30T13:10:04.628Z
---

### The Leman Network Upgrade is Live!

#### New features & tools to support a thriving Alephium Ecosystem

![](https://cdn-images-1.medium.com/max/800/1*HgAzUK1d0x-vYIn2leCkOg.jpeg)

The Leman Network Upgrade was activated on the mainnet at 10:00 GMT, March 30th, 2023! The Alephium blockchain is running without any issues, producing blocks at a stable rate. While the core developers will remain closely monitoring the network, it is time to thank the awesome support of all community members and service providers who made this possible!

This network upgrade is the culmination of over a year of hard work and dedication from many contributors, and it represents a significant milestone for our community. It is also the first step towards the growth of the Alephium ecosystem, with an enhanced developer experience to build decentralized applications (DApps) on Alephium.

### New and Improved Features

The Leman Network Upgrade now gives the users and developers access, among other innovations, to the following:

#### Sub-contracts and Dynamic Array Indexing

Sub-contract resembles the map data structure but eliminates some of the security issues of the maps in other blockchains. It increases the expressivity of the language without compromising security.

Dynamic array indexing is a feature that enables smart contracts to store and retrieve data more efficiently and flexibly. With dynamic array indexing, smart contracts can access specific data elements within an array based on their index, allowing for faster and more precise data retrieval.

#### External Call System

The external call system is a security feature introduced to improve smart contracts' security. It helps to prevent public functions of the smart contracts from being called by unintended callers, if these methods have the ability to mutate the state of the contracts. By default, it requires contracts to specify which external callers are allowed to interact with them. When a caller calls a public function of a contract, the external call check system ensures that the caller is allowed to do so.

This system provides an additional layer of security for smart contracts and can help to prevent a range of attacks related to unintended or unauthorized calls to methods. Making the external call system a default feature for all smart contracts makes it easier for developers to create more secure and resilient decentralized applications.

#### Storage separation between immutable and mutable fields

In the context of blockchain smart contracts, “immutable” means that once a variable or data structure has been defined, it cannot be changed. “Mutable” means the opposite, that the value of a variable or data structure can be modified after it has been defined. it is important to have both mutable and immutable fields, as some data needs to be changeable while others need to be unchangeable for the system’s integrity.

The separation of immutable and mutable fields means they are stored in different places at the virtual machine (VM) level. This separation helps ensure that a smart contract’s immutable state cannot be accidentally modified or tampered with, while still allowing for the mutable state to be updated as needed.

Separating these two types of fields and storing them in different locations, allows for greater security and efficiency and helps to prevent unintended changes or modifications to the smart contract.

#### Improved Difficulty Adjustment Algorithm (DAA)

The Alephium Blockchain activated an improved way of adjusting the mining difficulty in different chains to ensure fair mining incentives across all chains. The previous method allowed each chain to have a different difficulty level, which could result in uneven distribution of mining power and rewards. The activated method adjusts the difficulty level based on the estimation done for all chains to make sure that all chains have the same difficulty level at a specific time.

To avoid fluctuation in the hashpower of each chain caused by transaction fees, the algorithm burns all transaction fees instead of distributing them to miners. This will result in more stable mining difficulty and block times, allowing for more blocks to be mined.

The changes are not expected to significantly impact miners in the short term, as the number of transactions is currently low. However, in the long term, miners will continue to mine for profit, and the implemented changes will ensure fair mining incentives across all chains.

#### Schnorr Signatures Support

<a href="https://twitter.com/alephium/status/1638541074074578946" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1638541074074578946" rel="noopener" target="_blank">Schnorr Signatures</a> are a type of digital signature algorithm that was first proposed by Claus-Peter Schnorr in 1989. They are similar in function to other digital signature algorithms, such as the widely used RSA and Elliptic Curve Digital Signature Algorithm (ECDSA), but have some advantages over those algorithms in terms of efficiency and security.

Schnorr signatures can be used to create multisignature schemes, where multiple parties can jointly sign a transaction or message. This can be useful in situations where a group of people or organizations need to collectively authorize an action.

In addition, Schnorr signatures support a technique called “key aggregation”, which allows multiple public keys to be combined into a single aggregated public key. This can make managing large numbers of public keys easier and reduce the overhead associated with verifying multiple signatures.

Now the Alephium blockchain enabled:

- <span id="293a">Interaction with <a href="https://nostr.com/" class="markup--anchor markup--li-anchor" data-href="https://nostr.com/" rel="noopener" target="_blank">Nostr</a> and other Schnorr-based apps;</span>
- <span id="5627">Increased privacy;</span>
- <span id="357f">Compression of tx data on-chain in case of multisig and coin-join or atomic swap;</span>
- <span id="f725">Interoperability with other Schnorr-based chains & protocols.</span>

Currently, the browser wallet extension already supports the Schnorr type of account and can interact with the Nortr protocol.

#### Automatic generation of TypeScript code from smart contracts

When developers write smart contracts, they usually need to interact with them from other parts of their application code. To do this, they typically need to import a JSON file that describes the smart contract’s interface, which can be cumbersome and error-prone.

To simplify this process, Alephium offers a code generation tool that automatically generates TypeScript code from the smart contract. This generated code provides a more straightforward way for developers to interact with the smart contract, as they can simply import the generated code as if it were a regular TypeScript module and interact with it using familiar syntax.

This can significantly speed up the development process and reduce the likelihood of errors or inconsistencies between the smart contract and the application code that interacts with it.

#### Secure, efficient, and friendly development toolkits

A collection of new tools have immensely improved the developer experience, making it easier and faster for developers to build on top of our platform. The Web3 SDK provides a comprehensive set of APIs and libraries, while the extension wallet allows easy interaction with dApps. React support and project templates streamline the development process and reduce the time it takes to get up and running with a new project. Moreover, the VScode extension for writing smart contracts provides developers with a familiar and powerful toolset that makes it easy to write secure and efficient contracts. By highlighting these tools, more developers would be onboarded and encouraged to build on Alephium and make the most of these powerful features.

### Future developments

Now that the network is upgraded, different initiatives will be developed in parallel. Some of these initiatives are

#### Code-related

- <span id="0cd0">**Bridge:** deployment on the mainnet of the wormhole-based Alephium-Ethereum Bridge done by the core development team and then looking for other ecosystems to bridge to;</span>
- <span id="17bf">**Wallets:** New Desktop Wallet and the debut of the Mobile Wallet with token support, dApps interaction, and wallet-connect support; Improved User Experience for the Browser Wallet Extension with additional features such as NFT support.</span>
- <span id="2bad">**Prototypes:** DEX and NFT Market prototypes for new devs to have a foundation to build upon;</span>
- <span id="6897">**Light clients, optimizations to storage, test coverages:** general network optimizations and exploring new directions to leverage the scalability of the blockchain;</span>
- <span id="8518">**Integrations** with wallets (Ledger, for example) and payments services.</span>

#### Community Development

- <span id="e60d">Launch of the \#BuildonAlephium Hackathon Series</span>
- <span id="5525">Presence in dev events</span>
- <span id="e8cd">Visibility & engagement in like-minded developer communities</span>
- <span id="6c68">Partnership & integration with open-source solutions from other ecosystems</span>
- <span id="0717">Grants / Bounties Ambassador program</span>

---

If you have questions or want to know more, please come to Alephium’s <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a>, or reach out on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>!
