---
date: 2023-11-20T14:25:39.181000Z
description: 'Note: This article was edited on Nov 20th, 2024 — Adding information
  regarding Binance Smart Chain contracts'
spotlight: false
featuredImage: image_699016be4c.jpg
title: Verification of bridge contracts, tokens &amp; token lists
---

> Note: This article was edited on Nov 20th, 2024 — Adding information regarding Binance Smart Chain contracts

_As we’ve welcomed new users with the bridge, here’s a post so you can verify what you are interacting with._

_You’ll find the smart contract’s addresses on either side of the bridge, the token lists we use for registration & frontend interaction, trading pairs on exchanges (and the DEX pools!), and the official wallets links._

---

### **Bridge contracts**

#### **Ethereum**

This is the Wormhole bridge contracts architecture on the eth side. This will allow you to know the official address of all the contracts, so you can be aware of fake contracts.

**BridgeImplementation **— [https://etherscan.io/address/0x0F843945075DF4EA9C8a21f0e0CcFD5eB073eEAb#contracts](https://etherscan.io/address/0x0F843945075DF4EA9C8a21f0e0CcFD5eB073eEAb#contracts)

**TokenBridge **— [https://etherscan.io/address/0x579a3bDE631c3d8068CbFE3dc45B0F14EC18dD43#code](https://etherscan.io/address/0x579a3bDE631c3d8068CbFE3dc45B0F14EC18dD43#code)

**TokenImplementation** — [https://etherscan.io/address/0xdeb8c2C57c7de48D3Ad5a980be3DD23868262b6A#code](https://etherscan.io/address/0xdeb8c2C57c7de48D3Ad5a980be3DD23868262b6A#code)

**Wormhole (governance)** — [https://etherscan.io/address/0x01e82b67367dE9f805E55de730D5007a752912A8#code](https://etherscan.io/address/0x01e82b67367dE9f805E55de730D5007a752912A8#code)

#### **Alephium**

And these are the contracts on Alephium’s side:

TokenBridge — [https://explorer.alephium.org/addresses/23Fj7xr1pxWfYLixz3aBC3u5dUJVpAjXArbpiYWxeGjQT](https://explorer.alephium.org/addresses/23Fj7xr1pxWfYLixz3aBC3u5dUJVpAjXArbpiYWxeGjQT)

GovernanceContract — [https://explorer.alephium.org/addresses/uvVP76UfwQ1fmPTZWojUGYY2tKyuKe7Br76KDecfMbjM](https://explorer.alephium.org/addresses/uvVP76UfwQ1fmPTZWojUGYY2tKyuKe7Br76KDecfMbjM)

#### **Binance Smart Chain**

The Wormhole Bridge Addresses on BSC are

GovernanceContract — 0xE674e61111ecE5988113DA56f0b2Cc3CB22D5304 / Check it on BSCscan [here](https://bscscan.com/address/0xE674e61111ecE5988113DA56f0b2Cc3CB22D5304).

TokenBridge — 0x2971F580C34d3D584e0342741c6a622f69424dD8 / Check it on BSCscan [here](https://bscscan.com/address/0x2971F580C34d3D584e0342741c6a622f69424dD8).

### **Tokens**

First, here’s the wrapped ALPH token contract:

On the **Ethereum** side -

[Alephium (AlphBridge) (ALPH) Token Tracker | Etherscan
Alephium (AlphBridge) (ALPH) Token Tracker on Etherscan shows the price of the Token $1.37, total supply…etherscan.io](https://etherscan.io/token/0x590F820444fA3638e022776752c5eEF34E2F89A6#code)[](https://etherscan.io/token/0x590F820444fA3638e022776752c5eEF34E2F89A6#code)

On the **Binance Smart Chain** side — [https://bscscan.com/address/0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8](https://bscscan.com/address/0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8)

> _Side note — because non-native stable coins are not fungible, we’re introducing naming changes._ On Alephium, USDT & USDC bridged from BSC will be named respectively USDTbsc & USDCbsc. The same goes for Ethereum-bridged stables, which are renamed USDTeth & USDCeth. Before bridging for swapping purposes, please make sure there’s liquidity on the DEX for the token you’re bridging!

#### ETH tokens

And here are the wrapped assets contracts on the Alephium side — [USDT](https://explorer.alephium.org/addresses/zSRgc7goAYUgYsEBYdAzogyyeKv3ne3uvWb3VDtxnaEK)eth — [USDC](https://explorer.alephium.org/addresses/22Nb9JajRpAh9A2fWNgoKt867PA6zNyi541rtoraDfKXV) eth— [DAI](https://explorer.alephium.org/addresses/xoDuoek5V2T1dL2HWwvbHT1JEHjMjtJfJoUS2xKsjFg3) — [wETH](https://explorer.alephium.org/addresses/vP6XSUyjmgWCB2B9tD5Rqun56WJqDdExWnfwZVEqzhQb) — [wBTC](https://explorer.alephium.org/addresses/xUTp3RXGJ1fJpCGqsAY6GgyfRQ3WQ1MdcYR1SiwndAbR)

And here are the list of the ones than can be registered for bridging:

- On Alephium, the verified tokens appear as “verified” within all our wallets and can be bridged over to Ethereum through our UI: [https://github.com/alephium/token-list](https://github.com/alephium/token-list)
- On Ethereum, this is the 1inch token list we’re using for tokens that can be bridged to Alephium through the frontend provided by Alephium — [https://tokenlists.org/token-list?url=tokens.1inch.eth](https://tokenlists.org/token-list?url=tokens.1inch.eth)

#### BSC tokens

At launch, [$BNB](https://x.com/search?q=%24BNB&amp;src=cashtag_click), [$USDT](https://x.com/search?q=%24USDT&amp;src=cashtag_click), and [$USDC](https://x.com/search?q=%24USDC&amp;src=cashtag_click) will be bridgeable on Alephium’s front-end bridge UI. They will also appear as “verified” on Alephium’s family of wallets (desktop, mobile, and browser extension). If you want to bridge another token, you’ll need to register it. You can register all tokens on [this list](https://tokens.coingecko.com/binance-smart-chain/all.json).

### **Verified markets — DEXes**

#### **Alephium**

**ETH Tokens**

Here are the pairs you can trade on AYIN (and there are more), always check liquidity before choosing which asset to bridge!

\$ALPH — \$USDTeth

\$ALPH — \$USDCeth

\$ALPH — \$ETH

\$ALPH — \$wBTC

**BSC tokens**

At launch, there are pools on [@ayincoin](https://x.com/@ayincoin), [@CandySwapALPH](https://x.com/@CandySwapALPH), [@ElexiumFinance](https://x.com/@ElexiumFinance) ( [ALPH/BNB](https://explorer.alephium.org/addresses/zWgFBQP8UDivtStTpVbp7JL3JBxvJ5VLvpu1kQU1kUwZ) — [USDTeth/USDTbsc](https://explorer.alephium.org/addresses/uuJ2XQgoraiiUeiwmwfkzWhHYZE4ZmHzz2o25xFGBSBy) — [ALPH/USDTbsc](https://explorer.alephium.org/addresses/ubFr1VZmfc4zkRQJYm1Mx74mcHzLoDy1QLvxeA5JG9rX)) & [@alphswaps](https://x.com/@alphswaps) . Most of the DEXs will have pools at bridge’s launch or soon after.

#### ETH — wALPH at Uniswap

[https://app.uniswap.org/explore/tokens/ethereum/0x590f820444fa3638e022776752c5eef34e2f89a6](https://app.uniswap.org/explore/tokens/ethereum/0x590f820444fa3638e022776752c5eef34e2f89a6)

#### BSC — wALPH at PancakeSwap

wALPH/BNB — [https://pancakeswap.finance/?inputCurrency=0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8&amp;outputCurrency=BNB](https://pancakeswap.finance/?inputCurrency=0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8&amp;outputCurrency=BNB)

wALPH/USDT — [https://pancakeswap.finance/?inputCurrency=0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8&amp;outputCurrency=0x55d398326f99059fF775485246999027B3197955](https://pancakeswap.finance/?inputCurrency=0x8683BA2F8b0f69b2105f26f488bADe1d3AB4dec8&amp;outputCurrency=0x55d398326f99059fF775485246999027B3197955)

As a reminder, you can check on [Coingecko](https://www.coingecko.com/en/coins/alephium) all the exchanges that listed ALPH.

### **Wallets**

Desktop wallet — Mac, Windows, Linux — [https://github.com/alephium/desktop-wallet/releases/latest](https://github.com/alephium/desktop-wallet/releases/latest)

Mobile wallet — Android — [https://play.google.com/store/apps/details?id=org.alephium.wallet](https://play.google.com/store/apps/details?id=org.alephium.wallet)

Mobile wallet — iOS — [https://apps.apple.com/us/app/alephium-wallet/id6469043072](https://apps.apple.com/us/app/alephium-wallet/id6469043072)

Browser extension — Chrome — [https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj](https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj)

Browser extension — Firefox — [https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/](https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/)

3rd party mobile wallet — Sezame wallet [https://sezame.app/](https://sezame.app/)

3rd party mobile wallet — Sahhar wallet [https://play.google.com/store/apps/details?id=com.sahhar.sahhar_wallet&amp;hl=en&amp;gl=US](https://play.google.com/store/apps/details?id=com.sahhar.sahhar_wallet&amp;hl=en&amp;gl=US)

---

Be careful out there, it’s a wild world!

And now back to building.

As always, let us know on [Twitter](https://twitter.com/alephium), [Discord](/discord), [Telegram](https://t.me/alephiumgroup) or [Reddit](https://www.reddit.com/r/Alephium/) if you have any questions!
