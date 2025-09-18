---
date: 2023-04-04T12:19:17.715000Z
description: All answers about the exciting new developments in Alephium’s ecosystem!
spotlight: false
featuredImage: image_bcc69de2ae.jpeg
title: AMA Session — Writen format
---

#### All answers about the exciting new developments in Alephium’s ecosystem!

On March 28th, Alephium held an <a href="https://www.youtube.com/watch?v=Gf1mDGddM2I" >AMA session</a> with the community, to answer questions about the <a href="/news/post/the-leman-network-upgrade-is-live-f52c89b7dd6a" >Leman Network Upgrade</a>. This medium article has some of the most relevant questions.

### Token Support

**Q: How easy will it be for a new developer to mint a token on the Alephium blockchain? Where can they find info about this?**

A: Minting a token on the Alephium blockchain is fairly easy.

A contract needs to be created when issuing a token. There is an endpoint in the full node to do that. In the <a href="https://docs.alephium.org/dapps/build-dapp-from-scratch/#create-a-new-dapp-project-token-faucet" >Getting Started guide of the Alephium docs</a>, you can find an example of issuing tokens for a Token Faucet from the command line.

A few <a href="https://docs.alephium.org/ralph/built-in-functions/" >built-in functions</a> in Ralph allow the creation of tokens in the smart contract pretty straightforwardly.

**Q: How much would it cost to a Developer or a Team of Developers to create a token on the Alephium chain?**

A: The rent storage is a minimum of 1 ALPH/smart contract. This value is arbitrary and may be changed in an ulterior network upgrade.

**Q: Can a token be issued without a contract? Therefore, is it possible to issue tokens without paying storage rent? If token = storage rent, does it mean that the contract owner can delete the contract and therefore delete the token even from the user’s account?**

A token (ALPH aside) can not be issued without a contract. So the creator of the token has to pay a storage rent. Whether the creator can delete the contract depends on how the contract is written. But assuming the tokens are transferred to the user’s account, even the deletion of the contract won’t delete them from the user’s account.  
However, contracts might contain important metadata that gives the token its meanings. For example, an NFT contract might contain the name, description, and images of the NFT token, so if the creator allows them to alter or delete the contract, it is something the NFT holder should be aware of.

**Q: How will tokens be managed and controlled by their creator/developer?**

A: Alephium has developed an <a href="https://docs.alephium.org/ralph/asset-permission-system/" >Asset Permission System</a> that allows developers to define specific rules and conditions for using users’ tokens. This system lets developers specify whether a function uses user or contract tokens. Developers and users can approve the exact amount of tokens for each call, avoiding the need for unlimited authorization as required in EVM. At the asset level, the management of tokens is similar to the management of UTXO in Bitcoin, where once the token is in a user’s wallet, they have full ownership of their UTXO and tokens and can spend them as they wish.

**Q: Are there plans to make it easier to create tokens on Alephium, a token standard like ERC-20?**

The core dev team has been developing token standards for Alephium, including those for fungible and non-fungible tokens. It drew inspiration from the existing work done by Ethereum and merged those ideas with our stateful UTXO model. On the Alephium model, tokens become first-class citizens in the blockchain, making it much easier to build advanced tokens on top of it. Alephium token standards are simpler, more developer-friendly, and, most importantly, more secure than those used in the EVM. Let’s elaborate on this.

The IFungibleToken standard was introduced in the <a href="https://github.com/alephium/alephium-web3" >Alephium Web3 SDK</a>, which tells what metadata to expect for fungible tokens. It is similar to ERC20, but simpler because the UTXO model natively and safely supports transfer methods. To create tokens, you can use the VM’s instructions. They can be held by either a contract or a user address. The fungible token standard was used in the DEX prototype and bridge. In the DEX, the TokenPair contract holds all the liquidity tokens and only gives them to users when they add liquidity. In the bridge, the TokenWrapper contract maps tokens from another chain to Alephium and sends them to users once their transfer transaction on the source chain is successful.

Like IFungibleTokens, the INFT and INFTCollection interfaces were created in the Web3 SDK, which stores or points to the metadata for a particular NFT or NFT collection (EIP-721). The NFT prototype was adapted to use these interfaces to support a few common use cases, such as pre-minting and open minting, etc.

The goal is to make creating and managing tokens on Alephium as straightforward as possible. And these NFT standards will be supported by the wallets. For example, NFTs will “soon” be displayed on the extension wallet.

**Q: With the upcoming Tokens support, will it work in the same way as they do on Ethereum and other Blockchains where every token has   
its own Contract Address needs to be added manually to the wallet to be visible, or does Alephium’s VM offer a new way of managing tokens minted on the Alephium blockchain?**

A: Great question. It’s quite a UX issue on EVM that users have to add tokens manually, but it’s not a problem on Alephium.

With the UTXO model, the token becomes the first class citizen on Alephium, making it possible to retrieve a user’s all tokens and display them in the wallet. We also have a <a href="https://github.com/alephium/token-list" >repo called token-list</a> to store more metadata for tokens, such as logos, making the display more user-friendly. Currently, our extension wallet works nicely in this way.

We are also working on introducing a standard identifier to the contract system, which can fetch token information based on the token type. This feature will be introduced to the extension wallet soon.

As a result, for users, there is no need to add tokens manually due to our token model and these upcoming measures.

### Ecosystem

**Q: The Leman Network Upgrade appears to provide substantial token support to all the software within the ecosystem. Can you provide more information on what the core team and community can expect to build on top of it in the near future?**

A: In the near future, Alephium has some exciting launches planned. The core dev team has been developing and testing the d<a href="/news/post/dex-prototype-live-on-testnet-bac5e7d095ce" >ecentralized exchange (DEX)</a>, bridge, and <a href="https://github.com/alephium/alephium-nft" >NFT features</a> for a while. Additionally, community developers have been contributing to these efforts, which is fantastic news.

The core devs will focus on infrastructure and prototyping the most important DeFi primitives such as oracle, stablecoin, and lending protocol. They are also exploring new use cases, such as decentralized social networks, which they believe could be a significant development. With its new Schnorr signature, the Leman upgrade has opened up exciting possibilities for projects with Bitcoin and the Nostr protocol.

**Q: Are there plans to make building compliant/centralized tokens easier? How would something like this affect composability?**

A: We’ve seen interest from developers in the community to create a compliant token and smart contract standards on Alephium. However, it’s important to note that any form of centralization can impact the ability to create a fully composable blockchain ecosystem. Atomic composability, or the ability to combine different smart contracts together seamlessly, is only possible on-chain. If centralization occurs in certain areas, it may lead to a loss of composability in the ecosystem.

**Q: After the upgrade, what does the team plan to bring new developers and projects to the platform?**

A: Several initiatives are planned:

- Launch of the \#BuildonAlephium Hackathon Series
- Presence in dev events
- Visibility & engagement in like-minded developer communities
- Partnership & integration with open-source solutions from other ecosystems
- Grants / Bounties Ambassador program

**Q: Can you share any exciting ecosystem projects currently in the works?**

A: People/teams in the community are working on DEX, NFT & ANS (Alephium Name Services).

### Wallets

**Q: Will Leman introduce new functionalities to the Desktop wallet? And what are they?**

The Leman Upgrade makes it possible for new features to be implemented. What you will see in the next wallet releases:

- See the list of tokens you have received
- Send tokens you own
- Connect to dApps through WalletConnect
- Interact with dApps by signing messages
- More advanced dApp-related options for developers (like deploying and calling a contract etc.)

In addition to the new features that the Leman Upgrade allows to implement, time was taken to bring to life a brand new look that makes the wallet easier to use, with a build-to-last UI that follows the design conventions of the explorer and (soon to come) mobile wallet.

**Q: Will the Desktop and Mobile wallets be able to interact with Smart Contracts?**

A: Yes, via WalletConnect. The dApp developers will be able to easily add a component in their apps that will display a QR for the mobile wallet to scan, or simply through deep linking for the desktop wallet (selecting the desktop wallet option will open the app in your computer and let u interact with the dApp).

**Q: If we can sign smart contracts through the desktop and mobile wallet, will the UI account for the addition of Smart Contracts?**

A: The desktop and mobile wallets will display the transactions that the user issued through their interactions with dApps.

**Q: How will tokens be managed in the new wallet? Where can we see them? How do we send them? Does the UI account for the addition of Tokens support?**

A: As explained above, the UI will account for the addition of token support. You’ll see the list of assets you own, and will be able to send them around easily. You can even send multiple different assets in one transaction.

### General Questions

**Q: With the upcoming bridge to centralized stablecoins like USDC/USDT, how will these tokens be represented on Alephium, and what is the plan for the native issuance of these tokens? Since native tokens cannot be blocked directly, will the bridge be a single point of failure for USDC on Alephium? If Circle is forced to lock someone’s coins on Alephium, how will this be handled?**

A: If Alephium is the one bridging existing stable coins and therefore offering an Alephium-wrapped stablecoin, we will favor bridging decentralized stablecoins to avoid the risks you mention. Issuers of centralized stablecoins can decide whether the Alephium functionalities block them from issuing their stablecoin natively on Alephium. If the private keys own the UTXOs, they can’t be confiscated/frozen, but you can technically enforce workarounds by restricting transfers of the stablecoins to addresses.

**Q: What does it mean** <a href="https://twitter.com/alephium/status/1638541074074578946" ><strong>Schnorr Signatures</strong></a> **support for the average user and dApps developers?**

A: Schnorr signatures are supported at two levels: wallet and VM.

Only the <a href="/news/post/alephium-launches-browser-extension-wallet-706dfeda98f5" >extension wallet</a> currently supports Schnorr signatures.   
The VM gained Schnorr support after the Leman upgrade and provides the following:

- interaction with Nostr and other Schnorr-based apps
- increased privacy
- compress tx data on-chain in case of multisig and coin-join or atomic swap
- interoperability with other Schnorr-based chains & Protocols

**Q: Does Alephium plan to integrate with popular Oracle solutions like Chainlink or other DEX-based oracles?**

A: DEX-based oracles have been considered insecure and can be manipulated, so the plan is not going in that direction. It might be used for secondary validation.

Alephium will build our own oracle or collaborate with the existing oracles later. The bridge can also be used for bridging oracle data.

**Q: Many dApps rely on contracts holding funds, which puts users’ funds at risk. While AlphredVM has advantages over EVM, I wonder if there are any plans to use UTXO safety to mitigate this risk fully. For example, could a peer-to-peer settlement model like CowSwap be implemented in UTXO without a pool? Are there any sources of inspiration that could be used to address this issue?**

A: The safety of Alephium’s assets, including contract assets, is based on the UTXO model, which provides a high level of security. However, the safety of contract assets also depends on the correctness of the smart contract protecting their UTXO rather than a private key. For example, an AMM DEX could store its liquidity in a contract UTXO, which the DEX contract would protect. The good news is that writing safe contracts is much easier with Alephium’s VM and Ralph language.

The peer-to-peer settlement fits the UTXO model because it can easily support multiple inputs from different addresses. In a peer-to-peer approach, no contract UTXO is involved, so the default safety can be even higher. We plan to improve support for peer-to-peer transactions after the upgrade.

**Q: Can you confirm that the bridge's coins are safe and secure? Given Solidity’s history of hacks, I’m curious about the safety of the Alephium Bridge, especially since Alephium claims that the Ralph is supposedly safer than Solidity. Do you still stand behind this claim?**

A: The bridge being built is a Wormhole fork. Wormhole is the most used bridge, so it is battle-tested. Most of its vulnerabilities are known, and the hacks happened on the chain contract side.   
Ralph & Alphred are designed to make it easy to build secure code. We stand behind the fact that it is easier to build secure smart contracts than it is on Solidity.

**Q: With Alephium running on its own VM called AlphRed and Ralph  
 being claimed as more secure as a language than Solidity on Ethereum’s   
VM, would you believe it is better for someone to build an Alephium-based DEX instead of an Ethereum-based one?**

A: There are different things to look for when building a DEX:

- If you want great dev experience, new paradigms & security -\> Alephium.
- If you are looking for a big ecosystem and a large existing userbase -\> Ethereum for a little while longer ;)

---

If you have questions or want to know more, please come to Alephium’s [Discord](/discord), <a href="https://t.me/alephiumgroup" >Telegram</a>, or reach out on <a href="https://twitter.com/alephium" >Twitter</a>!
