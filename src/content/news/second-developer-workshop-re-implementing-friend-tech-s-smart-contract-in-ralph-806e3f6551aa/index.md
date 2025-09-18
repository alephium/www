---
date: 2023-11-06T15:29:26.299000Z
description: Welcome to the second developer workshop! If you missed the first one,
  we dived into the basics of Ralph programming language, along with…
spotlight: false
featuredImage: image_7c0c9f04f9.png
title: 'Second Developer Workshop: Re-implementing Friend.Tech’s Smart Contract in Ralph'
---

Welcome to the second developer workshop! If you missed the first one, we dived into the basics of Ralph programming language, along with its SDK and CLI build tools, crafting a simple token faucet. It’s been a fantastic experience, you can find it [here](/news/post/first-developer-workshop-build-a-token-faucet-a6bb2aa7bf68) or on [YouTube](https://www.youtube.com/watch?v=YblUxEcXQuY) and [GitHub](https://github.com/alephium/dev-workshop-01).

In response to feedback from our previous workshop, we’ve shortened this session, splitting it into two. The goal of this workshop is to re-implement the smart contract part of a dApp called [Friend.Tech](https://www.friend.tech/). This time, we’re not starting from scratch, we’re starting from a solidity smart contract.

## What is Friend.Tech?

[Friend.tech](https://twitter.com/friendtech) operates as a decentralized social token-driven platform [launched in august 2023](https://decrypt.co/resources/what-is-friend-tech-the-social-token-driven-decentralized-social-network) on the Base blockchain. It allows its users to trade “keys”, formerly termed “shares”, associated with X (formerly Twitter) profiles. Owning these keys grants entry to exclusive chatrooms and special content from the respective X account holder.

The platform promotes itself by saying, “Trade with your friends in our marketplace.” Fans can buy and sell shares, with the price directly tied to the number of outstanding shares. This creates an opportunity for early supporters to profit as the individual’s fan base grows. It’s an interesting experiment in the social token trend narrative.

## Why Friend.Tech for the dev workshop?

**Popularity**: Friend Tech has gained significant traction in crypto, generating around 500k in protocol revenue daily and accounting for 18% of all transactions on the BASE blockchain. It’s an interesting example of a real-world use case on a crypto-fueled backend.

**Simplicity:** Despite its popularity, the smart contract for Friend Tech is not overly complicated, making it a great example for educational purposes.

**Sophistication:** While simple, the contract is sophisticated enough to demonstrate advanced features in Ralph, such as subcontracts and the [asset permission system (APS)](/news/post/alephiums-aps-eliminating-evm-token-approval-risks-5407e7e70a33). Especially on how APS makes it simpler and safer to build dApps on Alephium.

## What does the Solidity Smart Contract look like?

The Friend.Tech smart contract can be found [here](https://basescan.org/address/0xcf205808ed36593aa40a44f10c7f7c2f67d4a4d4#code). In this section, we’ll explain some of its notable features, so it is easier to understand the Ralph implementation.

**Mappings**

The solidity contract has two [mappings](https://docs.soliditylang.org/en/v0.8.22/types.html#mapping-types) (a way to store values): one represents the balance of all holders of a specific subject. And other that represents the total of outstanding shares of a subject. The latter is used to calculate the buy and sell prices.

**Functions**

There are also functions to set the fee destination, the protocol fee percentage, and the subject’s fee percentage. The first one sets the address that will receive the protocol fees. The other two set the percentage of the fees. These can only be accessed by the smart contract owner.

The next function is “GetPrice” which calculates the share price based on the number of shares that exist and how many the buyer wants to buy at that moment.

The contract also has the “GetBuyPrice” and “GetSellPrice” that will use the outstanding shares mapping to present the prices. That will be used for the next two functions that calculate the prices, considering not only the price changes but also the fees that have to be paid by the buyers and sellers.

Lastly, the “BuyShares” and “SellShares’’ functions will move the shares and fees to the correct destination when the transaction is executed.

After this overview, it is time to implement this on Ralph! Before starting, please make sure your setup is ready: all software installed for a clean development environment.

## Setting up the Environment — Installation Steps

1 — [Docker](https://docs.docker.com/get-docker/) and [Docker-Compose](https://docs.docker.com/compose/install/): Docker is required for containerization, and Docker Compose is essential for orchestrating the containers. Make sure you have both Docker and Docker Compose installed on your machine.

2 — [Npm](https://www.npmjs.com/) and [nvm](https://github.com/nvm-sh/nvm): To use command-line tools to help you install the different JavaScript packages and manage their dependencies.

3 — Browser Extension Wallet ([Chrome](https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/)): you will use it to interact with the smart contract.

4 — Clone the workshop [GitHub repository](https://github.com/alephium/dev-workshop-02) to access all the files you will need to follow this workshop.

The workshop assumes that you have at least some familiarity with the command line interface; if you don’t, you can find some help [here](https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=115s).

## Ralph Implementation

You can follow the full detailed workshop in the following video. Here’s the [full code](https://github.com/alephium/dev-workshop-02/blob/session-1/contracts/friend_tech.ral) of the Ralph implementation, and this article highlights the main steps for easier comprehension:

`video: https://www.youtube.com/watch?v=gi2sxvB9Np8`

## Step 1: Contract Ownership

The first step starts with a minimalistic Friend.Tech smart contract comprising a single readable field and a function to update the owner field. Packed with it, there is a deployment and a transaction script to call it, alongside a simple test to verify the ownership update functionality.

Transaction scripts are a flexible tool to call smart contracts and, if you want more information about them, you can check the first dev workshop, where they were [explained in more details](https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=2080s).

## Step 2: Implementing Fee Percentages

This contract has three readable fields for fee percentages and 2 functions. These functions update the protocol and subject fees; only the contract owner can call them. One of the readable fields is new (totalProtocolFees): the protocol fee is sent to the Friend.Tech contract itself and \`totalProtocolFees\` keeps track of all the available protocol fees ready to be collected by the owner.

As Alephium is UTXO-based, a solution like the one on the Solidity code would create a UTXO for each transaction, which is inefficient. A better solution is to create this field inside the smart contract and only allow the owner to withdraw it. A specific function was introduced to handle this transaction.

Also, a new test was added to ensure that only the owner could update the fee percentages.

## Step 3: Managing Share Balances

In this step, a structure is implemented to keep track of share balances using Ralph’s subcontract feature, replacing the mapping data structure used in the original Solidity code. Our structure consisted of a SubjectShares subcontract and a SubjectShareBalance subcontract to keep track of the total supply and individual holder balances respectively. This keeps the contract size smaller and is more flexible than the mapping data structure.

Now, you can check if a specific address is on the list of holders on the “subjectShare” subcontract. The “GetBalance” and “GetSupply” functions also use the subcontracts to return the values.

Some of the benefits of using sub-contracts over mapping

- Prevent the state bloat of a single contract
- Incentives for users to recycle sub-contracts to keep the blockchain lean

Sub-contracts are contracts, therefore, can

- Issue / manage assets
- Fine-grained access control over the contract’s internal state
- Asset permission control
- It is easier to index data (Token / NFT) than mapping since we can use contract ID directly
- Easier to implement in the VM (everything is a contract)

## Step 4: Implementing Pricing

The pricing functions created resembles those in the original Solidity contract. But, instead of using the mapping structure, the previously implemented “GetSupply” function is used here, so the “GetBuyPrice” and the “GetSellPrice” can retrieve the value from it.

## Coming Up Next

In the following session, we’ll delve into implementing the buy and sell shares functions, which will also entail updating the balances, thus creating and destroying subcontracts as needed. On these, you can see the Asset Permission System in action.

Let us know on [Twitter](https://twitter.com/alephium), [Discord](/discord), [Telegram](https://t.me/alephiumgroup) or [Reddit](https://www.reddit.com/r/Alephium/) if you have any questions!
