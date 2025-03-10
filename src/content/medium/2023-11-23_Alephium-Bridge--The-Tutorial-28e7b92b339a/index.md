---
title: "Alephium Bridge: The Tutorial"
date: "2023-11-23"
description: "How to bridge your tokens + what to do on the Alephium Ecosystem"
---

<div>

# Alephium Bridge: The Tutorial

</div>

<div class="section p-summary" field="subtitle">

How to bridge your tokens + what to do on the Alephium Ecosystem

</div>

<div class="section e-content" field="body">

<div id="37a9" class="section section section--body section--first">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### Alephium Bridge: The Tutorial

#### How to bridge your tokens + what to do on the Alephium Ecosystem

<figure id="331c" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/1*rwuxhApvIQSPgAtXEI-PZA.png" class="graf-image" data-image-id="1*rwuxhApvIQSPgAtXEI-PZA.png" data-width="2558" data-height="1508" data-is-featured="true" />
</figure>

*This tutorial was updated to reflect the new conditions after the* <a href="https://medium.com/@alephium/rh%C3%B4ne-network-upgrade-activated-cbeb298585fe" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/rh%C3%B4ne-network-upgrade-activated-cbeb298585fe" target="_blank"><em>Rhône Network Upgrade</em></a>*: bridging from Alephium to Ethereum requires at least 205 blocks* ***and*** *at least 55 minutes.*

Welcome to the Alephium Bridge Tutorial!

So we launched the bridge! It’s been quite an effort, if you want to know more about this, read <a href="https://twitter.com/alephium/status/1722661768131178556" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1722661768131178556" rel="noopener" target="_blank">that</a> (twitter thread) or <a href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" target="_blank">that</a> (full article on the bridge).

One last thing before we start, if you want to verify contract addresses, token contracts and other token lists, <a href="https://medium.com/@alephium/verification-of-bridge-contracts-tokens-token-lists-76e5c237bf52" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/verification-of-bridge-contracts-tokens-token-lists-76e5c237bf52" target="_blank">here you go</a>.

Here you will find a detailed step-by-step guide on how to bridge your tokens!

**Here’s the bridge URL**: <a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbWtib04tU2ZMS2FEdm15Tml3SUVuUTduQk1VQXxBQ3Jtc0ttcDJpOVRHSDBIRFZlZENHY1ZqQ2RCMDlXMEY2RVpoTUQzZF9mTzlvR1BJZU0wV2J2M1FvTEg3SWVaTEU3T0RoS0RGN0lYUmdJZVRuY3p0cFBBTUM0YzhxTndfd3A5ZTZ3aTJxckx1LWVJdTlYN2VvQQ&amp;q=https%3A%2F%2Fbridge.alephium.org%2F&amp;v=xoYVzbwBAjg" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbWtib04tU2ZMS2FEdm15Tml3SUVuUTduQk1VQXxBQ3Jtc0ttcDJpOVRHSDBIRFZlZENHY1ZqQ2RCMDlXMEY2RVpoTUQzZF9mTzlvR1BJZU0wV2J2M1FvTEg3SWVaTEU3T0RoS0RGN0lYUmdJZVRuY3p0cFBBTUM0YzhxTndfd3A5ZTZ3aTJxckx1LWVJdTlYN2VvQQ&amp;q=https%3A%2F%2Fbridge.alephium.org%2F&amp;v=xoYVzbwBAjg" rel="nofollow noopener noopener noopener noopener noopener" target="_blank">https://bridge.alephium.org/</a>

First, if you’re into video tutorials, here you go:

<figure id="dd74" class="graf graf--figure graf--iframe graf-after--p">
<div class="iframe">
<div id="player">

</div>
<div class="player-unavailable">
<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<div class="submessage">
<a href="https://www.youtube.com/watch?v=xoYVzbwBAjg" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</div>
</div>
</div>
</figure>

#### In writing

If you feel that you prefer a slow-paced guide, the written version is for you!

**There are some prerequisites you will need before bridging!**

1.  <span id="25b6">**Pick the wallet you are going to use**</span>

It works with any of our <a href="https://alephium.org/#wallets" class="markup--anchor markup--p-anchor" data-href="https://alephium.org/#wallets" rel="noopener" target="_blank">wallets</a>! But for this tutorial, we chose to show how easy it is to work with both the mobile wallet and the browser extension.

<figure id="dc27" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*zR-kd1eRT0CVlAL5" class="graf-image" data-image-id="0*zR-kd1eRT0CVlAL5" data-width="1440" data-height="666" />
</figure>

**2. Gas funds / Transactional costs**

If you are bridging from Ethereum to Alephium (and for the “redeem” step if you’re bridging the other way around) you’ll need to pay some gas fees (and it can get quite expensive at times).

Alephium’s gas fees are very low. And if you are bridging from Ethereum to Alephium, as a celebratory gesture a faucet has been implemented dishing out a single ALPH for every transaction in this direction (read more about this <a href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/the-alephium-bridge-a787d90b2e4a" target="_blank">here</a>).

**3. A new address on “Group 0”**

In order to bridge any tokens you will need to use an already existing or generate a brand new address on group 0. Why?

Alephium currently requires your address to be on the same group or shard as the dApp you are interacting with (and the bridge is a dApp). The core team is working on making it more dynamic in the future, but in the meantime, create a new address in your wallet and create it on group 0 if you want to interact with dApps on the Alephium Ecosystem.

We’ll go through both directions in this tutorial:

Ethereum to Alephium first, and then Alephium to Ethereum!

### **1 — Bridging USDT from Ethereum to Alephium**

The first step is to head on over to <a href="https://bridge.alephium.org/" class="markup--anchor markup--p-anchor" data-href="https://bridge.alephium.org/" rel="noopener" target="_blank">https://bridge.alephium.org/</a>.

Open the “Tokens” tab and make sure you pick “Ethereum” as your source chain and “Alephium” as your target chain!

<figure id="e68e" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*yfQy-uYpBXULY2RC" class="graf-image" data-image-id="0*yfQy-uYpBXULY2RC" data-width="668" data-height="488" />
</figure>

Proceed to pick and connect the wallet you will use as the “Ethereum” source.

<figure id="ee88" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*KMzbtA7i3gv79Xrz" class="graf-image" data-image-id="0*KMzbtA7i3gv79Xrz" data-width="312" data-height="162" />
</figure>

Once you are done, press the “Select a Token” button and pick the tokens you wish to bridge over!

In our case, this is going to be USDT.

<figure id="ddff" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*6c0MqPon03QxQjxv" class="graf-image" data-image-id="0*6c0MqPon03QxQjxv" data-width="663" data-height="399" />
</figure>

Fill in the amount you wish to bridge, and press the “next” button.

<figure id="0aac" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*A8OpjDLAl158NOhT" class="graf-image" data-image-id="0*A8OpjDLAl158NOhT" data-width="657" data-height="127" />
</figure>

With the next step, you will need to connect your “Alephium” wallet of choice.

For our case that is going to be the mobile wallet.

<figure id="9074" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*K0DY9192BlWbDFrf" class="graf-image" data-image-id="0*K0DY9192BlWbDFrf" data-width="665" data-height="242" />
</figure>

In order to connect the mobile wallet, please pick the “Wallet Connect” option from the pop-up menu on screen.

#### *The process shouldn’t be any more different than with any of the other two options.*

<figure id="34c7" class="graf graf--figure graf-after--h4">
<img src="https://cdn-images-1.medium.com/max/800/0*LsUSaYQMFKcGdQBP" class="graf-image" data-image-id="0*LsUSaYQMFKcGdQBP" data-width="267" data-height="256" />
</figure>

**A QRCode will pop up on your screen.** We are now going to move over to the mobile wallet, where we will be using the “Scan a QRCode” option by tapping on the Scanner button in the up-right corner of the Alephium mobile wallet.

<figure id="4e44" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*om0z5Y4HOhb9BV0v" class="graf-image" data-image-id="0*om0z5Y4HOhb9BV0v" data-width="295" data-height="325" />
</figure>

Upon scanning the QR Code and accepting the connection, your mobile wallet should be tethered to the bridge dApp!

Returning to the bridge webpage, you can verify that the correct address is connected and verify the amounts and information on screen, once everything seems correct. (if your token doesn’t appear, verify that you connected with an address on group 0!)

We will proceed forward by pressing the “Next” button.

<figure id="a9f3" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*89Ft2_htYJ7Doj5-" class="graf-image" data-image-id="0*89Ft2_htYJ7Doj5-" data-width="655" data-height="339" />
</figure>

We are almost there! Now it’s time to approve the spending limit of our tokens from the Ethereum side of the bridge.

A pop-up should appear if you are using Metamask where you can approve the spending limit.

> *This action involves a gas fee*

<figure id="3778" class="graf graf--figure graf-after--pullquote">
<img src="https://cdn-images-1.medium.com/max/800/0*pERuEMP8ZZ3uJBqV" class="graf-image" data-image-id="0*pERuEMP8ZZ3uJBqV" data-width="659" data-height="245" />
</figure>

We are sooo close! Once the approval is complete, we are diving into the final stages of bridging.

<figure id="0334" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*99yprRPLTMV_Gcoi" class="graf-image" data-image-id="0*99yprRPLTMV_Gcoi" data-width="655" data-height="217" />
</figure>

Press “Transfer” when ready and verify all information on the screen before confirming.

<figure id="b05a" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*fDkwdrw7KN9yz_jx" class="graf-image" data-image-id="0*fDkwdrw7KN9yz_jx" data-width="433" data-height="321" />
</figure>

Confirm the transaction through your wallet of choice, in our case metamask.

> *This action involves a gas fee*

And we are done! Once the transaction reaches finality on the Ethereum side, which usually takes around 15 to 30 minutes, you should see the WUSDT in your Alephium wallet!

If, for some reason, you close the page or tab away from it. You can always recover your transaction using the txid available to you on screen.

<figure id="41ff" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*dxGgYgb4WVaMoEah" class="graf-image" data-image-id="0*dxGgYgb4WVaMoEah" data-width="637" data-height="94" />
</figure>

Using this txid you can recover your transaction through the “Redeem” tab, make sure you select the correct source chain you are bridging from.

<figure id="83be" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*BpMYI1vSyG1rD269" class="graf-image" data-image-id="0*BpMYI1vSyG1rD269" data-width="666" data-height="413" />
</figure>

**And, that’s it!** Your WUSDT is now available on Alephium!

<figure id="2162" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*UcRPChozTAvyOKC5" class="graf-image" data-image-id="0*UcRPChozTAvyOKC5" data-width="646" data-height="458" />
</figure>

Now , let’s do the reverse!

### **2 — We will now bridge some native ALPH over to the ETH blockchain!**

Just like before, the first step is to head over to <a href="https://bridge.alephium.org/" class="markup--anchor markup--p-anchor" data-href="https://bridge.alephium.org/" rel="noopener" target="_blank">https://bridge.alephium.org/</a> but this time we will pick Alephium as our source chain and Ethereum as our target chain.

Unlike last time we will now use the browser extension to perform a bridge!

Feel free to use any of the other wallets, as the process works with all of them.

**When choosing the wallet for connection , pick the “Extension Wallet”**

<figure id="9dcd" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*XkxyD6Yx4e97w1Lh" class="graf-image" data-image-id="0*XkxyD6Yx4e97w1Lh" data-width="259" data-height="241" />
</figure>

Once you are done, please press the “Select a Token” button and pick the token you wish to bridge over! This time we are going for ALPH.

<figure id="6e3b" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*pUNIaW6XYGHbRn9w" class="graf-image" data-image-id="0*pUNIaW6XYGHbRn9w" data-width="423" data-height="196" />
</figure>

Fill out the amount you wish to bridge and press “Next” when ready!

<figure id="872a" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*TTnPpV4PDa1PMBYk" class="graf-image" data-image-id="0*TTnPpV4PDa1PMBYk" data-width="647" data-height="204" />
</figure>

For the next step, you are going to connect your Metamask or any Wallet Connect-compatible wallet to perform this bridge.

<figure id="6b10" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*EZ0R8kM3OwBS_GGd" class="graf-image" data-image-id="0*EZ0R8kM3OwBS_GGd" data-width="657" data-height="460" />
</figure>

Once you have verified and confirmed the information on screen, pay close attention to the gas fee available to you, and when you’re ready, press next.

<figure id="f3fb" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*xlLqBkuWalqGvi8S" class="graf-image" data-image-id="0*xlLqBkuWalqGvi8S" data-width="658" data-height="213" />
</figure>

We find ourselves where we were before! It is time to send our native ALPH to get escorted over to the Ethereum blockchain. When you’re ready, press “Transfer” and a pop-up will appear.

<figure id="c7af" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*Qu-0BX4mTscaIKmz" class="graf-image" data-image-id="0*Qu-0BX4mTscaIKmz" data-width="439" data-height="284" />
</figure>

Once you have confirmed all is correct, proceed to confirm and sign the transaction through your Extension Wallet.

<figure id="4b50" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*2V87rtCt5jmjkh3D" class="graf-image" data-image-id="0*2V87rtCt5jmjkh3D" data-width="650" data-height="297" />
</figure>

We are almost there! Now we need to wait until our transaction reaches at least 205 confirmations **and at least 55 minutes** on the Alephium side of the bridge.

Keep in mind that if your wallet locks itself, you can always recover the transaction using the txid presented to you!

*You can even track your confirmations by clicking on the “View on Explorer” button. Or simply recover your txid.*

<figure id="eac1" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*qrFXwjuP_GN88LwC" class="graf-image" data-image-id="0*qrFXwjuP_GN88LwC" data-width="876" data-height="527" />
</figure>

So, you’ve waited for all the required conditions to be met. Now what? Easy! Head over to the redeem page on the bridge website, make sure that Alephium is set as your source chain and paste the txid of your transaction in the empty field to recover your transaction.

<figure id="c752" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*Zr0ajl-GMczF1Kze" class="graf-image" data-image-id="0*Zr0ajl-GMczF1Kze" data-width="660" data-height="307" />
</figure>

Once you are ready, press the Recover button!

<figure id="36be" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*S1LtYusrUjG556GN" class="graf-image" data-image-id="0*S1LtYusrUjG556GN" data-width="682" data-height="561" />
</figure>

And Boom! We are so back! Connect your Ethereum wallet in our case Metamask and press Redeem!

A pop-up will appear where you will need to confirm the transaction which involves a gas fee on Ethereum.

<figure id="3e36" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*lihhbDtqOcXzDINs" class="graf-image" data-image-id="0*lihhbDtqOcXzDINs" data-width="662" data-height="185" />
</figure>

Once the transaction is confirmed, your tokens should appear in your Metamask wallet.

**If, for some reason, they do not, don’t panic. You can import the Alephium ERC-20 token using the contract address provided to you right here below!**

> WALPH Contract Address : 0x590F820444fA3638e022776752c5eEF34E2F89A6

We hope this tutorial was of use to you, for more information consider referring to the official medium article detailing all contracts and addresses right <a href="https://medium.com/@alephium/verification-of-bridge-contracts-tokens-token-lists-76e5c237bf52" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/verification-of-bridge-contracts-tokens-token-lists-76e5c237bf52" target="_blank">here</a>

If you bridged some ERC-20 tokens and you don’t know what to do? Here is a list of things you can try out:

**Experience the first alephium DEX:** <a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVAwOTRqcl9QNWkwR25iZXIzWlRPNnNWVW5GZ3xBQ3Jtc0trdFdQV1ZDV21hUE9ZSWhfd3hEYUhNdkdBZTU4NmVXTWh4T1hfZ2hxUFM2QXVWbjU3cHNBanotSG03TEcyd2NwcVNlU0NHM3E5MU5tSDl2Y3NodWFYQzlVNTU5VmJ6MTVNOEJZQVZlNWYtV0V3dEdnMA&amp;q=https%3A%2F%2Fwww.ayin.app%2F&amp;v=xoYVzbwBAjg" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbVAwOTRqcl9QNWkwR25iZXIzWlRPNnNWVW5GZ3xBQ3Jtc0trdFdQV1ZDV21hUE9ZSWhfd3hEYUhNdkdBZTU4NmVXTWh4T1hfZ2hxUFM2QXVWbjU3cHNBanotSG03TEcyd2NwcVNlU0NHM3E5MU5tSDl2Y3NodWFYQzlVNTU5VmJ6MTVNOEJZQVZlNWYtV0V3dEdnMA&amp;q=https%3A%2F%2Fwww.ayin.app%2F&amp;v=xoYVzbwBAjg" rel="nofollow noopener noopener noopener noopener noopener" target="_blank"><strong>https://www.ayin.app/</strong></a>**  
Snatch some NFTs from Deadrare:** <a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbG1zMDFTWVV1bklCdHZnVGM2eFI5aEdtMFQyd3xBQ3Jtc0trOFp5aHpMdjMxb1U0Ny1oOS1ZTHo0Zl85aUE4NlhIUzhGV2lfaGpIV3hxMjZWdjA1cVdVazQwcC1TTmtuTFhqQWs4bnJEc0VKVmFXZDV2ZWNqM2dpTHNyZ3RTRDYzaWsxX0FyRExpUUg0aENybVFVVQ&amp;q=https%3A%2F%2Fdeadrare.io%2F&amp;v=xoYVzbwBAjg" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqbG1zMDFTWVV1bklCdHZnVGM2eFI5aEdtMFQyd3xBQ3Jtc0trOFp5aHpMdjMxb1U0Ny1oOS1ZTHo0Zl85aUE4NlhIUzhGV2lfaGpIV3hxMjZWdjA1cVdVazQwcC1TTmtuTFhqQWs4bnJEc0VKVmFXZDV2ZWNqM2dpTHNyZ3RTRDYzaWsxX0FyRExpUUg0aENybVFVVQ&amp;q=https%3A%2F%2Fdeadrare.io%2F&amp;v=xoYVzbwBAjg" rel="nofollow noopener noopener noopener noopener noopener" target="_blank"><strong>https://deadrare.io/</strong></a>**  
Try your luck over at walph.io:** <a href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa25yeWc0NVBzdWNCaUxUWTVaUFFpejRhZnVkQXxBQ3Jtc0ttMlJCOGxMNVhfS3Rsbk9BR3l2RXNDZFNwTlBWeGlpX0JSWFk1bUg3aFVNRGU1UEpmYkw0UXNjMy1TTlhoTEdNaXIzQWtIb01uZmFrb3pwbi0yV2M3YURiUG5pRzBLMFVsUjl6QkZ5eWowUHFPSlpoSQ&amp;q=https%3A%2F%2Fwalph.io%2F&amp;v=xoYVzbwBAjg" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/redirect?event=video_description&amp;redir_token=QUFFLUhqa25yeWc0NVBzdWNCaUxUWTVaUFFpejRhZnVkQXxBQ3Jtc0ttMlJCOGxMNVhfS3Rsbk9BR3l2RXNDZFNwTlBWeGlpX0JSWFk1bUg3aFVNRGU1UEpmYkw0UXNjMy1TTlhoTEdNaXIzQWtIb01uZmFrb3pwbi0yV2M3YURiUG5pRzBLMFVsUjl6QkZ5eWowUHFPSlpoSQ&amp;q=https%3A%2F%2Fwalph.io%2F&amp;v=xoYVzbwBAjg" rel="nofollow noopener noopener noopener noopener noopener" target="_blank"><strong>https://walph.io/</strong></a>

</div>

</div>

</div>

<div id="1ab2" class="section section section--body section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

As always, let us know on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener ugc nofollow noopener" target="_blank">Twitter</a>, <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener ugc nofollow noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener ugc nofollow noopener" target="_blank">Telegram</a> or <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener ugc nofollow noopener" target="_blank">Reddit</a> if you have any questions!

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [November 23, 2023](https://medium.com/p/28e7b92b339a).

<a href="https://medium.com/@alephium/alephiumalephium-bridge-the-tutorial-28e7b92b339a" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
