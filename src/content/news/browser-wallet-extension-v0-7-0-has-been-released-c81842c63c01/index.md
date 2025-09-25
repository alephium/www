---
date: 2023-05-16T14:57:00.483000Z
description: "Alephium Browser Wallet Extension v0.7.0 released featuring Ledger integration, providing enhanced security and hardware wallet support for users."
seoDescription: "Alephium Browser Wallet Extension v0.7.0 release - Ledger integration feature. Enhanced security with hardware wallet support for browser extension."
spotlight: false
featuredImage: image_6170abf307.png
title: Browser Wallet Extension v0.7.0 has been released
---

Featuring: Ledger Integration

> UPDATE: Alephium has an official integration with Ledger! you can find all details [here](/news/post/alephium-available-on-ledger-hardware-wallets-27fa77f928ab)

> UPDATE 2: If you are a Ledger Nano S owner, the installation process is detailed [here](https://medium.com/p/7a86570f4089/edit).

---

🚨 _Important information: The Alephium App for Ledger Devices is a custom/community App developed by Alephium. It is not available on Ledger Live (yet!). It requires you to download other software on your computer and has several manual technical steps. Proceed only if you are sure that you understand how to perform this operation!_

🚨 _Since this is an early Alpha version, it is advisable to use a new/fresh ledger with no other coins managed on it._

🚨 _The Ledger app only works with the latest version (v0.7.0) of the extension wallet for now._

## 1. Download the new wallet release

From: Chrome — [Extension Wallet](https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj) / Firefox — [Extension Wallet](https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/)

## 2.Install the necessary software

If you already have PIP & Python installed, jump to step 3.

You will need Python and PIP installed on your computer to get the Alephium App on your Ledger:

- Python ([how to for Windows](https://www.simplilearn.com/tutorials/python-tutorial/python-installation-on-windows#:~:text=To%20download%20Python%2C%20you%20need,then%20select%20the%20Windows%20option.), [how to for Mac](https://docs.python.org/3/using/mac.html), [how to for Linux](https://docs.python-guide.org/starting/install3/linux/))
- PIP ([how to for Windows](https://www.dataquest.io/blog/install-pip-windows/), [how to for Mac](https://www.groovypost.com/howto/install-pip-on-a-mac/), [how to for Linux](https://docs.python-guide.org/starting/install3/linux/))

## 3. Install the Ledger Python Library

![](image_db53d15aaa.png)

We are going to use the Ledger Python Library (you can find it [here](https://github.com/LedgerHQ/ledgerctl#quick-install)). It is necessary because you are going to install a custom App onto your Ledger Device.

To install the Ledger Python Library just open a terminal window and type the following:

> **_pip3 install — — upgrade protobuf setuptools ecdsa  
> pip3 install ledgerwallet_**

This will make all upgrades and install the Ledger Wallet Library that will be needed for the next step.

![](image_7889d7e170.gif)

## 4. Download the Alephium Ledger App to your computer

Go to the following GitHub repository: [https://github.com/alephium/ledger-alephium](https://github.com/alephium/ledger-alephium/tree/master/release) and download it.

_🚨 To download the repository, click on the “Code” green button and choose “Download Zip.”_

![](image_66daf415fe.png)

Download and unzip it in a folder you have easy access to and all read/write permissions.

## 5. Install the Alephium App on your Ledger Device

Your Ledger now needs to be connected to your computer and unlocked.

Go to the GitHub repository ([https://github.com/alephium/ledger-alephium/tree/master](https://github.com/alephium/ledger-alephium/tree/master)) and scroll down to find the command that applies to your Ledger version:

![](image_8fb9cb3848.png)

With this information, go to the console terminal and run the command to install the Alephium App:

🚨 _Important information: You need to run the command inside the folder you downloaded the files from GitHub._

In this example, the **Ledger Nano S** is being used:

![](image_37de619c27.png)

After running this command you will need to validate the installation of the Alephium App in your Ledger Device. Go through all approvals and add your pin to validate the installation.

When successful, the Alephium icon will appear on your device.

![](image_70920c6c77.jpeg)

Now you are ready to use your Ledger to sign transactions on Alephium! **🎉**

## 6. Use your Ledger with the Extension Wallet

Go to the browser where you installed the browser extension wallet, and open it.

🚨 _The Ledger app only works with the latest version (v0.7.0) of the extension wallet for now. If you don’t have it, you can install it from_ [here](https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj/related)_._

Create a new address in your extension wallet: Click on the current address name, and then in the “+” icon. That will lead you to Ledger Connection page:

- Plug in your Ledger and unlocked it;
- Open the Alephium App (make sure you validated all steps!)
- Select your Ledger device from the list;
- Finish the configuration.

![](image_6745633ac7.gif)

## 7. Use the Ledger Device to send a transaction!

All the steps here are the usual ones we have seen before using the extension wallet:

- Click on the “Send” button

![](image_1ba06f9e03.png)

Choose the token you want to send:

![](image_44a2eea264.png)

Select the recipient’s address:

![](image_44de2c3e11.png)

Review the transaction details and click on “Sign with Ledger.”

![](image_0ff69252be.png)

Sign the transaction in your Ledger Device, and follow its completion in “Activity” section:

![](image_e61f266056.png)

## 8. Use the Ledger Device to interact with dApps in Alephium

Now that you have a already sign a transaction with yout Ledger Device, it is time to connect it to a dApp. This process is also straightforward.

Access the [Alephium DEX on Testnet](https://alephium.github.io/alephium-dex). Click in the “Connect Alephium” button on the top right. Select the extension wallet in the prompt and the Ledger account.

![](image_44f65e2601.gif)

Now you are connected to the Alephium DEX. Make a swap transaction and use your Ledger to sign it. The process is similar to a transfer.

![](image_875b72a3ef.gif)

If you have questions or suggestions, please come to Alephium’s [Discord](/discord), [Telegram](https://t.me/alephiumgroup), or reach out on [Twitter](https://twitter.com/alephium)!
