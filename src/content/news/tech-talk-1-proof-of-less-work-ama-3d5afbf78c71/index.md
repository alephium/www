---
date: 2022-09-06T13:19:46.098000Z
description: On Thursday, August 25th, 2022, Alephium’s team conducted an AMA on our
  Discord as a follow-up discussion with Cheng Wang, inventor of…
spotlight: false
featuredImage: image_1d46b897a3.jpg
title: 'TECH TALK #1 — Proof-of-Less-Work AMA'
---

#### On Thursday, August 25th, 2022, Alephium’s team conducted an [AMA on our Discord](https://www.youtube.com/watch?v=Oi4AsqVY0YA) as a [follow-up](/news/post/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301) discussion with Cheng Wang, inventor of PoLW and founder of Alephium.

> You’ll find the original article on PoLW [here,](/news/post/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301) the whitepaper [here](https://github.com/alephium/white-paper/blob/master/alephium.pdf), and the code [here](https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/mining/Emission.scala). This is a lightly edited transcript of the following video of the AMA:

`video: https://www.youtube.com/watch?v=Oi4AsqVY0YA`

**Vladimir Moshnyager — First, we’d like to thank everyone who participated in the AMA. Thanks also for the excellent questions sent by our community through Twitter, discord, telegram, and Reddit! They immensely helped us prepare and get the best answers you’ll find here. Thanks to** [@wachmc](https://twitter.com/wachmc) **for taking the time and answering those queries with candor and good vibes! And to** [@heptazoid](https://medium.com/@heptazoid) **for setting us up nicely!**

---

#### **ORIGINS & WHAT IS PoLW AND HOW DOES IT WORK?**

#### Vladimir Moshnyager: How did you end up at the EPFL? Do you enjoy being in Switzerland? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=131s)\]

Cheng Wang: I came to Switzerland in 2014 to start my Ph.D. research at EPFL. Before coming here, I didn’t know much about Switzerland. After studying and living here, I really like it. There are nice people, beautiful mountains and lakes. **I feel productive working here.**

#### PoW vs. PoLW — Let’s start with a simple question. Why is there a need for Proof of Less Work? What are the shortfalls of classical Proof or Work? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=190s)\]

Cheng Wang: Proof of work (PoW) has been running in production for over ten years. It has been tested over time and is a very solid consensus algorithm. However, now there’s a great focus on energy consumption, and this is something PoW is struggling with.

That’s why we introduced proof of less work (PoLW): **to reduce the energy consumption of the classic PoW without sacrificing its security.**

#### COIN BURNING — How will the “burning some coins” part of the PoLW help secure the network? Isn’t the resolution of the “arbitrary mathematical puzzle,” a.k.a mining, that does that? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=246s)\]

Cheng Wang: When we talk about the network’s security, the main thing is how much it costs to attack it. In the classic PoW blockchain, for example, most of the cost is energy cost.

We have two costs in PoLW. The first type is the energy cost: the external cost, paid outside the blockchain, in the physical world. The second one is the coin burning (also called internal, because it’s borne inside the blockchain). If you sum both and compare it with PoW, with the same metrics, the cost to attack PoW and PoLW will be the same.

That’s why it provides consensus with less energy consumption without sacrificing security.

**Vladimir Moshnyager: So it consumes less energy but has the same cost of attack?**

Cheng Wang: The cost is the same if all other metrics are the same: the market cap of the project, the token value, and the circulating amount of the token are the same. So, the cost will be the same, all else being equal.

#### MINING REWARD — How will the miners be rewarded for the work of securing the network under PoLW, after the 1EH/s threshold is crossed? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=382s)\]

Cheng Wang: This is not going to change with PoLW. They still get the mining rewards from the coinbase transaction. The emission schedule is also the same. The only change is on the cost side, as the miners must prepare coins in advance to mine a new block.

#### MINING REWARD — [Diomark](https://twitter.com/diomark)— With POLW setting to kick in at 1EH/s, is there a chance we’ll actually hit it in our lifetime? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=443s)\]

Cheng Wang: I don’t know when we will hit that hashrate. And until then, energy consumption **most likely** won’t be an issue. We didn’t enable PoLW earlier because the mining pools need to support it, and the full nodes need to upgrade to pack the transactions differently, and both changes will take time.

Also, when the hashrate is really low, it means that the ecosystem, the blockchain, is not big enough. So, we will enable it when the hashrate is as high as one Exahash per second.

#### MINING REWARD — [Zkit](https://t.me/alphgermanofficial/59) — Imagine that the activation was triggered, we’ve come to 1 Exahash per second. But later on, for some reason, it goes down to 0.5–0.7 EH/s. Would that be a problem, or would you change anything? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=545s)\]

Cheng Wang: No, it’s not a problem. It simplifies the whole block assembly process. So it doesn’t change anything. It’s just a trivial case, and the code handles that easily.

**Vladimir Moshnyager: So just to make it clear: We reach 1 EH/s, and hashrate keeps going up; there’s some coin burning going on, but then we go down and get to 0.9 EH/s. So there’s no more coin burning going on. Right?**

Cheng Wang: Exactly. In the codebase, it’s as simple as this: there’s an “if else” statement to check if the hashrate is more than 1 EH/s. If it is, you will execute one part of the code; if it’s not, run another part.

#### MINING REWARD — [Zkit](https://t.me/alphgermanofficial/60) — If we reach more than 1 EH/s with activated PoLW and coin burning, and then the market collapses, and the hashrate falls in the future. Would that mean that there would be security problems? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=626s)\]

Cheng Wang: I don’t think so. If the token’s value drops a lot, this will be a problem for all the networks. It’s not specific to PoLW; it is the same problem for PoW: If the value of Bitcoin drops to \$1 per Bitcoin, there will be security issues. It is the same for Proof of Stake (PoS) blockchains: if the value of the project is very low, there is an opportunity for attacks in those cases.

**Vladimir Moshnyager: So if we reach 0.5 EH/s today, for example, we would be thrilled because it means the network is very secure. If we reach it on the way down, it’s still a huge amount of hashing. So I guess it means we’re fairly secure until we are not, but it shouldn’t be a problem.**

#### MINING REWARD — Which part of the miners’ mining reward needs to be burned once PoLW is activated? The hashrate-based reward, the time-based reward, or both? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=720s)\]

Cheng Wang: The mining reward will use [both](/news/post/alephium-block-rewards-72d9fb9fde33), and both might play a factor in the final amount of burning.

**Vladimir Moshnyager: If I understand correctly, I don’t burn part of the reward itself. Instead, I have to burn coins in the input to the coinbase transaction before getting the reward from the output of that same transaction, right?**

Cheng Wang: That’s critical because the coinbase reward will be locked for approximately 500 minutes. And you need to burn the coins immediately, so you cannot burn the coinbase reward. If you were able to do that, this feature wouldn’t add security to the network.

#### MINING REWARD — When we reach the 128 EH/s upper bound, what’s the incentive for miners to keep mining? Even transaction fees cannot exceed the Mining reward, so if that goes to zero, transaction fees also go to zero? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=841s)\]

Cheng Wang: That will not happen in reality because mining will reach equilibrium before the mining reward hits zero. For example, when the hashrate is close to 128EH/s, the mining reward and the incentives are really low, and some miners will stop mining. In this case, the hashrate will go down. The mining reward will then go up. It will reach equilibrium eventually.

This is the same for Bitcoin: At some point, you have more hashrate collecting rewards than the market is willing to buy. In this case, some miners will just stop mining. And when the Bitcoin price goes down a lot, a lot of miners are no longer profitable and will just stop mining.

#### MINING REWARD — What’s the actual use of burning half of the transaction fees? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=959s)\]

Cheng Wang: The protocol introduced transaction fees to incentivize miners to include the transactions in new blocks and act as a way to reward miners. However, the network has other actors, like node operators, that don’t receive this incentive. So we need some way to incentivize node operators. That’s why burning could be an excellent way to pay these operators by reducing the supply.

**Vladimir Moshnyager: It’s a deflationary force on the total supply: it rewards node operators and everyone. That’s interesting.**

#### SIMULATION — If there are 1,5 EH/s of hashrate on the network, and we’re in the middle of 2024, what is the amount of ALPHs to burn to be able to mine? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=1047s)\]

Cheng Wang: I have no idea about this. If you ask me right now, what is 99 times 77? I have no idea! [We published the formula](/news/post/alephium-block-rewards-72d9fb9fde33) and the graphs for the reward of the two curves and how to calculate it.

In the future, when the hashrate is high enough, and PoLW is activated, we will provide some front-end tools for people to calculate the amount of coin to burn at any given time.

When you put in the parameters, like hashrate and timestamp, the website will show you how much you need to burn.

#### DIFFICULTY — When the network surpasses 1 EH/s of hashrate, will the difficulty adjustment to keep the block time constant be changed? How does the coin burning influence the difficulty parameter itself? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=1152s)\]

Cheng Wang: This question involves some technical details, but I would answer it this way: we could see the coin burning as virtual mining and the physical mining as actual mining. In this case, virtual mining works like actual mining. It changes the difficulty and, following the same rules, if there are more people mining, no matter if it is actual or virtual mining, the difficulty goes up. Otherwise, it goes down.

**Vladimir Moshnyager: It’s then the same mechanism. Virtual mining is part of the index of the total difficulty for determining the mining difficulty.**

Cheng Wang: It is not that simple because virtual mining correlates to actual mining. There is some ratio between them. So, if the real mining changes, the value of the virtual mining also needs to be changed.

**Vladimir Moshnyager: Ok. Yeah. I’m not sure if I understand, but we’ll keep that for another time. It’s interesting to have the framing of virtual mining.**

Cheng Wang: One essential thing in the design is that we tried to make it as simple as possible. And because the classical PoW is simple, easy to test, and very robust, we don’t want to make PoLW more complicated. So, in many cases, it works the same way as the classical PoW. It’s just that we have this virtual mining part. That’s why the difficulty adjustment is more or less similar.

#### PERMISSIONLESSNESS ([Noah](https://t.me/alephiumgroup/30936)) — Since existing coins are required to participate in PoLW, do you think this interferes with the accessibility of GPU mining, where anybody with a GPU can participate anonymously? If coins are needed beforehand, is this running into a similar problem as PoS, where the validator must acquire coins through some exchange to participate in the network? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=1333s)\]

Cheng Wang: I don’t think so. There are two types of miners. The first type is the pool miner. In this case, the miner does not need to prepare any coins in advance because it’s going to be handled by the mining pool. To this miner, it will be the same as classical PoW.

Solo miners must pay coins in advance only when they mine the new block. That will depend on how much hashrate the solo miner has. For example, a small miner, if he can only find one block per day, only needs to have one block reward in his wallet balance before he can start mining. This, right now, is not expensive.

Even when the hashrate goes to 1EH/s, the cost will not be too high if you consider the hardware and the electricity cost. So it is not going to change the situation that much. I don’t think it will affect [permissionlessness](https://policyreview.info/glossary/permissionlessness). Nowadays, if we look at Bitcoin, the mining cost is expensive. In our case, you would not be worse than mining Bitcoin.

**Vladimir Moshnyager: It’s fascinating. I didn’t think of that before, but first, you only need the coin if you find the block.**

Cheng Wang: That’s not true, unfortunately.

It depends on the hashrate. In this case, a solo miner will find one block per day. So, in that case, you are covered. But if you are a miner with a lot of hashrate, you’ll need to have a bit more because you’re going to mine many blocks, and the mining reward will be locked for 500 minutes. After that, you’ll reuse the mining rewards for coin burning.

If you can dispose of unlocked coins, you can use them for burning. So it depends on the hashrate. Big solo miners will need to have a higher balance than pool miners.

#### DECENTRALIZATION — [hellyea#2223](https://discord.com/channels/747741246667227157/747998352842686545/1007694205600153621) — As we have seen, governments are now focused on killing decentralized dapps like tornado.cash, so what happens if someone builds a mixer dapp on Alephium? What if they use a decentralized domain or something but still have to comply with government rules to ban/sanction such dapp? Will Alephium have the power to ban/terminate them? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=1576s)\]

**Vladimir Moshnyager:** **The answer for that is really direct, to be honest. Alephium is decentralized for real. This is one of our main goals in developing this tech, which is why we are going through complicated ways to ensure that we remain decentralized.**

**Miners include transactions in the block, and we don’t know who the miners are or where they are. We cannot constrain them. So they’re safe on this. And the protocol is entirely open-source.**

**And we, the team, have zero ability to ban or terminate anyone. That’s the whole point of decentralization. I hope it answers your question. Cheng, do you have something to add to that answer?**

Cheng Wang: I think we can take Ether as an example. There are some sanctions on the apps, but not on the base layer, right? So they are not forcing the Ethereum Foundation to take any action.

#### DEFLATIONARY FORCES — [Stabledogs](https://t.me/alephiumgroup/30940) — I’m interested in the long game. Can you describe the circumstances that need to happen for ALPH to become deflationary? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=1694s)\]

**Vladimir Moshnyager: There are two different things. First, there’s a deflationary force, which is a force towards deflation. And there’s the supply being deflationary, meaning there’s less of the token.**

**For example, burning half of the transaction fees is a deflationary force that effectively reduces the total supply: we will never reach the max supply of 1 billion tokens because of this.**

**But today, our circulating supply is still increasing because miners get rewards, and half of the burned transaction fees is lower than the money issuance in the network.**

**For now, you have deflationary forces like the burning of half of the transaction fees and inflationary forces like the reward to the miners. After PoLW activates, you will have a second deflationary force because miners will have to burn ALPH. And the inflationary force will be weaker (because of the hashrate-based mining reward decrease).**

**And it’s only at the point when deflationary forces are more significant than the inflationary force that Alph will maybe become net deflationary. Cheng, did I answer that correctly? Or do you want to add something to that?**

Cheng Wang: I will add another feature of Alephium. You will have to deposit 1 ALPH into the blockchain to deploy smart contracts and get them stored. This is our storage rent mechanism: if you have 1 million contracts deployed on the blockchain, there will be 1 million tokens being locked.

This kind of serves as a deflationary mechanism too. It’s not exactly deflationary (because the ALPH are not burned), but somehow it’s related because they are frozen into the smart contract.

**Vladimir Moshnyager: It’s completely related because it’s one more way in which there are deflationary forces in the system. But we’ll address this more next month or the month after when we talk about the** [stateful UTXO](https://twitter.com/alephium/status/1565610949209473026?s=20&amp;t=fg8nyc9XGdnk_lYjm3erKg)**: the way state works, contract logic and Merkle trees, and all that fun stuff we will keep for next time.**

---

### ABOUT POW vs. other consensus mechanisms

#### FUTUREPROOF — It seems the world is moving towards PoS, and that investment, time, jobs & efforts are mainly getting sucked in by PoS chains. Do you think PoW has a decent chance of resisting this trend? \[[🔗📺]](https://youtu.be/Oi4AsqVY0YA?t=1893)

Cheng Wang: It depends on what you are trying to build and what tradeoffs you’re willing to make. For example, PoS chains are led by a few big and broad corporate blockchains, and they favor higher TPS over decentralization. In those cases, PoS works better. You just don’t care (or care less) about permissionless or censorship resistance.

But if you want to build a very decentralized blockchain where people can run the full nodes with consumer-grade laptops and ensure that it can work efficiently and steadily for the long term, PoW is still much more stable, solid, and simple.

**Vladimir Moshnyager: And Ethereum is not even yet PoS.**

Cheng Wang: No, I was not comparing PoS. I was just saying if you design a system and it is very heavy, you are going to have a higher risk of breaking it in extreme cases. So it depends on what you want to build. PoW is very solid and has been tested over time. It is excellent to build a lightweight and more decentralized blockchain. If you want to try to build Solana with proof of work, I would not suggest you do that.

#### PROOF-OF-BURN — Is it fair to say that PoLW is 1/8th PoW and 7/8ths PoB ([Proof of Burn](https://coinmarketcap.com/alexandria/glossary/proof-of-burn-pob))? Have you considered the POB (Proof of Burn) consensus mechanism? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=2098s)\]

Cheng Wang: Conceptually, probably yes, but I’m not very sure because considering PoB simplifies many internal details. PoB usually refers to burning one coin in one chain and trying to issue another coin on another blockchain. You burn Bitcoin on the Bitcoin blockchain and issue it on another blockchain. But in our case, it’s really to burn the actual coin. So it’s a bit different from people’s usual PoB definition.

---

### OTHER TOPICS

#### SHARDING — [Diomark](https://twitter.com/diomark) — What is the process of adding more shards? Does it require a hard fork, and how would that be handled? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=2199s)\]

Cheng Wang: It’s going to be a hard fork for sure. We will increase the size of the groups and change the blockflow algorithm to include more blockchains as dependencies. We will need to add some code for the transition. It’s a bit like enabling the merge for the Ethereum blockchain. But I don’t think it will be that much of a large amount of work. And the timing to do it will be close to when we see the network congested. If four groups are not enough, we will start working on that. Right now, we have other priorities than working on that.

#### FINALITY — As the network mines a block every 64 seconds, how much time does it need to achieve finality? An equivalent of 6 blocks? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=2293s)\]

Cheng Wang: There is no rocket science math to estimate the number of blocks for confirmation of finality. The general idea is that if you have something to transfer, you will estimate the value of your transaction first. Then you relate it to the network’s hashrate to find a number you are comfortable with. But this is usually too complicated for average users.

The real potential issue is when you receive a payment from a third party. In that case, depending on the amount and your trust in the counterparty: be conservative and flexible!

We have some unique protection mechanisms in place to prevent 51% attacks on Alephium. One of them is that our nodes don’t allow a deep reorg of our blockchain. It means if someone tries to reorg the last two hours' blocks on it, the network will reject this.

#### THE BRIDGE — [hellyea#2223](https://discord.com/channels/747741246667227157/747998352842686545/1007694205600153621) — Can you update us on the progress of the wormhole bridge? Will it be ready by next month? According to other chain bridges, it looks like it has many vulnerabilities. Can we assume the one Alephium team is working on is new, fresh, and secure? Does the team require more time to study it? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=2906s)\]

Cheng Wang: First, the progress: Mu Chen finished all the features two months ago. And since then, Hongchao and I have been reviewing and improving the code. It’s very easy to build something that works, but creating something secure is tough. Many smart contract creators usually take a long time to review the security, and it’s the same in our case. Not only are we reviewing the smart contracts, but we are also taking on the challenge to improve the whole dApp stack.

When we see some issues in the smart contracts on the bridge, we start to improve the SDK, then the full node, and then begin another round of review. So we aren’t just working on the bridge. We took the opportunity to work on the whole stack. And right now, I think we are very close to the first version of all of them: the language, the virtual machine, the SDK, and the bridge. I think next month we are going to put them on the testnet!

The second question was about security, and that’s a big topic right now. People are still trying to figure out what are the best practices. We have seen a lot of attacks. We took the most used bridge, the Wormhole bridge, which was audited and tested in the past. So far, people have not found any bugs in their very high quality smart contracts. The attacks it suffered happened in two vectors unrelated to the code. On the first hack, the contract deployment was not done correctly. And at the other one, the Solana version of the Wormhole bridge was not upgraded in time, which caused the issues.

The Wormhole Bridge is probably the market’s most secure bridge right now. That’s why we chose it, and we added the support for Alephium. Regarding the security of our contracts, I believe we are doing a great job because we have a new language with many unique features compared to Solidity.

We added a permission check for the language, which is not available in solidity. So we have new features to ensure our contract system is more secure. We are taking a lot of time with the team to ensure everything is done correctly, and we review every line of code of the contracts very carefully.

#### THE SOLANA SLOPE HACK — [hellyea#2223](https://discord.com/channels/747741246667227157/747998352842686545/1007694205600153621) — In line with the recent Solana’s slope wallet hack, people might have less trust to use DEX/DAPPS and other stuff. Some may see their fear rise. Do you have anything to say about this issue and its causes? How can it be prevented on Alephium? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=2906s)\]

Cheng Wang: Security is a big topic, but there are different kinds of security. The first one is key management. This one is the same for all blockchains. For example, I think a hardware wallet is recommended for almost everyone. As far as I remember, the slope hack did not affect hardware wallet users. So if you use a hardware wallet, you would not have been hacked in that case.

The second type of security is smart contract security. We have a lot of advantages in this regard. First, as I mentioned before, we have our virtual machine. We built a new virtual machine to avoid many issues from the EVM. This is the same with our language: it was explicitly designed for managing tokens.

The third type of security is application security, which is not specific to blockchain tech. It requires the team or the engineers to know how to write secure code. For example, the application should never store the non-encrypted text for the password or the mnemonic key in the database. It seems something like this happened with the slope wallet attack. I don’t remember exactly the details, but it’s more or less like that.

Many things to look for! We are very conservative on this front.

#### dApp — [Jbashimov#7838](https://discord.com/channels/747741246667227157/747998352842686545/1007720211736178890)–1. What dAPP do you consider efficient and powerful and can help improve the system? 2. I know that you love theory. What theory are you planning to practice on the ALPH system for further improvement? \[[🔗📺](https://www.youtube.com/watch?v=Oi4AsqVY0YA&amp;t=3100s)\]

Cheng Wang: We are focusing on DEXes, naming services, NFTs, and probably working on a stablecoin and lending platform for the Ecosystem. All of them have been proved to be very important for a DeFi ecosystem. So definitely, we’re going to have all of them.

Regarding research, I’m personally very much focused on improving the ecosystem. So we will have more engineering work than research work in the near future. In the longer term, I’m interested in financial theory because there is a lot of financial theory in DeFi and dApps. The security of smart contracts is also central to what I’m researching.

---

### **Live Questions \[🔗📺\]**

#### Smerfik — Is proof of less work similar to ZIL mining?

Cheng Wang: I did not look that much into Zilliqa’s mining, but as far as I know, that is very different because it is a new algorithm.

#### Ricosworks — How long do you expect it will take to reach 100 EH/s?

Cheng Wang: Not tomorrow, for sure. I think it depends on the market. As I said, I have no good answer for that. We are going to see ASICs before that happens.

#### Hellyhea — Due to energy hike costs in Europe, how will miners feel confident in mining Alephium? Will the PoLW help here?

Cheng Wang: It is excellent practice to reduce energy consumption and also to convince people that mining will still be sustainable in the long term. But, for the rest, I’m not an expert or a professional miner. So, I’m not sure about the perspective from the miner side.

#### Augustov — Once PoLW is activated, how much ALPH will be needed to participate in mining?

Cheng Wang: In the beginning, the value will be small. If the hashrate goes as high as 10 EH/s per second, the block reward will be in the low single digits ALPH.

So if you are a small solo miner, you will have a few ALPHs to advance. But if you are a large miner, you must prepare for the 500 minutes lock on the block rewards. If you have 10% of the hashrate, you will need 10% of that 500 minutes block reward. It’s still a tiny amount. Probably several hundred ALPHs. I’m not sure, but around that.

**Vladimir Moshnyager: Thanks Cheng for your time and precious answers. Thanks to all those who took the time to tune in to our AMA and ask good questions. This AMA marks the end of our PoLW cycle. We’ll be back soon with another cycle of our Tech series, this time around the stateful UTXO tech that is at the center of Alephium’s architecture. See you soon!**

As always, stay tuned on our [Twitter](https://twitter.com/alephium), [Discord](https://discord.gg/h7cXXy4FEY), [Telegram](https://t.me/Alephium_Announcement), or [Reddit](https://www.reddit.com/r/Alephium/) for more content and interactions!
