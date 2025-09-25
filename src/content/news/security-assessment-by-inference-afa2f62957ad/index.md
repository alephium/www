---
date: 2022-10-21T08:55:23.407000Z
description: "Security Assessment by Inference: Alephium is committed to building a secure and reliable blockchain, recently completing a security assessment of critical parts of our code."
seoDescription: "Alephium Security Assessment by Inference - secure blockchain commitment. Critical code security assessment and reliable blockchain development."
featuredImage: image_396067c811.jpeg
title: Security Assessment by Inference
---

Alephium is committed to building and delivering a secure and reliable blockchain. With that in mind, we have recently completed a security assessment of critical parts of our code. This assessment was conducted by [Inference](https://inference.ag/) and specifically covered:

- [Cryptographic Primitives](https://en.wikipedia.org/wiki/Cryptographic_primitive) in [https://github.com/alephium/alephium/tree/master/crypto/src/main/sca la/org/alephium/crypto](https://github.com/alephium/alephium/tree/master/crypto/src/main/sca), including AES, BLAKE2b, BLAKE3, Ed25519, BIP32 key derivation, and other algorithms;
- [Serialization](https://en.wikipedia.org/wiki/Serialization) in [https://github.com/alephium/alephium/tree/master/serde/src/m ain/scala/org/alephium/serde](https://github.com/alephium/alephium/tree/master/serde/src/m);
- Proof of Less Work — our consensus mechanism [(this article](/news/post/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301) explains it in detail);
- Mining operations in [https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o rg/alephium/protocol/mining](https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o) (esp. Emission.scala )
- Difficulty adjustment in [https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org /alephium/flow/core/](https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org) (mainly ChainDifficultyAdjustment.scala)
- Node Wallet — (take a look in [here](/news/post/ttxoo-2-the-road-to-self-custody-cfea4ae89444) for the definition): Wallet code in [https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph ium/wallet](https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph), with a focus on the secret’s storage (in storage/SecretStorage.scala).

We are happy to share that no critical flaws were found in our code for the covered topics. We thank Inference for their professionalism & their precise analysis. Our development team analyzed the recommendations given by Inference, and we have a pending [PR](https://github.com/alephium/alephium/pull/743) to address them.

You can find the report on their website: [https://inference.ag/blog/2022-10-09-alephium/](https://inference.ag/blog/2022-10-09-alephium/)

Our code is publicly available at [https://github.com/alephium](https://github.com/alephium)

And you can find us on [Twitter](https://twitter.com/alephium), [Discord](https://discord.gg/h7cXXy4FEY), [Telegram](https://t.me/Alephium_Announcement), or [Reddit](https://www.reddit.com/r/Alephium/)!
