---
title: 'BIP39 Passphrase implementation'
date: '2022-08-09'
description: 'To keep giving our users more tools to secure their ALPH, we’ve implemented the BIP39 passphrase feature in the desktop wallet v1.3.0!'
---

To keep giving our users more tools to secure their ALPH, we’ve implemented the BIP39 passphrase feature in the desktop wallet v1.3.0!

---

### BIP39 Passphrase implementation

#### To keep giving our users more tools to secure their ALPH, we’ve implemented the BIP39 passphrase feature in the desktop wallet v1.3.0!

<figure id="4e45" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*6IncMm2ok_TT0dYc" class="graf-image" data-image-id="0*6IncMm2ok_TT0dYc" data-width="768" data-height="432" data-is-featured="true" />
<figcaption>Desktop Wallet v1.3.0. Implementing BIP39 Passphrase specification from the Bitcoin Improvement Proposal</figcaption>
</figure>

**_DISCLAIMER:_** _THIS IS AN ADVANCED SECURITY FEATURE. YOU NEED TO BE VERY WELL ORGANIZED TO USE IT SAFELY. MOST PEOPLE PROBABLY DON’T NEED TO USE IT, AND RISK LOSING THEIR PASSPHRASE, THEREBY LOSING THEIR FUNDS._

**_DISCLAIMER 2: IF YOU LOSE (OR FORGET) YOUR PASSPHRASE, YOU LOSE YOUR FUNDS PERMANENTLY._**

#### Here you’ll find a description of the BIP39 feature **we have** <a href="https://github.com/alephium/desktop-wallet/releases/latest/" class="markup--anchor markup--h4-anchor" data-href="https://github.com/alephium/desktop-wallet/releases/latest/" rel="noopener" target="_blank"><strong>implemented in our desktop wallet</strong>,</a> why it is used, a tutorial (and a video) on how to set it up, and some best practices!

---

### What is a “BIP39 Passphrase”?

It is an optional, advanced security feature that allows you to create a new wallet by adding an additional passphrase to the 24 words of your Secret Recovery Phrase.

Originating from the <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" class="markup--anchor markup--p-anchor" data-href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" rel="noopener" target="_blank">39th Bitcoin Improvement Proposal (=BIP)</a>, it has become a standard for the broader crypto community. Think of it as a 25th word added to your seed (= Secret Recovery Phrase), except that you have full control over this one: it is not restricted to the dictionary words as the others are. It can be composed of all characters: A-Z, a-z, 0–9, special characters i.e. ASCII characters.

The Secret Recovery Phrase of 24 words that is generated when you create a new wallet is by itself a wallet with an empty (“”) passphrase. When you add a passphrase, it creates a **different,** brand new wallet.

You can therefore have one Secret Recovery Phrase with multiple passphrases to create multiple different wallets.

<figure id="22fa" class="graf graf--figure graf-after--p graf--trailing">
<img src="https://cdn-images-1.medium.com/max/800/0*qdpOElF_lCcBtrO7" class="graf-image" data-image-id="0*qdpOElF_lCcBtrO7" data-width="1161" data-height="569" />
<figcaption>Three different wallets derived from the same Secret Recovery Phrase</figcaption>
</figure>

---

### Why is it used?

The best way to put it is <a href="https://en.wikipedia.org/wiki/Plausible_deniability" class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Plausible_deniability" rel="noopener" target="_blank">“Plausible Deniability”</a>. As explained by Wikipedia:

> The term typically implies forethought, such as intentionally setting up the conditions for the plausible avoidance of responsibility for one’s future actions or knowledge.

And here’s an excellent comic of the no less excellent <a href="https://xkcd.com" class="markup--anchor markup--p-anchor" data-href="https://xkcd.com" rel="noopener" target="_blank">XKCD</a> explaining in very few words why one might need plausible deniability in crypto:

<figure id="8248" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*w6lGms1-xxDgHQ2d" class="graf-image" data-image-id="0*w6lGms1-xxDgHQ2d" data-width="448" data-height="274" />
<figcaption>XKCD 538 — <a href="https://xkcd.com/538/" class="markup--anchor markup--figure-anchor" data-href="https://xkcd.com/538/" rel="nofollow noopener" target="_blank">https://xkcd.com/538/</a></figcaption>
</figure>

In the case of a wallet containing cryptocurrencies and/or assets, this refers to the unfortunate scenario where an attacker either gains access to your Secret Recovery Phrase or forces you to reveal your wallet password and/or your 24-word Secret Recovery Phrase (also known as the “\$5 wrench attack”).

The Passphrase feature can help you secure most of your wealth as well as your physical safety by convincing the attacker that they have gained access to _the entirety_ of your funds… while in fact they have not!

<figure id="7d42" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*LrHuZaRl-iyAMxW6" class="graf-image" data-image-id="0*LrHuZaRl-iyAMxW6" data-width="1024" data-height="553" />
<figcaption>Two wallets have been compromised (Wallets #1 and #2) but not the hidden one (Wallet #3).</figcaption>
</figure>

Let’s explore this with an example:

#### The setup:

- <span id="65a9">You are a proud owner of 10'000 ALPH.</span>
- <span id="1788">You have created a “normal wallet” (no Passphrase) with the name **_Wallet \#1_**. You have transferred 100 ALPH to it.</span>
- <span id="1bba">You have created a “hidden wallet” called **_Wallet \#2_** with the passphrase “_letsUnlockAHiddenWallet”_. You have transferred 900 ALPH to it.</span>
- <span id="99e1">You have created yet another “hidden wallet” called **_Wallet \#3_** with the passphrase “_youCanNeverGuessThat!”_. You have transferred the remaining 9'000 ALPH to it.</span>

#### The attack:

- <span id="46a6">An attacker physically threatens you (with a wrench, a gun, or any other way) to unlock **_Wallet \#1_** on your desktop, the attacker steals the 100 ALPH that your seed phrase reveals.</span>
- <span id="218b">The attacker knows about the Passphrase feature and once again threatens to get your Passphrase, then you can deny that you use this feature and there will be no way for the attacker to prove whether you use it or not.</span>
- <span id="65b2">Nevertheless, you have one additional level of deniability by deciding to give them the passphrase to **_Wallet \#2_** and the attacker steals the 900 ALPH.</span>
- <span id="f1f9">Convinced that they have stolen all your funds, the attacker is no longer interested in extorting you. You have successfully managed to secure your safety and most of your funds safely stored in **_Wallet \#3_** (and that can go on and on and on… as you can have an unlimited number of passphrases…).</span>

Another scenario in which it’s good to have a passphrase is if you’d leave your Secret Recovery Phrase in a bank vault or in your will. Now the backup of your seed (24 words) is more secure because it’s incomplete in any one place.

You can keep your Secret Recovery Phrase in a safe at the bank, and your passphrase somewhere else. If a bank employee (or your lawyer) looks into the safe for the 24 words, now he still need to guess a complicated passphrase or find the passphrase that is stored elsewhere!

---

### Tutorial — How to create the wallets

#### The “normal wallet”

<figure id="ba63" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*mDJ7GLQPKOTzXf_a" class="graf-image" data-image-id="0*mDJ7GLQPKOTzXf_a" data-width="539" data-height="229" />
<figcaption>Wallet #1, no Passphrase</figcaption>
</figure>

Open the Alephium Desktop Wallet and create a new (standard) wallet. This one is called **_Wallet \#1_**, and the password is “_myVeryStrongPassw0rd”_.

You then transfer a small amount of ALPH to it. In this example, we’ll transfer 100 ALPH.

(of course naming conventions, passwords & amounts are here only for illustration purposes, use your own imagination and system for all this!)

#### The “hidden wallet”

<figure id="c360" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*7XA_NOjgHZNdB58T" class="graf-image" data-image-id="0*7XA_NOjgHZNdB58T" data-width="539" data-height="290" />
<figcaption>Wallet #2, with a passphrase</figcaption>
</figure>

The next time you open your wallet, you select that you want to login to **_Wallet \#1_** and you provide your password “_myVeryStrongPassw0rd”_. BUT Instead of clicking _Login_ directly, you click on the _“Optional passphrase”_ link.

Then, you enter the Passphrase “_letsUnlockAHiddenWallet”_, and then click _Login_.

This gives you access to a completely new wallet (let’s call it **_Wallet \#2_**). Its balance will be 0, because it’s an entirely different wallet as **_wallet \#1_** because of the passphrase.

You decide to transfer 1'000 ALPH to the **Wallet \#2**.

#### The other “hidden wallets”

<figure id="bf25" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*VE7J2FCehK7CruMd" class="graf-image" data-image-id="0*VE7J2FCehK7CruMd" data-width="539" data-height="290" />
<figcaption>Wallet #3, with another passphrase</figcaption>
</figure>

When you logout and you try to login into your “hidden wallet” again, if you enter your chosen Passphrase wrong (for example you enter “_letsUnlockAHidden\***\*w\*\***allet_“ instead of “*letsUnlockAHidden\***\*W\*\***allet”* — notice the lower case w instead of W), you will gain access to yet another new “hidden wallet” with 0 funds.

Logging out and logging in again, with the correct Passphrase this time, will give you access to your “hidden wallet” with the 1'000 ALPH in it.

You can then create your **Wallet \#3** with a different passphrase which will contain the bulk of your assets.

<figure id="bce0" class="graf graf--figure graf--iframe graf-after--p graf--trailing">

<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<a href="https://www.youtube.com/watch?v=a1nK9pYfKcQ" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</figure>

---

### Best practices when using a Passphrase

#### **You must store & remember your Passphrase verbatim and in extenso.**

Changing a single character (even, for example, from lower to upper-case), will result in the generation of a completely new wallet. As a result, it is imperative to:

1.  <span id="19a4">Choose a Passphrase that you can remember and enter it correctly before sending any funds to the generated wallet.</span>
2.  <span id="c75e">Remember it perfectly character by character.</span>
3.  <span id="d8bd">The passphrase should be <a href="https://apvhyngqeo.cloudimg.io/v7/https://allsafeit.com/wp-content/uploads/2021/07/Social-Media-Brute-Force-Password-Attacks-sq.png?w=800&amp;h=800&amp;org_if_sml=1" class="markup--anchor markup--li-anchor" data-href="https://apvhyngqeo.cloudimg.io/v7/https://allsafeit.com/wp-content/uploads/2021/07/Social-Media-Brute-Force-Password-Attacks-sq.png?w=800&amp;h=800&amp;org_if_sml=1" rel="noopener" target="_blank">long and strong,</a> otherwise it may be prone to brute-force attacks by anyone aware of the seed phrase.</span>

**IF YOU LOSE OR FORGET YOUR PASSPHRASE, YOU WILL LOSE YOUR FUNDS PERMANENTLY**

---

In the future, we will bring the metadata storage feature so that you can label your addresses in the Passphrase-enabled wallets. Stay tuned and always keep your desktop wallet app up to date!
