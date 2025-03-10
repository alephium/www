---
title: 'First Developer Workshop — Build a Token Faucet'
date: '2023-07-26'
description: 'How to create a token faucet and deploy it on Alephium'
---

How to create a token faucet and deploy it on Alephium

---

### First Developer Workshop — Build a Token Faucet

#### How to create a token faucet and deploy it on Alephium

<figure id="9171" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*N42F_zj_-gzPQgqJ" class="graf-image" data-image-id="0*N42F_zj_-gzPQgqJ" data-width="1350" data-height="754" data-is-featured="true" />
</figure>

On July 15th, <a href="https://github.com/h0ngcha0" class="markup--anchor markup--p-anchor" data-href="https://github.com/h0ngcha0" rel="noopener" target="_blank">Hongchao</a> and <a href="https://twitter.com/wachmc" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/wachmc" rel="noopener" target="_blank">Cheng</a> hosted a workshop on creating a token faucet using Alephium’s dev tooling. This article summarizes all steps in that process and offers additional resources for further explanations. If you prefer to watch the whole video of the workshop, here it is:

<figure id="8cea" class="graf graf--figure graf--iframe graf-after--p">

<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<a href="https://www.youtube.com/watch?v=YblUxEcXQuY" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</figure>

So let’s start, but first, you need to install some software!

### Setting up the Environment — Installation Steps

1 — <a href="https://docs.docker.com/get-docker/" class="markup--anchor markup--p-anchor" data-href="https://docs.docker.com/get-docker/" rel="noopener" target="_blank">Docker</a> and <a href="https://docs.docker.com/compose/install/" class="markup--anchor markup--p-anchor" data-href="https://docs.docker.com/compose/install/" rel="noopener" target="_blank">Docker-Compose</a>: Docker is required for containerization, and Docker Compose is essential for orchestrating the containers. Make sure you have both Docker and Docker Compose installed on your machine.

2 — <a href="https://www.npmjs.com/" class="markup--anchor markup--p-anchor" data-href="https://www.npmjs.com/" rel="noopener" target="_blank">Npm</a> and <a href="https://github.com/nvm-sh/nvm" class="markup--anchor markup--p-anchor" data-href="https://github.com/nvm-sh/nvm" rel="noopener" target="_blank">nvm</a>: To use command-line tools to help you install the different JavaScript packages and manage their dependencies.

3 — Browser Extension Wallet (<a href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj" class="markup--anchor markup--p-anchor" data-href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj" rel="noopener" target="_blank">Chrome</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/" class="markup--anchor markup--p-anchor" data-href="https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/" rel="noopener" target="_blank">Firefox</a>): you will use it to interact with the smart contract.

4 — Clone the workshop <a href="https://github.com/alephium/dev-workshop-01" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/dev-workshop-01" rel="noopener" target="_blank">GitHub repository</a> to access all the files you will need to follow this workshop.

The workshop assumes that you have at least some familiarity with the command line interface; if you don’t, you can find some help <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=115s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=115s" rel="noopener" target="_blank">here</a>.

### Implementing the Token Faucet dApp

#### Basic Token Contract

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=1360s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=1360s" rel="noopener" target="_blank">here</a>.

This section explains how to create a minimum viable token contract. The contract, known as the “TokenContract,” is discussed, and a detailed explanation of each function is given.

The contract is compiled, deployed to devnet, and tested using integration tests to verify its functionality.

#### Withdraw Function

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=1915s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=1915s" rel="noopener" target="_blank">here</a>.

It is time to add a “_Withdraw_” functionality to the existing TokenContract. A new mutable variable called “_balance_” is introduced, and a new function called “_GetBalance_.” is implemented. Additionally, a new method called “_Withdraw_” is created.

The “_Withdraw_” method allows users to withdraw a certain amount of tokens from the contract by calling it. It is explained that this method takes a “_token ID_” and an “_amount_” as parameters, and when invoked, the token balance is reduced by the specified amount, and the caller receives the withdrawn tokens. TxScript Withdraw is introduced to call the withdraw method in the TokenContract. TxScript can be seen as the “main” function to interact with other smart contracts in the transaction.

To ensure proper execution of this method, annotations for asset usage, modification of variables, and limiting access to specific functions for security purposes are added.

#### Events and Interfaces

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=2853s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=2853s" rel="noopener" target="_blank">here</a>.

In this section, events and interfaces are implemented in _TokenContract_. The “_Fungible Token Interface_” is added: a standard interface that allows wallets to fetch essential information about the contract, such as name, symbol, and decimals. This interface enhances compatibility with wallets and applications.

Next, an event called “WithdrawEvent” is introduced. This event is emitted whenever a withdrawal occurs, allowing other systems or applications to subscribe to the event stream and monitor withdrawals on the contract. The use of debug statements in the contract is explained, which can be helpful for debugging purposes.

#### Deployment Scripts

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=3312s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=3312s" rel="noopener" target="_blank">here</a>.

Using deployment scripts for the project streamlines the deployment process across different networks.

Deployment scripts contain deployment functions that take care of the deployment logic. The deployment config file stores network-specific information, such as private keys, full node URLs, and common settings. With this setup, we can deploy contracts on different networks, like devnet and testnet, by changing the environment variable.

#### Alephium Connect Button

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=3944s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=3944s" rel="noopener" target="_blank">here</a>.

This part focuses on integrating a wallet authentication feature into the web application. A button is added that allows users to connect to their wallets using the Alephium blockchain. They use React context provider and React hooks to make information such as the signer globally accessible across all components in the application.

When a user clicks on the connect button, a wallet pop-up appears, and after the authentication process, the user’s address is displayed on the website. This authentication process uses Alephium’s <a href="https://github.com/alephium/alephium-web3/tree/master/packages/web3-react" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium-web3/tree/master/packages/web3-react" rel="noopener" target="_blank">Web3 React</a> <a href="https://github.com/alephium/alephium-web3-react" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium-web3-react" rel="noopener" target="_blank"></a> component.

#### Display Contract Info

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=4352s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=4352s" rel="noopener" target="_blank">here</a>.

This section shows how to fetch and display information from the deployed smart contract. They use the deployment information to instantiate a token faucet contract on the Alephium network.

React hooks and functions are then used to interact with the contract and fetch data, such as the balance and token ID. This data is displayed on the website in a table format, providing visibility into the contract’s current state.

#### Withdraw from Faucet

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=5040s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=5040s" rel="noopener" target="_blank">here</a>.

Next, it is time to add the ability to withdraw tokens from the faucet contract. An input field is added to enter the desired token ID and amount for withdrawal. When the user submits the form, the function to withdraw tokens is called.

The transaction status is also displayed on the website, showing if the withdrawal transaction is confirmed or ongoing. The team uses hooks to manage the transaction status and handle updates in real-time.

#### Deploy to Testnet

You can jump to this section <a href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=5040s" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=YblUxEcXQuY&amp;t=5040s" rel="noopener" target="_blank">here</a>.

In this final section, it is demonstrated how to deploy the smart contract to the Alephium testnet. They use the deployment scripts and specify the testnet environment.

The smart contract is deployed to the testnet by running the deployment command, and the deployment information is stored in a generated deployment file. This file contains essential details such as the transaction ID, contract instance address, and other information needed to interact with the deployed contract.

#### Additional Resources:

<a href="https://docs.alephium.org/" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/" rel="noopener" target="_blank">Alephium Docs</a>: Information about how to develop dApps on Alephium

<a href="https://docs.alephium.org/dapps/build-dapp-from-scratch/#whats-next" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/dapps/build-dapp-from-scratch/#whats-next" rel="noopener" target="_blank">Building a dApp from Scratch</a>: a step-by-step tutorial on how to build a dApp on Alephium

<a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener" target="_blank">Discord</a>: The developer channel is a great place to ask questions about Alephium.

Thanks to those who attended the first workshop and gave us valuable feedback. There will be more! Let us know on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>, <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a> or <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener" target="_blank">Reddit</a> which other topics you’d like more tutorials on!
