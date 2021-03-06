import React, { ReactNode } from 'react';
import './FAQSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';

const boxContainerVariants = {
	hidden: {
		opacity: 0,
	},
  visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.4
		}
	}
}

const boxVariants = {
	hidden: {
		opacity: 0,
	},
  visible: {
		opacity: 1
	}
}

const FAQSection = () => {
	const [sectionRef, inView] = useInView({
		rootMargin: '-50px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<section className='FAQSection' id="faq">
			<SectionTitle title='FAQ' label='KNOW EVERYTHING' light />
			<div className='FAQSection__content_wrapper'>
				<motion.div className='FAQSection__content' ref={sectionRef} variants={boxContainerVariants} initial="hidden" animate={controls}>
					<div className='FAQSection__boxes'>
						<FAQBox
							question='How is Alephium different from the other sharding projects?'
							answer={
								<p><b>Alephium is simple, efficient, secure and practical compared to other sharding projects. </b>
									Its core sharding algorithm BlockFlow has the <b>same minimal network assumptions as Bitcoin. </b>
									The user experience of Alephium would be the same as single blockchain, thanks to its native cross-shard transactions.
									Alephium is a permissionless decentralized platform, everyone could contribute to the consensus of its network.
								<mark>The elegant design of BlockFlow enables us to implement Alephium much quicker than other projects.</mark>
								</p>
							}
						/>
						<FAQBox
							question='How does Alephium support DApps?'
							answer={
								<p>Alephium’s efficient and practical approach to DApps is to combine our <b>token protocol, data protocol, and smart contracts. </b>
									Token protocol and data protocol are naturally scaled to all shards.
									We support smart contracts in some of the shards called intra-group shards.
									<mark>DApps could benefit very much from our native cross-shard transactions without sacrificing the power of smart contracts.</mark>
								</p>
							}
						/>
					</div>
					<div className='FAQSection__boxes'>
						<FAQBox
							question='What is the consensus algorithm used in Alephium?'
							answer={
								<p>Alephium’s consensus is one of the core parts of its BlockFlow algorithm.
									<b> BlockFlow exploits a DAG data structure</b> to resolve its shard dependencies and then uses a finality algorithm to achieve consensus for all shards.
									<mark>The finality algorithm could be PoW, PoS or any other finality algorithm.</mark>Alephium adopts PoW for the moment as it’s decentralized and secure and has been tested by time with Bitcoin.
								</p>
							}
						/>
						<FAQBox
							question='How to solve the single-shard takeover attack?'
							answer={
								<p>BlockFlow exploits a DAG data structure to resolve its shard dependencies.
									<b> As a result, mining works from all shards are accumulated into every new block. </b>
									If an attacker wants to reorg a block in one shard, he must attack the blocks on the other shards that depend on this block.
									<mark>Therefore, Alephium is only vulnerable to 51% attacks.</mark>
								</p>
							}
						/>
					</div>
				</motion.div>
			</div>
			<ParallaxWrapper className='FAQSection__background' movingSpeed={-0.2} style={{ skewY: '-10deg'}}>
				<div className='FAQSection__background__image' />
			</ParallaxWrapper>
		</section>
	)
}


interface FAQBoxProps {
	question: string
	answer: ReactNode
}

const FAQBox: React.FC<FAQBoxProps> = ({ question, answer }) => {
	return (
		<motion.div className='FAQBox__wrapper' variants={boxVariants}>
			<div className='FAQBox'>
				<div className='FAQBox__content'>
					<h1>{question}</h1>
					{answer}
				</div>
			</div>
		</motion.div>
	)
}

export default FAQSection;