---
title: How the Attacker's wALPH Was Burned
description: Guardians executed a targeted contract upgrade to permanently burn
  the attacker’s unbacked wALPH. Read the full bridge incident remediation
  details.
seoDescription: Detailing the authorized remediation to burn an attacker’s
  unbacked wALPH via bridge governance, alongside the security of Alephium's
  native assets.
date: 2026-06-08T14:00:00.000Z
spotlight: true
featuredImage: screenshot-2569-06-04-at-19.47.57.png
---
**This report was also posted as a thread on X, which [you can read and engage with here](https://x.com/alephium/status/2062533440923140592).**

- - -

*“As part of the bridge incident remediation, the bridge guardians, with support from our security partners, executed an authorized recovery procedure to invalidate the unbacked wrapped ALPH held in the attacker's wallet.”*

The Bridge Guardians coordinated through the bridge’s multi-signature governance mechanism to temporarily upgrade the bridge’s wrapped asset contract implementation. 

This temporary implementation introduced functionality that allowed the attacker-controlled unbacked wALPH to be permanently burned. Immediately after execution of the burn, the contract was reverted to its original implementation.

This action required approval from the full Guardian set, which is why the process took several days to organize and execute. Note that the guardians are separate and independent from each other.

Alephium’s bridge wrapped asset contracts, like those used by many cross-chain bridge systems, are deployed behind upgradeable proxy contracts. This architecture allows contract implementations to be modified through Guardian-approved governance actions when required.

It is important to note that the burn capability used in this remediation did not exist in the bridge’s normal operating implementation. It was introduced through a temporary governance-approved upgrade specifically to remediate the unbacked supply created by the exploit and was rolled back once the action was completed.

*This approach has precedent in previous DeFi security incidents.*

Following the pxETH exploit involving Yearn Finance, unbacked tokens were invalidated by the token issuer directly from the attacker's wallet.

After the Echo Protocol incident, attacker-controlled eBTC was burned once administrative control had been recovered.

The tokens burned in our case were exclusively the unbacked wALPH that remained in the attacker’s wallet at the time of the action. Any wALPH that had already left the attacker’s wallet prior to the burn was not affected. 

The recovery action was intentionally limited to assets that remained under the attacker’s direct control and did not affect third-party holders who acquired wALPH through ordinary market activity without involvement in the exploit.

The action had no effect on assets held by legitimate users and did not affect any assets on the Alephium Layer 1 blockchain.

The bridge itself remains disabled while remediation, review, and security assessment work continue.

## On Decentralization and Immutability

Governance actions and decentralization are often discussed as though they are incompatible concepts, when in reality, decentralization and immutability are distinct properties.

A decentralized system can still change state when the relevant participants reach the required level of consensus. The defining question is not whether a change is possible, but who is authorized to approve that change and what consensus threshold must be met.

Bitcoin, Ethereum, Alephium, and other decentralized networks have all coordinated protocol changes throughout their histories. 

Network upgrades, hard forks, and governance actions are all examples of decentralized participants collectively agreeing to modify a system’s state or rules.

The Ethereum DAO fork is perhaps the most widely known example of a highly decentralized network coordinating a state change in response to an exploit. The Ethereum community reached consensus around a protocol change that effectively invalidated the outcome of the attack and restored the affected funds.

The same principle applies here. 

The action was not the result of a unilateral administrative decision. The Bridge Guardians collectively approved a temporary upgrade that enabled the unbacked wALPH remaining in the attacker’s wallet to be burned. Approval from the full Guardian set was required.

The bridge governance model differs from that of a Layer 1 blockchain and relies on a substantially smaller guardian set. This governance structure is similar to that used by many cross-chain bridge systems, where upgrades require approval from the designated guardians or validators responsible for securing the bridge.

## Smart Contract Assets and Native Assets

This remediation action also highlights an important architectural distinction between smart contract-managed assets and native protocol assets.

The remediation action described above was possible because wALPH exists as a smart contract-managed asset on Ethereum. Like most assets on Ethereum, ownership and balances are ultimately defined by contract state rather than by the Ethereum protocol itself.

Depending on how a token is designed, contract administrators may have the ability to freeze assets, blacklist addresses, destroy tokens, upgrade contract logic, or introduce new functionality through governance processes. 

In some cases, these capabilities are built into the contract from the outset, while in others, they can be introduced through an upgrade if the contract architecture permits it. 

Well-known examples include centralized stablecoins such as USDT, where issuers maintain the ability to freeze or blacklist addresses under certain circumstances.

The governance requirements for such actions vary significantly. Some systems require broad multi-party consensus, while others can be controlled by a much smaller set of administrators. 

The bridge remediation described in this report required approval from the full Guardian set before the temporary upgrade could be executed.

Native Alephium assets operate differently. 

ALPH and all native Alephium-issued tokens are first-class protocol assets recorded directly by the blockchain's UTXO model rather than balances maintained by a smart contract. 

As a result, their ownership cannot be modified through a contract upgrade, administrative function, or by changing or removing the code that originally issued them.

Achieving an equivalent outcome for a native Alephium asset would require a protocol-level network upgrade with broad ecosystem consensus, rather than a change to an individual application or contract.

This architectural distinction is one of the key differences between Alephium's asset model and the asset model used by EVM-based chains.

As native Alephium assets are first-class protocol objects rather than balances managed by application-level contracts, they deliver significantly stronger guarantees that ownership and transfer rules cannot be altered at the application level. This substantially reduces this category of governance and smart contract risk.

Alephium supports both models. Developers can issue native first-class assets directly at the protocol level, or create smart contract-managed assets when additional functionality, programmability, or administrative controls are required by the application.

The investigation and remediation process remains ongoing. Further updates will follow.

Thank you for your support.
