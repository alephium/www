---
date: 2023-08-02T16:02:20.857000Z
description: "Tech Talk #11: How to onboard the next billion people to crypto, featuring insights from industry experts on making cryptocurrency accessible to mainstream users."
seoDescription: "Alephium Tech Talk #11 - how to onboard next billion people to crypto. Industry experts discuss making cryptocurrency accessible to mainstream users."
featuredImage: image_50aac2130d.png
title: 'TechTalk #11 — How to onboard the next billion people to crypto?'
---

Mikaël Vaivre is Alephium’s lead front-end developer, and he’s been the guest of our TechTalk \#11! While Mika is fairly discreet, and Alephium users might not have had the chance to see him a lot, his work has touched their digital experiences in more ways than they realize. Whether they used the [desktop wallet](/wallets), browsed the Alephium [Website](/), or used the [explorer](https://explorer.alephium.org/), Mika’s creativity and expertise and his fruitful collaboration with [Ilias](https://github.com/nop33) have shaped these experiences.

[Mika’s](https://twitter.com/mika_pote) trajectory in the world of technology began as an environmental engineer studying in Lausanne. However, he quickly entered the startup realm in a car automation company, where he crossed paths with [Cheng](https://twitter.com/wachmc). His next step led him to the blockchain world at [LYKKE](https://lykke.com/), one of the pioneering Swiss exchanges, and since 2019, Mika has been an integral part of Alephium.

You can watch the presentation here:

`video: https://www.youtube.com/watch?v=QHmb87sT9nI`

Now, let’s dive into Mika’s presentation: **How can we onboard the next billion people to crypto?**

## Iterate (a lot)

![](image_21fcf1053a.jpg)

Whether designing a new logo or coding an application, iteration is essential. An example is the redesign of Alephium’s logo to align with the brand’s vision and values. Through several iterations, the final logo reflects the essence of Alephium and resonates with its users.

This experience teaches that investing time and effort in good design yields remarkable results, enhancing the overall user experience and brand recognition.

![](image_3f312b825e.jpg)

## Don’t be scared to try (live)

![](image_67053511c7.jpg)

True innovation occurs when ideas are implemented, even if it involves taking risks. Alephium’s approach aligns with this philosophy by emphasizing the value of live experimentation and user feedback. Similar to how Elon Musk transformed Twitter’s logo into “X,” trying new features and approaches in real-world scenarios allows for quicker identification of shortcomings and improvements.

At Alephium, user feedback is invaluable in refining products and identifying areas for improvement. A product can’t be considered a success until real users validate its usability and functionality. Being willing to take risks and try new things allows us to fail fast and fix any issues promptly. Through this process of experimentation, we continually iterate and improve our products, making them more user-friendly and effective.

## Simple is beautiful (but hard)

![](image_11dbe41d10.jpg)

Simplicity is beautiful, yet achieving it is a challenging task. These questions need to be always present: How to design an efficient and easy-to-use tool without being bland or overly flashy? How do to avoid overwhelming users with too much information while still providing them with everything they need?

When creating products at Alephium, we aim to strike the right balance between aesthetics and functionality. Designing visually appealing interfaces doesn’t need to sacrifice user experience for aesthetics. The most critical information and actions are easily accessible, providing users with a seamless and enjoyable journey through the applications.

Alephium, with a team composed mainly of engineers, has a unique perspective on the complexity behind the code — and the importance of abstracting this complexity to provide a smooth user experience. The strategy involves hiding advanced features by default, ensuring users are not overwhelmed by technical jargon or unused functionalities.

By carefully considering user interactions and flows, we hide away unnecessary complexity while providing clever ways for users to access more detailed options when needed. This approach caters to beginners and advanced users, ensuring user-friendly and powerful products.

![](image_8f8c373fce.jpg)

## Don’t reinvent the wheel (but sometimes do)

Drawing inspiration from successful products and innovations is essential to Alephium’s design philosophy. The experiences and best practices from widely adopted products are considered when exploring new ideas and integrating features. This process helps to identify opportunities for innovation and improvement, enhancing the products’ appeal and functionality.

An excellent example of this approach is the effort to integrate desktop wallets with dApps (decentralized applications). While the conventional method of using browser extensions for wallet interactions is prevalent, we enjoy experimenting with what could become a more seamless and user-friendly experience by integrating wallet functions directly into the desktop application. This allows users to focus on their tasks and reduces unnecessary steps and distractions.

![](image_b700f411ca.jpg)

Here you can find the [full presentation](https://slides.com/mikaelvaivre/deck)!

## Q&A Session:

### UI/UX

**When we look at what you guys produce in the front-end, we can see there’s plenty of space, of air between things, and that you tend to abstract as much as possible the complexity of the interface. Why is that? Who’s the target audience of the tools you are developing?**

Our goal is to build a product that can be used by pretty much everyone. Although we initially targeted more advanced users and developers to grow the ecosystem, we also built the foundations for accessibility.

The ultimate aim is to have an intuitive wallet, similar to a wallet you have in your pocket. We want users to be able to use it without needing to learn anything beforehand, making it easy for newcomers to adopt blockchain technology.

**It’s uncommon for recent layer1s to have such a developed and actively upgraded Desktop wallet. Why did you decide to prioritize the desktop wallet? Why invest so much time in making the wallet so accessible?**

We prioritize the desktop wallet because it allows us to offer a seamless user experience and powerful features. While we’re now also working on a mobile wallet, the desktop wallet has advantages, such as handling complex interactions and providing a smooth form factor.

Both wallets serve different purposes and attract different users, contributing to the overall accessibility of our platform.

**Alephium, thanks to its** [single-step cross-group](/news/post/an-introduction-to-blockflow-alephium-s-sharding-algorithm-bbbf318c3402) **design, abstracts a lot of the technical complexity of sharded blockchains away, but people will sometimes still need to understand which group they are. Same with the minimum requirement for sending tokens, people need to pay a 0.001 ALPH fee for “UTXO storage”. And the deployment of smart contracts that requires a storage rent of 1 ALPH. What’s your design process to integrate the technical peculiarities into a manageable experience for a normal user who is not an engineer?**

Our design process revolves around simplicity and education.

We always start with the simplest solution, hiding complexities as much as possible. If a feature requires more explanation, we provide easy-to-reach links to relevant documentation, educating users about technical details without overwhelming them. By combining intuitive design with accessible resources, we aim to make the platform manageable for non-engineer users.

**Centralized UI/UX are usually better than decentralized ones. How do you integrate that into your thinking/design?**

We take inspiration from centralized products with excellent user experiences and try to replicate those in our design. While decentralization introduces challenges, we believe it’s an intermediary step. By constantly refining and optimizing our user interfaces, we work towards bridging the gap between the ease of use in centralized products and the decentralization benefits we offer.

### Other wallets / the explorer

**WEN MOBILE WALLET?**

The [mobile wallet](https://github.com/alephium/mobile-wallet) is already in development, and we have already ported most features from the desktop wallet. Although it requires optimization and fine-tuning to work smoothly across various devices and operating systems, we are making good progress.

**The extension wallet is markedly different from the desktop wallet, will it be integrated soon in the front-end designed family of wallets?**

The extension wallet ([Chrome](https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/)) provides connection directly into the browser, making it useful for different interactions. While the form factor is similar, we still plan to offer both wallets as they cater to different user needs. Our goal is to refine the mobile wallet and eventually port its design to the extension, ensuring a consistent user experience across all our products.

**The explorer is a critical component of a decentralized infrastructure, as it will be, for many people, the only way to observe what actually happens. UX for tech people is command line/node debug/logs, UX for retail is the explorer. What does an explorer good enough look like?**

An ideal explorer provides users with clear insights into the blockchain’s activities without overwhelming them with technical jargon. We aim to strike the right balance between being informative and user-friendly. A good explorer should be easily navigable, visually appealing, and deliver relevant information in a concise manner, making it accessible to both technical and non-technical users.

### The brand

**The Alephium brand is constantly evolving. In that regard, it’s fairly atypical as it’s a constant evolution, that can affect all its components: the logo has changed colors, the layout, the colors of the palette, etc… How do you think about this evolution? Where is it leading, from where, and why?**

The brand’s constant evolution reflects the fast-moving nature of the industry and our desire to adapt and improve continuously. It allows us to stay fresh and relevant while maintaining brand recognition through consistent elements like the logo shape and name. As we progress, we will likely converge and stabilize, but for now, the evolving brand keeps us adaptive and in sync with market demands.

### From the community

**Is it very different in terms of UX to work on a sharding chain than a non-sharding one?**

It’s an interesting question, and surprisingly, it’s not very different in terms of UX. The team at Alephium did an excellent job making the tech accessible. One aspect that stands out is handling groups when creating an address or a miner. By default, the complexity of addressing multiple groups is hidden from most users. However, miners creating a wallet to mine are presented with a more complex option. A shortcut was implemented to simplify this, allowing users to click one button to create addresses for all groups automatically. So, while there are some differences, it’s not overly complicated, unlike handling UTXOs, which can be more challenging.

**How easy/hard is it to create a real-time UI to see sharding functionality on a website and show the way the data moves?**

Creating a real-time UI to visualize sharding functionality on a website is quite achievable. In fact, the team has previously worked on schematics to demonstrate how block flow works with the sharding algorithm. While they haven’t attempted it directly on a website, the technology exists to showcase data movement. For instance, a YouTube video dating back to 2019 covers the three axes of sharding, providing a good starting point. Additionally, there are plans to create schematics demonstrating how group, shard, and chain interactions form a single unified ledger on top of a sharded infrastructure.

**What’s your favourite way of collecting user feedback to gauge user experience and identify areas for improvement? Is it mainly from Discord? Twitter? Or do you use other metrics?**

User feedback is collected in two main ways: passive and active feedback. For passive feedback, anonymized metrics are gathered, allowing the team to understand how users interact with the product. This data helps identify which features are widely used and where improvements can be made, such as streamlining user flows. As for active feedback, social media platforms like Discord and Twitter play a significant role. The team has a presence on these platforms, engaging with users, collecting feedback, and addressing issues. Opening an issue on GitHub is another efficient way for users to provide feedback or propose new features.

**Do you plan to have a UX for wallet addresses, making it easy for non-tech users to send funds?**

Having a UX for wallet addresses that eases the onboarding process for non-tech users is a desirable goal. This would involve creating addresses that are more understandable, akin to ENS addresses. While the idea is intriguing and could aid adoption, it’s not solely the team’s decision. Such a development would depend on the ecosystem and the broader community. Currently, the team values the ability for users to have multiple addresses, allowing for anonymity and privacy.

**After the mobile wallet, what focus or milestone will be targeted next from your side? What’s your next big thing?**

There are numerous areas of focus for the team. One exciting possibility is helping with polishing the extension wallet if there’s a demand for it. However, one definite goal is to develop a library of example dApps (decentralized applications) to showcase their technology. These dApps would serve as experiments, demonstrating how their tech can be used effectively. The focus will be on emphasizing user experience, not just for developers but also for those starting a business. By providing polished and inspiring dApps, the team aims to guide tech-savvy and non-tech users in building great applications with their technology.

---

You can reach us through [Discord](https://discord.gg/XsGpZ5VDTM), [Telegram](https://t.me/alephiumgroup) and [Twitter](https://twitter.com/alephium). Stay tuned for the next Tech Talk, and thank you for your support!
