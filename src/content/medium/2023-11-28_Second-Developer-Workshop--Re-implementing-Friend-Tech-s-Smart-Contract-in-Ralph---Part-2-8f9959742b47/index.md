---
title: "Second Developer Workshop: Re-implementing Friend.Tech’s Smart Contract in Ralph — Part 2"
date: "2023-11-28"
description: "Welcome to the second part of this dev workshop session! Please make sure you go through the first part (here) as part 2 starts where Part…"
---

<div>

# Second Developer Workshop: Re-implementing Friend.Tech’s Smart Contract in Ralph — Part 2

</div>

<div class="section p-summary" field="subtitle">

Welcome to the second part of this dev workshop session! Please make sure you go through the first part (here) as part 2 starts where Part…

</div>

<div class="section e-content" field="body">

<div id="25b0" class="section section section--body section--first section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### Second Developer Workshop: Re-implementing Friend.Tech’s Smart Contract in Ralph — Part 2

<figure id="ceec" class="graf graf--figure graf-after--h3">
<img src="https://cdn-images-1.medium.com/max/800/0*VJByfvJxVF2DWcD3" class="graf-image" data-image-id="0*VJByfvJxVF2DWcD3" data-width="1400" data-height="825" data-is-featured="true" />
</figure>

Welcome to the second part of this dev workshop session! Please make sure you go through the first part (<a href="https://medium.com/@alephium/second-developer-workshop-re-implementing-friend-techs-smart-contract-in-ralph-806e3f6551aa" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/second-developer-workshop-re-implementing-friend-techs-smart-contract-in-ralph-806e3f6551aa" target="_blank">here</a>) as part 2 starts where Part I ended.

### A small reminder of part 1

<a href="https://twitter.com/friendtech" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/friendtech" rel="noopener" target="_blank">Friend.tech</a> operates as a decentralized social token-driven platform <a href="https://decrypt.co/resources/what-is-friend-tech-the-social-token-driven-decentralized-social-network" class="markup--anchor markup--p-anchor" data-href="https://decrypt.co/resources/what-is-friend-tech-the-social-token-driven-decentralized-social-network" rel="noopener" target="_blank">launched in August 2023</a> on the Base blockchain. It allows its users to trade “keys”, formerly termed “shares”, associated with X (formerly Twitter) profiles. Owning these keys grants entry to exclusive chatrooms and special content from the respective X account holder.

The platform promotes itself by saying, “Trade with your friends in our marketplace.” Fans can buy and sell shares, with the price directly tied to the number of outstanding shares. This creates an opportunity for early supporters to profit as the individual’s fan base grows, and the protocol and subject also collect fees on each trade happening on the shares. It is an interesting experiment in the social token trend narrative.

<a href="https://medium.com/@alephium/second-developer-workshop-re-implementing-friend-techs-smart-contract-in-ralph-806e3f6551aa" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/second-developer-workshop-re-implementing-friend-techs-smart-contract-in-ralph-806e3f6551aa" target="_blank">In the previous session</a>, both the protocol fee and subject fee percentage were successfully implemented, along with the necessary functions to set them. Additionally, the ownership feature and a mechanism to maintain the balance of each holder for a subject was introduced, as well as tracking the total outstanding number of shares for that subject. Instead of relying on the mapping data structure like in Solidity, Ralph’s subcontracts were used to achieve this.

The “get price” function was also created, and it calculates the share price, considering both the protocol fee and subject fee. This function serves as the basis for determining buy and sell prices. This session focuses on implementing the buy and sell shares functions. If you haven’t done it yet, here is what you need to prepare your environment.

### Ralph Implementation

You can follow the full detailed workshop in the following video. Here’s the <a href="https://github.com/alephium/dev-workshop-02/blob/session-1/contracts/friend_tech.ral" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/dev-workshop-02/blob/session-1/contracts/friend_tech.ral" rel="noopener" target="_blank">full code</a> of the Ralph implementation and this article highlights the main steps for easier comprehension:

<figure id="5b5b" class="graf graf--figure graf--iframe graf-after--p">
<div class="iframe">
<div id="player">

</div>
<div class="player-unavailable">
<h1 id="ein-fehler-ist-aufgetreten." class="message">Ein Fehler ist aufgetreten.</h1>
<div class="submessage">
<a href="https://www.youtube.com/watch?v=Xgt3_HwoUOc" target="_blank">Sieh dir dieses Video auf www.youtube.com an</a> oder aktiviere JavaScript, falls es in deinem Browser deaktiviert sein sollte.
</div>
</div>
</div>
</figure>

### Recap: Subcontract Structure

In the previous session, three essential contracts were created. First is the “Friend.tech” contract, which is the primary contract. From there, by providing the subject’s address, a subcontract was generated, it is called “SubjectShare.” This contract tracks the total balance specific to the designated subject.

<figure id="8c3f" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/1*qVPuJfkdXuyicn0KwS-BXw.png" class="graf-image" data-image-id="1*qVPuJfkdXuyicn0KwS-BXw.png" data-width="417" data-height="502" />
</figure>

Subsequently, upon obtaining the holder’s address, another subcontract named “SubjectShareBalance” was created. This subcontract is responsible for monitoring the balance of the holder concerning the subject in question. This hierarchical structure encapsulates our subcontract system.

### Buy and Sell Shares Functions

Our current objective is to implement the “buy shares” and “sell shares” functions within the “Friend.tech” contract. The approach involves progressing step by step from the bottom up on the subcontract structure.

### “SubjectShareBalances” contract

Our initial focus lies in creating a function responsible for updating the balance within the “SubjectShareBalances”. Examining the contract, we notice it contains two functions: “add balance” and “reduce balance.”

<figure id="5ef5" class="graf graf--figure graf--iframe graf-after--p">

</figure>

There are interesting things here: There are precautions to restrict access to these functions. Only the parent contract, which is “Subject Share,” has the authority to call these functions and make balance updates. This is accomplished by requiring the correct contract ID to be provided when invoking these functions. Any attempts by unauthorized callers will result in an exception being thrown. Once we’ve verified the caller’s correctness, we proceed to update the balance accordingly.

Another noteworthy feature is that when the balance reaches zero, this contract self-destructs. It returns the contract deposit to the holder who initially created this subcontract. This demonstrates one of the advantages of using subcontracts over mappings — it incentivises us to remove unnecessary contracts from the blockchain, preventing them from lingering indefinitely.

With these balance update functions in place, our next step is to shift our focus a bit higher up in the hierarchy and proceed with the implementation of the “buy” and “sell” functions at this level.

### “SubjectShares” contract

<figure id="f22d" class="graf graf--figure graf--iframe graf-after--h3">

</figure>

Let’s examine the “SubjectShares” contract, focusing on its “buy” and “sell” functions. The “buy” function accepts three parameters: the buyer’s address, the desired share quantity, and the subject fee, which must be paid when buying or selling shares to the subject.

Similar to the “SubjectSharesBalance” contract, there’s a need to control the function’s access. In this context, only the parent contract, which is the “Friend.tech” contract, is allowed to call this method. To ensure this, the “Friend.tech” contract ID is passed as a parameter, ensuring that only it can invoke the function; otherwise, an error will be raised.

After confirming the caller’s identity, this subject’s total supply of shares is updated. The code then checks whether the buyer is the subject themselves. If this is the case, the function directly updates the subject owner balance field, bypassing the necessity to interact with subcontracts.

On the other hand, if the buyer is another entity, the code proceeds to verify whether a subcontract already exists for this holder. If one exists, it indicates that this holder already possesses some shares. In contrast, if no subcontract is found, it suggests that the holder has no shares associated with this subject. To ascertain this, the holder’s address is used as the key to retrieve the contract ID of the existing subcontract. Subsequently, the “contract exists” function is employed to confirm its existence.

<figure id="3441" class="graf graf--figure graf--iframe graf-after--p">

</figure>

If the subcontract is not found to exist, it is created. To accomplish this, the “copyCreateSubContract” function is utilized, which is considered more efficient than the alternative “createSubContract!” function since it doesn’t require the provision of additional code. Instead, it uses the holder’s address as the key and initializes the subcontract’s fields, which include the holder, subject share contract ID, and the initial balance. This ensures that the holder’s balance for this subject is appropriately initialized. Next, the creation of this subcontract can be considered.

However, if the subcontract already exists, the process involves invoking the recently crafted “add balance” function from the prior commit to update the balance. Once the balance has been addressed, the next step is to transfer the subject fee to the particular contract in question.

<figure id="2d5f" class="graf graf--figure graf--iframe graf-after--p">

</figure>

When selling shares, the process is essentially the reverse. First, there’s a confirmation of having an adequate balance. Then, the “subContractId!” function is utilized to obtain the contract ID of the subject share balance contract. Subsequently, the “reduce balance” function is called. If this contract doesn’t exist, the entire operation will not succeed. Once the call is made, the balance is reduced, and the subject fee is transferred to the contract.

In summary, both the buy and sell functions serve two primary purposes: managing the balance for the holder and regulating the total supply for the subject. Additionally, they facilitate the transfer of the subject fee to the subject share contract.

### Friend.tech smart contract

<figure id="1b24" class="graf graf--figure graf--iframe graf-after--h3">

</figure>

The subsequent step involves moving up the hierarchy and implementing the “buy shares” and “sell shares” functions within the “Friend.tech” smart contract. These functions are highlighted as the next focal points of development.

First, let’s explore the “buy share” function. Its primary objective is to determine the supply for the subject. The “friend.tech” contract enforces a rule that mandates individuals to purchase initial shares by themselves if the supply is zero. Consequently, if the supply is indeed zero, the buyer must be the subject themselves, aligning with the established business logic.

Following this, the code proceeds to calculate the share price based on factors such as the supply, the total number of outstanding shares, and the quantity of shares the buyer intends to purchase. Subsequently, it computes both the protocol and subject fees. The next step is to determine the existence of the “SubjectShares” subcontract.

This evaluation centres on whether the subject address exists, as the aim is to acquire shares for the specific subject in question. If the subject share contract exists, it signifies the issuance of outstanding shares. If it doesn’t exist, it indicates that no shares have ever been issued by this subject. In such a case, the issuer of the shares must be the subject themselves.

After this check, if the subject share contract exists, the code proceeds with the payment of the subject fee, as previously established. Initially, it attempts to approve the subject fee amount. If the balance is zero at this stage, it implies that the buyer, despite outstanding shares for this subject, possesses no shares associated with this subject.

In this scenario, if there’s an attempt to update the balance, and it necessitates the creation of a subcontract for the buyer, it implies that a portion of the contract deposit will be deducted. This explains why, in the event of a zero balance, there is a need to approve a slightly larger amount, specifically one more ALPH, as a contract deposit, to enable the subcontract creation.

Subsequently, once the requisite amount of approved assets has been obtained, the code invokes the “buy” function, providing it with the approved asset amount in ALPH.

<figure id="01f3" class="graf graf--figure graf--iframe graf-after--p">

</figure>

It is worth highlighting here how this underscores the effectiveness of the asset permission system. Irrespective of the buyer’s initial balancer, this particular line of code, **enclosed within square brackets, strictly limits the expenditure within the function’s scope**. It enforces precise control over the amount of ALPH that can be spent, showcasing the power of the Asset Permission System.

<figure id="3cb7" class="graf graf--figure graf--iframe graf-after--p">

</figure>

In contrast, when this subcontract is absent, it implies that no one has previously acquired shares for this particular subject. In such a case, the buyer must also be the subject themselves. Consequently, a new subcontract is established for the subject, and essential parameters are configured.

Creating a new subject share contract initializes with crucial values for the subcontract. The subject’s balance is set to the initial amount, representing the total supply. Furthermore, the parent contract ID is configured, ensuring that the buyer aligns with the subject. As a result, the address is set to that of the buyer.

In essence, the creation of a new subject shares contract serves the purpose of monitoring the total balance of the subject. It efficiently manages the balance and facilitates the subject fee payment to the subject. Subsequently, the protocol fee, as well as the share price, is paid. The total amount required from the buyer for this contract includes the share price and the protocol fee, both of which are updated accordingly. While a separate accounting is maintained for the protocol fee, the total amount covers the share price and the protocol fee combined. Following these actions, an event is emitted, signifying the completion of the “buy” function.

<figure id="9341" class="graf graf--figure graf--iframe graf-after--p">

</figure>

The “sell shares” function operates in a manner opposite to the “buy” function. It begins by checking two conditions: firstly, there must be available shares for the specific subject, and secondly, there must be sufficient shares owned by the seller. This verification process is essential before proceeding.

Subsequently, the code calculates the sale price, considering the protocol and subject fees. It then proceeds to pay the seller this calculated price. The sale price is determined by deducting both the subject fee and protocol fee, resulting in the net revenue received by the seller.

<figure id="1609" class="graf graf--figure graf--iframe graf-after--p">

</figure>

The protocol fee being paid from within the Friend.tech smart contract is sent to the total protocol fee. This process represents an internal transfer of funds within the smart contract.

Besides that, the smart contract, since it deducts the subject fee from the total payout, pays the subject fee to the subject. This is depicted in the code snippet, where funds are transferred from the self-address (which is the protocol itself) to cover the subject fee. **This operation is another example of the Asset Permission System capabilities. While the Friend.tech smart contract has access to a lot assets, including the share price and protocol fees, it is only approved to spend the exact subject fee amount within the scope of the “sell” function.** This ensures the proper handling of subject fees and maintains balance integrity within the subcontracts, namely the “subjectShare” and “subjectShareBalance” contracts. Following the execution of these actions, a trade event is emitted to mark the completion of the “sell shares” function.

### Tests and Recap

Several tests are provided in the <a href="https://github.com/alephium/dev-workshop-02/blob/session-1/test/integration/friend-tech.test.ts" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/dev-workshop-02/blob/session-1/test/integration/friend-tech.test.ts" rel="noopener" target="_blank">GitHub repository</a> to verify if the implementation works as expected, especially all the math related to the price calculation and the fee deduction.

This ends this article, where we delve into implementing the buy and sell shares functions, which will also entail updating the balances, thus creating and destroying subcontracts as needed. The Asset Permission System was also seen in action, and it is a powerful tool for handling asset transfers.

Let us know if you have any questions on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>, <a href="http://alephium.org/discord" class="markup--anchor markup--p-anchor" data-href="http://alephium.org/discord" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a> or <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener" target="_blank">Reddit</a>!

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [November 28, 2023](https://medium.com/p/8f9959742b47).

<a href="https://medium.com/@alephium/second-developer-workshop-re-implementing-friend-techs-smart-contract-in-ralph-part-2-8f9959742b47" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
