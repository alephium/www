---
date: 2022-10-21T08:55:23.407000Z
description: Alephium is committed to building and delivering a secure and reliable
  blockchain. With that in mind, we have recently completed a security…
spotlight: false
featuredImage: image_396067c811.jpeg
title: Security Assessment by Inference
---

Alephium is committed to building and delivering a secure and reliable blockchain. With that in mind, we have recently completed a security assessment of critical parts of our code. This assessment was conducted by <a href="https://inference.ag/" data-href="https://inference.ag/">Inference</a> and specifically covered:

- <a href="https://en.wikipedia.org/wiki/Cryptographic_primitive" data-href="https://en.wikipedia.org/wiki/Cryptographic_primitive">Cryptographic Primitives</a> in <a href="https://github.com/alephium/alephium/tree/master/crypto/src/main/sca" data-href="https://github.com/alephium/alephium/tree/master/crypto/src/main/sca">https://github.com/alephium/alephium/tree/master/crypto/src/main/sca la/org/alephium/crypto</a>, including AES, BLAKE2b, BLAKE3, Ed25519, BIP32 key derivation, and other algorithms;
- <a href="https://en.wikipedia.org/wiki/Serialization" data-href="https://en.wikipedia.org/wiki/Serialization">Serialization</a> in <a href="https://github.com/alephium/alephium/tree/master/serde/src/m" data-href="https://github.com/alephium/alephium/tree/master/serde/src/m">https://github.com/alephium/alephium/tree/master/serde/src/m ain/scala/org/alephium/serde</a>;
- Proof of Less Work — our consensus mechanism <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301">(this article</a> explains it in detail);
- Mining operations in <a href="https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o" data-href="https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o">https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o rg/alephium/protocol/mining</a> (esp. Emission.scala )
- Difficulty adjustment in <a href="https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org" data-href="https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org">https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org /alephium/flow/core/</a> (mainly ChainDifficultyAdjustment.scala)
- Node Wallet — (take a look in <a href="https://medium.com/@alephium/ttxoo-2-the-road-to-self-custody-cfea4ae89444" data-href="https://medium.com/@alephium/ttxoo-2-the-road-to-self-custody-cfea4ae89444">here</a> for the definition): Wallet code in <a href="https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph" data-href="https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph">https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph ium/wallet</a>, with a focus on the secret’s storage (in storage/SecretStorage.scala).

We are happy to share that no critical flaws were found in our code for the covered topics. We thank Inference for their professionalism & their precise analysis. Our development team analyzed the recommendations given by Inference, and we have a pending <a href="https://github.com/alephium/alephium/pull/743" data-href="https://github.com/alephium/alephium/pull/743">PR</a> to address them.

You can find the report on their website: <a href="https://inference.ag/blog/2022-10-09-alephium/" data-href="https://inference.ag/blog/2022-10-09-alephium/">https://inference.ag/blog/2022-10-09-alephium/</a>

Our code is publicly available at <a href="https://github.com/alephium" data-href="https://github.com/alephium">https://github.com/alephium</a>

And you can find us on <a href="https://twitter.com/alephium" data-href="https://twitter.com/alephium">Twitter</a>, <a href="https://discord.gg/h7cXXy4FEY" data-href="https://discord.gg/h7cXXy4FEY">Discord</a>, <a href="https://t.me/Alephium_Announcement" data-href="https://t.me/Alephium_Announcement">Telegram</a>, or <a href="https://www.reddit.com/r/Alephium/" data-href="https://www.reddit.com/r/Alephium/">Reddit</a>!
