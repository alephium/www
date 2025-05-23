---
date: 2022-10-21 08:55:23.407000+00:00
description: Alephium is committed to building and delivering a secure and reliable
  blockchain. With that in mind, we have recently completed a security…
featuredImage: image_396067c811.jpeg
title: Security Assessment by Inference
---

### Security Assessment by Inference

<figure id="2c69" class="graf graf--figure graf-after--h3">
<img src="image_396067c811.jpeg" class="graf-image" data-image-id="1*KQRVW_KbI_dXN3R5C_PR_A.jpeg" data-width="1024" data-height="576" data-is-featured="true" />
<figcaption>Security Assessment by Inference</figcaption>
</figure>

Alephium is committed to building and delivering a secure and reliable blockchain. With that in mind, we have recently completed a security assessment of critical parts of our code. This assessment was conducted by <a href="https://inference.ag/" class="markup--anchor markup--p-anchor" data-href="https://inference.ag/" rel="noopener" target="_blank">Inference</a> and specifically covered:

- <a href="https://en.wikipedia.org/wiki/Cryptographic_primitive" class="markup--anchor markup--li-anchor" data-href="https://en.wikipedia.org/wiki/Cryptographic_primitive" rel="noopener" target="_blank">Cryptographic Primitives</a> in <a href="https://github.com/alephium/alephium/tree/master/crypto/src/main/sca" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/tree/master/crypto/src/main/sca" rel="noopener" target="_blank">https://github.com/alephium/alephium/tree/master/crypto/src/main/sca la/org/alephium/crypto</a>, including AES, BLAKE2b, BLAKE3, Ed25519, BIP32 key derivation, and other algorithms;
- <a href="https://en.wikipedia.org/wiki/Serialization" class="markup--anchor markup--li-anchor" data-href="https://en.wikipedia.org/wiki/Serialization" rel="noopener" target="_blank">Serialization</a> in <a href="https://github.com/alephium/alephium/tree/master/serde/src/m" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/tree/master/serde/src/m" rel="noopener" target="_blank">https://github.com/alephium/alephium/tree/master/serde/src/m ain/scala/org/alephium/serde</a>;
- Proof of Less Work — our consensus mechanism <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--li-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank">(this article</a> explains it in detail);
- Mining operations in <a href="https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o" rel="noopener" target="_blank">https://github.com/alephium/alephium/tree/master/protocol/src/main/scala/o rg/alephium/protocol/mining</a> (esp. Emission.scala )
- Difficulty adjustment in <a href="https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org" rel="noopener" target="_blank">https://github.com/alephium/alephium/blob/master/flow/src/main/scala/org /alephium/flow/core/</a> (mainly ChainDifficultyAdjustment.scala)
- Node Wallet — (take a look in <a href="https://medium.com/@alephium/ttxoo-2-the-road-to-self-custody-cfea4ae89444" class="markup--anchor markup--li-anchor" data-href="https://medium.com/@alephium/ttxoo-2-the-road-to-self-custody-cfea4ae89444" target="_blank">here</a> for the definition): Wallet code in <a href="https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph" class="markup--anchor markup--li-anchor" data-href="https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph" rel="noopener" target="_blank">https://github.com/alephium/alephium/tree/master/wallet/src/main/scala/org/aleph ium/wallet</a>, with a focus on the secret’s storage (in storage/SecretStorage.scala).

We are happy to share that no critical flaws were found in our code for the covered topics. We thank Inference for their professionalism & their precise analysis. Our development team analyzed the recommendations given by Inference, and we have a pending <a href="https://github.com/alephium/alephium/pull/743" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium/pull/743" rel="noopener" target="_blank">PR</a> to address them.

You can find the report on their website: <a href="https://inference.ag/blog/2022-10-09-alephium/" class="markup--anchor markup--p-anchor" data-href="https://inference.ag/blog/2022-10-09-alephium/" rel="noopener" target="_blank">https://inference.ag/blog/2022-10-09-alephium/</a>

Our code is publicly available at <a href="https://github.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium" rel="noopener" target="_blank">https://github.com/alephium</a>

And you can find us on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener ugc nofollow noopener" target="_blank">Twitter</a>, <a href="https://discord.gg/h7cXXy4FEY" class="markup--anchor markup--p-anchor" data-href="https://discord.gg/h7cXXy4FEY" rel="noopener ugc nofollow noopener" target="_blank">Discord</a>, <a href="https://t.me/Alephium_Announcement" class="markup--anchor markup--p-anchor" data-href="https://t.me/Alephium_Announcement" rel="noopener ugc nofollow noopener" target="_blank">Telegram</a>, or <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener ugc nofollow noopener" target="_blank">Reddit</a>!
