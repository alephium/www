---
title: BlockFlow
---

### Sharding

1. Addresses are randomly divided into `G` groups
2. Transactions are divided into `G x G` shards based on the input and output addresses
3. `G x G` chains in total

- Transactions from address group `B` to address group `A` are committed to shard `(B, A)`
- For address group `B`, one only needs to download the transaction data of `2G - 1` shards related to itself: namely `(X,B)` and `(B,Y)`, where `X, Y ∈ G`
- The amount of data that a single node needs to save is reduced from `G2` to `2G-1`

### Consensus

#### Fork Choice Rule: Dependency Data Structure

- Each block selects several block hashes as dependencies
- Transitively, each new block determines a unique fork for each shard

#### Finality Algorithm

- Miners find best dependencies and pack valid transactions
- Nodes validate dependencies and transactions
- BlockFlow is agnostic to finality algorithm, Alephium is currently using PoLW
