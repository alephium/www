---
title: July 25, 2025 - Mining Difficulty Penalty Incident Postmortem
description: TL;DR Something went wrong. Allow us to explain.
seoDescription: On the afternoon of July 25, 2025, the Alephium network
  experienced a sustained increase in difficulty, which slowed block production
  and created the appearance of a hashrate spike, even though the actual
  hashrate remained unchanged.
date: 2025-08-15T12:00:00.000Z
spotlight: true
featuredImage: mining1.webp
---
## Summary (TL;DR)

On the afternoon of July 25, 2025, the Alephium network experienced a sustained increase in difficulty, which slowed block production and created the appearance of a hashrate spike, even though the actual hashrate remained unchanged.

This was caused by a combination of events:

• A mining pool ceased its Alephium mining activity, increasing hashrate concentration across the remaining pools.

• At the same time, another pool was directing its entire hashrate to a random chain, then rapidly hopping from chain to chain.

This chain-hopping behavior created large imbalances between chains and triggered the most aggressive response of the Difficulty Adjustment Algorithm (DAA)’s penalty mechanism, which is designed to make mining strategies like chain hopping less profitable.

Thanks to the mining pools’ swift action, readiness to adapt, and the strong cooperation of node operators and the wider community, the issue was resolved within 24 hours without an urgent network upgrade, with the network remaining secure, all transactions processed, and greater resilience going forward.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NzbKtJ4VmsYsM99kjBx_xA.jpeg "Reported network hashrate estimate")

Reported Network Hashrate Estimate

## Root Cause

Alephium’s DAA (Difficulty Adjustment Algorithm) adjusts difficulty based on network hashrate to keep block times close to the target value. It also includes a penalty mechanism to encourage miners distribute hashrate evenly across all 16 chains, removing financial incentives of behaviors like:

* Single-chain mining: pointing all hashrate to one chain.
* Chain-hopping: moving all hashrate from chain to chain to target whichever currently has the lowest difficulty.

On July 25, two factors coincided:

1. Hashrate concentration increased. When a mining pool stopped mining Alephium, its share of the hashrate disappeared, leaving the remaining pools with a larger proportion of the total.
2. Chain-hopping behavior amplified. Another pool was directing its entire hashrate to a random chain periodically, then rapidly switching to the next chain. This created constant imbalances across chains.

The DAA detected these imbalances and applied strong penalties to keep all chains in sync. These penalties increased the difficulty across the network far above normal levels.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KNgUPP-AF4DY7U1tszBDVA.png "Reported network hashrate estimate")

Reported Network Hashrate Estimate

## Why this looked like a hashrate spike:

Displayed hashrate on explorers is calculated based on Difficulty and Target Block Time, where target block time is fixed. During the incident, the higher difficulty caused block times to slow down, but this was not reflected in the formula. As a result, the displayed hashrate appeared much higher than reality, even though the actual hashrate (the total computing power on the network) didn’t change. In short, the network hashrate did not suddenly increase, it only looked that way because of how the displayed hashrate is calculated. The displayed hashrate increased because difficulty went up; the target block time is fixed in the formula.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*e7XiP_Pjy55zE7JGdlhNRA.png "Total reported hashrates per second")

Reported Total Transactions Per Second

## Timeline

* 1:00 p.m. CET (Jul 25): Network difficulty slowly begins to rise.
* 3:00–5:00 p.m. CET (Jul 25): Difficulty and displayed hashrate reach record highs. Block times lengthen noticeably. Investigation begins.
* 9:00 p.m. CET (Jul 25): Initial conclusion: the DAA is responsible for the difficulty spike and slower block production. The exact trigger for the DAA’s strongest penalty is still unknown. Community informed and preparation for a potential urgent upgrade begins.
* 1:00 a.m. CET (Jul 26): Further analysis reveals the trigger: increased hashrate concentration combined with one pool’s chain-hopping behavior, pointing all its hashrate to the chain with the lowest difficulty, then quickly switching to the next. Upgrade release put on hold while contacting the pool to request a change in strategy.
* 3:00 a.m. CET (Jul 26): Pool responds and adjusts its hashrate distribution immediately.
* 5:00 a.m. CET (Jul 26): Network difficulty has been steadily decreasing since around 3:00 a.m. Monitoring continues to ensure recovery remains on track.
* 12:00 p.m. CET (Jul 26): Difficulty reduced from over 25× the baseline to \~5×. Block times improve from a peak of \~2.5 minutes to ~60 seconds.
* 6:00 p.m. CET (Jul 26): Situation resolved. Difficulty and block times are back to normal (~8 seconds per block). No urgent upgrade required; network stable.

## Outcome

* This event had no impact on funds, finality, or network security
* Relevant mining pools adjusted their distribution algorithm to avoid overloading individual chains.
* Average block times returned to normal, improving stability and user experience.
* Miner profitability improved with more consistent block production.
* The network is now operating more smoothly than before the incident.

This resolution was only possible thanks to the mining pools’ swift action and readiness to adapt, and the cooperation of node operators across the network.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*l_8GD4eqG7-Ndl1kA6x8CQ.png "Reported block time")

Reported Block Time

## Impact

* Security: Never compromised, the network remained fully operational and all transactions were processed.
* Performance: Block times peaked at \~2.5 minutes during the height of the incident (normal is \~8 seconds).
* Resolution: Achieved through cooperation with mining pools; no urgent network upgrade was required.

Lessons Learned

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TmEe0ybTUHYwmeSIwW7WHw.png)

## Next Steps

Continue monitoring miner distribution and network metrics in the coming weeks.

Evaluate whether a more moderate penalty setting could prevent similar disruptions in edge cases.

Implement refinements to the DAA in a future planned upgrade.

## Conclusion

**July 25–26 was a powerful reminder of what we are building and who we are building it with.**

This resolution was only possible because of the mining pools’ quick thinking and willingness to adapt, combined with the dedication of developers, node operators, and an engaged community that stayed informed, supportive, and ready to act. The incident was contained and resolved within 24 hours. The network remained secure throughout, all transactions were processed, and block production quickly returned to the normal ~8 second cadence.

Mining pools now have a clearer understanding of how the DAA works and have adjusted their strategies for more balanced hashrate distribution, improving network performance compared to before the incident. As one community member put it:

*“Difficulties will arise when you are pushing the limits of blockchain technology. What matters is how they are handled.”*

To our community, thank you for being the backbone of Alephium. From developers and miners to node operators and every member who offered their support, your swift action and collaboration turned a potential crisis into a moment of growth. This outcome reflects the strength of our ecosystem and our shared commitment to keeping the network resilient and efficient.

Yours, Alephium Team
