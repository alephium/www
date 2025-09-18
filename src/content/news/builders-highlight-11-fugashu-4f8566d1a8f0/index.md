---
date: 2024-04-20T13:26:33.259000Z
description: Our ecosystem thrives with developers building amazing projects on top
  of Alephium, delivering a unique experience and providing real…
spotlight: false
featuredImage: image_44c631f654.jpg
title: 'Builders Highlight #11: Fugashu'
---

_Our ecosystem thrives with developers building amazing projects on top of Alephium, delivering a unique experience and providing real utility for users. In the Builders Highlight series, they share more about their projects, thoughts, and insights on why building on Alephium. You can find_ [#1](/news/post/builders-highlight-sezame-wallet-ddb4aeb61881)_,_ [#2](/news/post/builders-highlight-alphpaca-nfts-99c69775f04c), [#3](/news/post/builders-highlight-3-ayin-6be4a6bd4ec2), [#4](/news/post/builders-highlight-4-no-trust-verify-9ea495ca826f), [#5](/news/post/builders-highlight-5-deadrare-d5ff90d6161e), [#6](/news/post/builders-highlight-6-what-the-duck-0aedc602ecfd), [#7](/news/post/builders-highlight-7-alphpad-bbd4f4a34fd5), [#8](/news/post/builders-highlight-8-ngu-money-f8bf05e36e99)_,_ [#9,](/news/post/builders-highlight-9-mobula-f9c45dc6c691) _and_ [#10](/news/post/builders-highlight-10-amolyus-39e03b6bd3f0) _here!_

Today, we welcome [Fugashu](https://twitter.com/fugashu_codes)! Hyperactive, and builder of many things! Starting with [useful](https://stats.alph.land/) [ecosystem](https://stats.alph.land/) [tools](https://visualizer.alph.land/) such as alph.land and the visualizer, he is now focused on a gaming platform called [Pyreplay](https://www.pyreplay.com/).

Here, he shares with us some insights his life in Alephium’s ecosystem, tools & world, and his plans for the future!

#### Hi! Please tell us a bit about yourself. Who are you? Where are you? What do you do? (As a job, as a hobby, or in general!)

Hello! I’m a full-time developer based in Germany, and I have been working since 2020. Professionally, I develop embedded software for dialysis machines and teach C++ at a local university.

My interest in web development began as a hobby but has since evolved into a professional endeavour, particularly within the cryptocurrency sector. Outside work, I enjoy spending time with my family, hiking, caring for my houseplants, and playing Magic: The Gathering.

#### Can you tell us a bit about your journey in tech/crypto?

From a young age, I was captivated by technology, physics, and mathematics, which led me to pursue a career in engineering. My introduction to cryptocurrency came in 2017 during my computer science studies when a friend introduced me to Iota.

I quickly immersed myself in the field, built an Ethereum mining rig, invested spare funds, and explored the underlying technology. Post-graduation, I teamed up with a close university friend to develop dApps as a hobby, which led to the founding of our company, which delivers both Web2 and Web3 software solutions. We already developed an NFT marketplace, tokenized physical assets, and contributed to platforms like Immutable, Opensea, and Alephium.

#### How did you find out about Alephium? What did you find here that you didn’t find elsewhere?

I learned about Alephium through a German Telegram group that shares new blockchain projects. What initially attracted me was the user-friendly interface and robust toolset of Alephium’s platform.

After researching, I was impressed by its unique features, such as the [Asset Permission System](/news/post/alephiums-aps-eliminating-evm-token-approval-risks-5407e7e70a33#:~:text=Understanding%20Alephium%27s%20Asset%20Permission%20System&amp;text=One%20important%20feature%20of%20the,These%20transactions%20can%20support%20TxScript.) and the [Proof of Less Work](/news/post/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301) concept, which are not typically found in EVM-based platforms. The strong academic contributions from Cheng and industry connections to Vitalik also significantly influenced my decision to build on Alephium.

#### You’ve been one of the big winners of the hackathon. How was your experience hacking in there? How’s the learning curve to get going? What took the most time to grasp?

![](image_ec682126a5.png)

[Participating in the hackathon](/news/post/hackathon-1-pioneers-submissions-76b869089ace) was an amazing experience. I was particularly drawn to the challenge of visualizing Alephium’s sharding algorithm through a 3D interactive environment, a task that required me to learn [Three.js](https://threejs.org/) from scratch. Developing both the front-end visualizer and an efficient backend to manage real-time data was challenging, especially while juggling a full-time job.

On the backend, we set up a buffer to manage incoming blocks and introduced an open-source websocket that streams block data in real time. Initially, we encountered some challenges with the websocket intermittently blocking our Redis worker, which was quite troublesome.

After some investigation, we determined that the problem stemmed from the library we were using. I’m proud that we managed to deliver a functional product within two weeks and also secure a [top prize](/news/post/hackathon-winners-announced-68d55711b99d) and the [Bitmain special prize](https://twitter.com/alephium/status/1771598954373038443)!

#### **Tell us a little bit about your history with Alephium, because it’s been a little while you’ve been around! First you built alph.land, then the visualizer for the hackathon and since then you created both a NFT collection & are working on a game! Let’s start with alph.land… What’s your vision for its development?**

![](image_14373b0f8b.png)

[Alph.land](http://alph.land) serves as a virtual information hub where newcomers can easily discover and explore ongoing projects within the Alephium blockchain. My vision for alph.land is to continue enhancing its functionality to better serve the community’s needs, with success indicators being frequent community engagement and new project integrations & pull requests.

#### What about the stats/visualizer? Your project has been commended for enhancing the understanding of the Alephium blockchain. What inspired you to focus on visualizing the blockflow sharding algorithm? Will you evolve it to visualize more things? Or was it a one-off for the hackathon?

![](image_ec682126a5.png)

[The stats dashboard](https://stats.alph.land/) was initially a proof of concept, and we plan to include more statistics in the future. A community member introduced me to the idea of the [visualizer.](https://visualizer.alph.land/) Having long been interested in 3D web development, I decided to dive in!

The results have been quite impressive, at least to me. As a teacher who enjoys sharing knowledge, I see this as a fantastic tool to help others grasp complex technical papers and algorithms through visual representation. While I may enhance or add more statistics to this project, my current focus is entirely on developing Pyreplay. :)

#### Tell us more about Pyreplay, which seems to be your most ambitious project! You started with a bang as your NFT collection minted really fast. Can you describe what pyreplay is, how do the NFTs interact with it?

![](image_d7e2e86f1a.png)

[Pyreplay](http://pyreplay.com) is envisioned as a competitive arcade platform where users can engage in various mini-games and classic arcade challenges. The overwhelming support from the Alephium community, evidenced by our NFT collection selling out in just four hours, was truly heartening. These NFTs not only offer holders reduced gameplay costs but also a share in the project’s revenue, embedding them deeply into the ecosystem of Pyreplay. Thank you to everyone who has supports me on this journey and believes in the same vision!

#### How do you see the future of the Pyreplay? What’s on your roadmap? What would be the Pyreplay moonshot?

![](image_c3f270110d.png)

The ideal future for Pyreplay is a vibrant and expanding community of players. Our roadmap includes scaling up the number of games and incorporating community tokens on Alephium. The ‘moonshot’ for Pyreplay would be establishing it as a leading platform in blockchain-based competitive gaming, with continual growth in our player base and game offerings.

#### What advice would you give to someone looking to build on Alephium, based on your experience? In your opinion, how can the Alephium ecosystem foster a more vibrant developer community?

The community is incredibly supportive, and you can find assistance in the dedicated Discord channels. My suggestion is straightforward: focus on projects that truly excite you.

When you have a genuine passion for your project, staying motivated and overcoming obstacles becomes easier. As Alephium is growing quickly, the documentation may not always be current, and there might be a need for additional helper functions, but this is a small price to pay for being involved so early on.

#### Where can we stay in touch with your project & with you? Is it possible to contribute?

I’m regularly active on Discord and Twitter, which are great platforms to connect with me.

Alph.land, Stats, and the Blockchain Visualizer are all open-source projects, and I always welcome contributions. Pyreplay is closed source (at least for now).

**Github repo links:**

[https://github.com/CodeBaristas](https://github.com/CodeBaristas),

[https://github.com/Fugashu](https://github.com/Fugashu),

[https://github.com/Cojodi/alphland](https://github.com/Cojodi/alphland)

**Websites:**

[alph.land](http://alph.land)

[visualizer.alph.land](http://visualizer.alph.land,)

[stats.alph.land](http://stats.alph.land)

[docs.pyreplay.com](http://docs.pyreplay.com)

Thank you, Fugashu, for your answers!

---

_Disclaimer: While Alephium is happy to support a growing developer community, it would like to clarify that it does not endorse, audit, or review any software presented in this series and encourages all users to make informed decisions and take personal responsibility for their actions._

Have you built something or have a nice idea and want to request a grant or reward? You can access the [Alephium Community Grants &amp; Reward Program page](https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md) for more info!
