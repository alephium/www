---
date: 2024-10-23 08:26:59.371000+00:00
description: How to install the Alephium App in your Ledger Nano S
featuredImage: image_d671f79853.jpeg
title: Alephium 🤝 Ledger Nano S
---

### Alephium 🤝 Ledger Nano S

#### How to install the Alephium App in your Ledger Nano S

![](image_d671f79853.jpeg)

**_🚨 This tutorial is exclusively for the Nano S._** _If you have a Ledger version that is NOT the Nano S, (S+, X, Flex or Stax) you must use the Ledger Live to download the Alephium app, please follow the (much easier) instructions_ <a href="https://docs.alephium.org/wallet/ledger/" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/wallet/ledger/" rel="noopener noreferrer nofollow noopener" target="_blank"><em>here.</em></a>

**_🚨We encourage you to migrate to a more recent device, as Ledger is not actively supporting anything related to the Nano S anymore!_**

⚠️ _Important information: This sideloading method requires downloading other software on your computer and has several manual technical steps. Proceed only if you are sure that you understand how to perform this operation!_

#### Installation instructions for Ledger Nano S

**1–Download the latest release from:** <a href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj" class="markup--anchor markup--p-anchor" data-href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj" rel="noopener noreferrer nofollow noopener" target="_blank"><strong>Chrome</strong></a> **/**<a href="https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/" class="markup--anchor markup--p-anchor" data-href="https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet/" rel="noopener noreferrer nofollow noopener" target="_blank"><strong>Firefox</strong></a>

**2 — Install the necessary software (if you already have PIP & Python installed, jump to step 3)**

You will need Python and PIP installed on your computer to get the Alephium App on your Ledger:

- <span id="7097">Python (<a href="https://www.simplilearn.com/tutorials/python-tutorial/python-installation-on-windows#:~:text=To%20download%20Python%2C%20you%20need,then%20select%20the%20Windows%20option." class="markup--anchor markup--li-anchor" data-href="https://www.simplilearn.com/tutorials/python-tutorial/python-installation-on-windows#:~:text=To%20download%20Python%2C%20you%20need,then%20select%20the%20Windows%20option." rel="noopener ugc nofollow noopener" target="_blank">how to for Windows</a>, <a href="https://docs.python.org/3/using/mac.html" class="markup--anchor markup--li-anchor" data-href="https://docs.python.org/3/using/mac.html" rel="noopener ugc nofollow noopener" target="_blank">how to for Mac</a>, <a href="https://docs.python-guide.org/starting/install3/linux/" class="markup--anchor markup--li-anchor" data-href="https://docs.python-guide.org/starting/install3/linux/" rel="noopener ugc nofollow noopener" target="_blank">how to for Linux</a>)</span>
- <span id="ccce">PIP (<a href="https://www.dataquest.io/blog/install-pip-windows/" class="markup--anchor markup--li-anchor" data-href="https://www.dataquest.io/blog/install-pip-windows/" rel="noopener ugc nofollow noopener" target="_blank">how to for Windows</a>, <a href="https://www.groovypost.com/howto/install-pip-on-a-mac/" class="markup--anchor markup--li-anchor" data-href="https://www.groovypost.com/howto/install-pip-on-a-mac/" rel="noopener ugc nofollow noopener" target="_blank">how to for Mac</a>, <a href="https://docs.python-guide.org/starting/install3/linux/" class="markup--anchor markup--li-anchor" data-href="https://docs.python-guide.org/starting/install3/linux/" rel="noopener ugc nofollow noopener" target="_blank">how to for Linux</a>)</span>

**3 — Install the Ledger Python Library**

![](image_d29ddc05e2.png)

We are going to use the Ledger Python Library (you can find it <a href="https://github.com/LedgerHQ/ledgerctl#quick-install" class="markup--anchor markup--p-anchor" data-href="https://github.com/LedgerHQ/ledgerctl#quick-install" rel="noopener ugc nofollow noopener" target="_blank">here</a>). It is necessary because you are going to install a custom App onto your Ledger Device.

To install the Ledger Python Library open a terminal window and type the following:

> **_pip3 install — — upgrade protobuf setuptools ecdsa  
> pip3 install ledgerwallet_**

This will make all upgrades and install the Ledger Wallet Library needed for the next step.

![](image_801f85d3ae.gif)

**4 — Download the Alephium Ledger App to your computer**

Go to the following GitHub repository: <a href="https://github.com/alephium/ledger-alephium/tree/master/release" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/ledger-alephium/tree/master/release" rel="noopener ugc nofollow noopener" target="_blank">https://github.com/alephium/ledger-alephium</a> and download it.

_🚨To download the repository, click on the “Code” green button and choose “Download Zip.”_

![](image_75fe7c00c6.png)

Download and unzip it in a folder you have easy access to and all read/write permissions.

**5 — Install the Alephium App on your Ledger Device**

Your Ledger now needs to be connected to your computer and unlocked.

Go to the GitHub repository (<a href="https://github.com/alephium/ledger-alephium/tree/master" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/ledger-alephium/tree/master" rel="noopener ugc nofollow noopener" target="_blank">https://github.com/alephium/ledger-alephium/tree/master</a>) and scroll down to find the command that applies to your Ledger version:

![](image_0a6b8efd88.png)

With this information, go to the console terminal and run the command to install the Alephium App:

🚨 _Important information: You need to run the command inside the folder you downloaded the files from GitHub._

After running this command, you must validate the Alephium App installation on your Ledger Device. Go through all approvals and add your PIN to validate the installation.

When successful, the Alephium icon will appear on your device.

![](image_d671f79853.jpeg)

Now, you are ready to use your Ledger to sign transactions on Alephium! **🎉**

**6 — Use your Ledger with the Extension Wallet**

Go to the browser where you installed the browser extension wallet, and open it.

🚨 _The Ledger app only works with the latest version of the extension wallet for now. If you don’t have it, you can install it from_ <a href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj/related" class="markup--anchor markup--p-anchor" data-href="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj/related" rel="noopener ugc nofollow noopener" target="_blank"><em>here</em></a>_._

Create a new address in your extension wallet: Click on the current address name, and then in the “+” icon. That will lead you to Ledger Connection page:

- <span id="3587">Plug in your Ledger and unlocked it;</span>
- <span id="31b6">Open the Alephium App (make sure you validated all steps!)</span>
- <span id="6885">Select your Ledger device from the list;</span>
- <span id="d7d6">Finish the configuration.</span>

![](image_032242fc0c.gif)

**If you want to see in more details on how to send transactions, use dapps or do more complex tasks, you’ll find everything in the ledger docs** <a href="https://docs.alephium.org/wallet/ledger/#view-account-balance" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/wallet/ledger/#view-account-balance" rel="noopener noreferrer nofollow noopener" target="_blank">here</a> **&** <a href="https://support.ledger.com/article/Alephium-ALPH" class="markup--anchor markup--p-anchor" data-href="https://support.ledger.com/article/Alephium-ALPH" rel="noopener noreferrer nofollow noopener" target="_blank">here</a>**.**

If you have questions or suggestions, please come to Alephium’s <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener ugc nofollow noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener ugc nofollow noopener" target="_blank">Telegram</a>, or reach out on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener ugc nofollow noopener" target="_blank">Twitter</a>!
