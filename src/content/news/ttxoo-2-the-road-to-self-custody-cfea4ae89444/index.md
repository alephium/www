---
date: 2022-08-11T16:13:20.641000Z
description: Introduction
spotlight: false
featuredImage: image_2e22410376.jpg
title: TTxOO 2 — The road to Self-Custody
---

### Introduction

On Thursday, August 4th, on [our Discord](https://discord.gg/JErgRBfRSB), during the latest TTxOO, our good friends from [Hodling](https://hodling.ch/) joined us to talk about the different levels of crypto-assets custody and their benefits, requirements, and challenges in a presentation called **“The Road to secure self-custody.”**

This article is a recap of the presentation and Q&A we had with the community.

![](image_17a120a7ac.jpg)

Our friends from Holding graced us with their time and expertise

[Hodling SA](https://hodling.ch/) _provides non-custodial bitcoin storage solutions for owners of large bitcoin balances. They have developed procedures backed by years of Bitcoin and finance expertise to help users securely and efficiently manage their funds. In addition, they offer multisignature wallet services, cryptocurrency concierge services, and workshops on Bitcoin fundamentals._

### Problem

Finding the best way to manage your crypto assets is overwhelming. There are many options, but all point to two concepts: Custody and financial Sovereignty.

Custody is _“to have direct access or control; to be in charge of the protective care or guardianship of someone or something.”_ So when talking about crypto assets, their custody can be yours or somebody else’s.

[Sovereignty](https://www.britannica.com/topic/sovereignty) is a political concept related to _“the authority of a state to govern itself or another state.”_ Managing your assets is related to who _“de facto”_ takes the decisions about them.

When thinking about this topic, a good solution has to take into account the following:

- What part of your wealth is stored in crypto?
- How tech-savvy are you?
- What amount of time and money are you willing to spend on this?

Hodling’s talk presents a ladder of seven incrementally more secure & sovereign custody levels. As you move up, these setups are incrementally more technically complex and pricey. Before choosing its setup, one must consider the trade-offs and be careful not to overcomplicate things. **The complexity level must make sense for the capital at stake.**

![](https://cdn-images-1.medium.com/max/800/0*qUAFXcD7pXQ1zaXY)

The road to self custody is steep! And masterfully illustrated by [Set Hallstrom](https://medium.com/u/3341dd76fc9a)

_These seven steps on the road to self-custody are tailor-made for the state of the Alephium ecosystem of tools and services as it is today. Even if most of these steps are adaptable for other crypto-assets, the talk focused on what’s possible for ALPHs today._

### 1/7 — Custody on an Exchange

![](image_5d59965781.jpg)

[Andreas M. Antonopoulos](https://medium.com/u/898f59563d67) rules

**Pros **— To buy and hold your assets on a centralized exchange has advantages. First, you don’t need a crypto wallet. It is the simplest way to have some kind of interaction with crypto assets.

**What to look for — **It is essential to research each exchange’s security features, reputation and if you can open an account based on your jurisdiction.

**Cons — **However, it also has a [lot of risks](https://cryptonews.com/guides/why-it-is-risky-to-leave-your-cryptocurrency-in-exchange.htm). “Not your keys, not your coins” is a catchy way to highlight that if the assets are in somebody else’s custody, your access to them will only exist if the counterparty allows it: this is called _the counterparty risk_. Other associated risks include regulatory risks (a government freezing the assets at the exchange), liquidity risks (and other financial risks), hacks, and personal information leaks.

**Verdict — **This type of custody is easy, but it’s external, and you have access to your assets until you don’t (your saying on the matter is limited). It’s optimal for quick movement of funds (i.e., trading) but not for long-term custody.

### 2/7 — Phone/Computer Hot Wallet with a Proper Backup

![](image_a784811e10.jpg)

We said Proper Backups!

**Pros — **To have direct access to your assets using your computer or phone is an improvement from the previous level in terms of custody. And you dispose of your own backups.

**What to look for — **Computers and phones are general purpose devices, meaning they’re suitable for doing/executing different programs, but that doesn’t mean they’re a good place to store sensitive information. In this context, you own your keys but need to find a good way to keep them safe to prevent unauthorized access to your assets.

**Cons — **It’s hard to properly backup your seed phrase (also called a Secret Recovery Phrase), but it is a must-have to guarantee that you can restore your access in case of equipment failure or loss. A good practice is the “[3–2–1 rule](https://www.backblaze.com/blog/the-3-2-1-backup-strategy/)”: 3 copies of the backup, on two different media, with one copy off-site (stored in a remote place more than 80km away).

One improvement to this setup is to have the wallet installed on a device that is never connected to the internet (an offline device). This way, the device is less likely to suffer any attack as it is completely disconnected from the internet and uses a minimal interface (such as a µSD card or QR codes) to exchange data with an online device.

**Verdict — **Now, the control of the funds is in your hands, as is the responsibility (and risks!) associated with this freedom. There will be no support to call to try to recover a lost device or seed phrase. **You are now your own bank!**

### 3/7 — Phone/Computer Hot Wallet with a Proper Backup & a Passphrase

![](image_303e05347e.jpg)

This is actually a good PassPhrase that no-one would think of

**Pros — **Adding a passphrase to the previous setup will increase the security level of your backups and your access to funds. [Codified by BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), it offers the option to add a passphrase on top of your seed phrase (12 or 24 words) for enhanced protection.

[Alephium Desktop wallet last update added the passphrase feature](/news/post/bip39-passphrase-implementation-f87adecd6f59), which gives our users an extra layer of protection.

This configuration also allows you to use plausible deniability in situations where something may compromise your security or put you at risk. For example, you can use the same seed phrase to manage different segregated wallets where each wallet has an additional passphrase. In addition, you can create addresses for specific purposes, like a situation requiring a valid address, but you don’t want to provide your main one.

**What to look for — **You need to be very cautious to store your passphrase exactly, character by character, as you may lose access if you make a mistake. Please use capital and lower cases, numbers, and special characters in your passphrase. Ideally, make it \> 12 mixed characters. Always store your seed phrase and the passphrase separately, and an attacker would not get control over your funds even if he gained access to your the seed phrase.

**Cons **— It increases complexity as you’ll have more backups and a passphrase to store separately, and if you forget, lose or misremember your passphrase, you lose access to your funds.

**Verdict — **Adding a PassPhrase opens new possibilities and helps you securely manage your seed. However, your security management overhead will also increase for each new additional passphrase.

### 4/7 — Phone/Computer Hot Wallet with a Proper Backup, a Passphrase & a Full Node

![](image_47d4dc8d97.jpg)

Philosoraptor knows.

**Pros — **So far, the connection between your wallet and the blockchain used remote nodes, where a bad actor could access your informations. An upgrade in your setup’s custody, security, and sovereignty is to connect it to [a full blockchain node](https://en.bitcoin.it/wiki/Full_node) that you control.

It will provide extra privacy, as the wallet will share no information about the transactions, and there will be no censorship of your movements because there will not be any intermediary between you and the blockchain.

**What to look for — **It is a good practice to have dedicated equipment to run the node, separate from your everyday computer. This action will help to reduce the attack surface and lower the workload on the device (besides all the issues that can happen with a personal/professional regular device).

This hardware can be anything supported by [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) and [rocksdb](http://rocksdb.org/) — a [computer](https://wiki.alephium.org/full-node/Full-Node-Starter-Guide)/[raspberry pi4](https://wiki.alephium.org/full-node/Full-node-on-raspberry-pi/) or another general-purpose computing device running our [full node](https://github.com/alephium/alephium/). Alephium node can be run standalone or deployed using [Docker](https://github.com/alephium/alephium/tree/master/docker) or available via appliance distributions such as [DAppNode](http://dappnode.io) and their [pre-installed physical nodes](https://shop.dappnode.io/).

**Cons — **Your equipment will need constant attention because the blockchains are getting bigger and consuming a significant amount of space on disk. In addition, synchronizing the node with the network can sometimes take a bit of time, and the ability to send and receive transactions rely only on your node running correctly.

**Verdict — **This configuration gives extra privacy, resilience, and censorship resistance concerning transactions. It gives you higher sovereignty over your actions but is harder to run, requiring good technical skills.

### 5/7 — Node Wallet

![](image_6059edecca.png)

Swagger is awesome

**Pros **— The next step is an improvement on the flexibility of your setup, as the [node wallet](https://wiki.alephium.org/wallet/Wallet-Guide) (which is directly included in the node’s code) has many more features than the desktop wallet. For example, it can do time-locked transactions, create multi-signature wallets, and/or interact with smart contracts.

[Multisig wallets](https://blog.bitstamp.net/post/what-is-a-multisig-wallet/) allow multiple signers to make a transaction ready for broadcast into the network, and [Time-locked transactions](https://en.bitcoin.it/wiki/Timelock) are a mechanism that locks out a transaction until a predetermined time (or block height) is reached.

**What to look for — **It’s advisable to self-host your node and not rely on an external service such as AWS or google cloud.

**Cons — **More challenging to run, as the UX is less user-friendly than the desktop wallet, it can also be a bit of a pricey option as in practice it involves dedicated equipment, and the node needs to keep up with the network speed.

**Verdict — **This is an excellent solution for technical users, complex transactions, and smart-contract-related transactions & experimentation.

### 6/7 — Air-Gapped Node Wallet

**Pros — **An Air-gapped computer is purposefully left without access to the internet to minimize the risks of infection by viruses, trojans, and targeted attacks. It is often used to perform a specific task requiring a high-security level. In our context, this machine will be the signing device for the transactions created on an online device that runs the full node. This allows for a very secure setup where externalities are minimized almost to the maximum.

The communication method between these machines is via a QR Code or physical media, like a USB key or an SD card, which the user must only use for this purpose (to transfer information between these two pieces of equipment).

![](image_3c6dbe823b.jpg)

This is an air-gapped computer on a nineties diagram

**Cons — **As the signer device is segregated from the internet, all transactions must be manually processed and delivered to the device. And the same process happens after the signature. But beware! Air-gapping a computer is [not a silver bullet!](https://shiftcrypto.ch/blog/does-airgap-make-bitcoin-hardware-wallets-more-secure/) Remember [Stuxnet](https://en.wikipedia.org/wiki/Stuxnet)? But it is a good enough solution in the absence of hardware wallet support.

**Verdict — **You have complete control over all the steps of a transaction. This level of detail is better suited for users doing large high-net-worth transactions or corporations doing significant movements in their cold wallets. But it still requires a lot of care and precautions.

### 7/7 — Node Multisignature Wallet with Offline Cosigners

![](image_de02d7437c.jpg)

Multisigs are important security tools

**Pros — **The last and most secure/sovereign setup for Alephium is a full node wallet with a multisignature wallet. For each transaction to be broadcasted to the network, it must be signed by a specific number of cosigners.

For instance, a multisig of 5 out of 9 will require a quorum of 5 signers (among nine potential co-signers) to co-sign a transaction before it can be sent. This makes it extremely difficult for a hacker to compromise a wallet: instead of hacking one person, the hacker would need to hack at least five distinct people.

**What to look for — **For increased security & minimizing risks (political, accident, etc.), the cosigners should be located in different locations & jurisdictions. It is also recommended to have tech-savvy and accessible co-signers!

**Cons — **Difficult setup, requiring several steps to perform a transaction, making it a very slow & cumbersome process. Signers must have individually good security, or the wallet can still be compromised, as [in the Ronin Hack.](https://halborn.com/explained-the-ronin-hack-march-2022/)

**Verdict — **This solution is more fit for a DAO, a custody company, or to manage a corporate company’s treasury, as the multisig main goal is to prevent a bad actor from accessing the funds by compromising one private key.

### Final Considerations

The setups presented here come with some benefits and specific complexities. If there are a few takeaways to keep in mind, they would be the following:

- Work on a simple yet comprehensive backup policy for yourself. And think of what happens if you disappear or become incapacitated!
- Keep your setup as straightforward as possible for your needs. Do not overcomplicate and do things you don’t feel comfortable technologically with. (this is called [KISS](https://en.wikipedia.org/wiki/KISS_principle): Keep It Simple Stupid)
- If you want to improve your setup, do it gradually and take the time to do it well (and understand what you’re doing!).
- If possible, try to run your own node; this is already a significant improvement in the sovereignty part of owning and transacting crypto-assets.

A couple of all-purpose, digital hygiene best practices on top:

- Using two-factor authentication and specialized open-source software are good practices, as well as encryption on your local disk and communication channels. Things like [Yubikey](https://www.yubico.com/) or [Nitrokey](https://www.nitrokey.com/) are great! Even your [Ledger](https://www.ledger.com/) can act as a 2FA key with [FIDO](https://www.ledger.com/fido-u2f).
- Lastly, as recent hacks showed us, do not use the same password on different online accounts, and [do not reuse](https://www.coindesk.com/business/2022/08/03/solanas-latest-6m-exploit-likely-tied-to-slope-wallet-devs-say/) **your seed phrase on other wallets**. Instead, keep them specific for each wallet you use. You can use Password managers like [Bitwarden](https://bitwarden.com/) or others too.

We at [Alephium](/) want to thank Polto & Darko from [Hodling SA](https://hodling.ch/) for taking the time to come and give us this insightful and rich presentation. We hope to host them again in one of our tech talks soon!
