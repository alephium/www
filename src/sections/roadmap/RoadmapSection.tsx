import React from 'react'
import './RoadmapSection.scss'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper'

enum Side {
	left = 1,
	right = 2,
}

const RoadmapSection = () => {
	return (
		<section className='RoadmapSection' id="roadmap">
			<SectionTitle title='Roadmap' label="WHAT'S UP AHEAD" light />
			<div className='Roadmap__container'>
				<div className='Roadmap__line' />
				<div className='Roadmap'>
					<RoadmapStep
						side={Side.left}
						stepNumber={0}
						title='Zero'
						done
					>
						Cheng proposed the first linear-time asynchronous Byzantine consensus algorithm. &nbsp;
						<a target="_blank" rel="noopener noreferrer" href="https://infoscience.epfl.ch/record/210619/files/main.pdf">Pdf</a>
					</RoadmapStep>
					<RoadmapStep
						side={Side.right}
						stepNumber={1}
						done
						title='Natural'
					>
						Cheng completed the research of BlockFlow algorithm for practical sharding protocol. &nbsp;
						<a target="_blank" rel="noopener noreferrer" href="https://www.alephium.org/docs/white-paper.pdf">Pdf</a>
					</RoadmapStep>
					<RoadmapStep
						side={Side.left}
						stepNumber={2}
						done
						title='Real'
					>
						The team implemented the Alpha version of the core sharding protocol and tested on AWS. &nbsp;
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=lasTOXkMr1k">Demo</a>
					</RoadmapStep>
					<RoadmapStep
						side={Side.right}
						stepNumber={3}
						title='Complex'
						wip
					>
						TestNet version will be released for testing, improving, and auditing.
					</RoadmapStep>
					<RoadmapStep
						side={Side.left}
						stepNumber={4}
						title='Alephium'
						highlight
					>
						The MainNet will be launched.
					</RoadmapStep>
				</div>
			</div>
			<ParallaxWrapper className='RoadmapSection__background' movingSpeed={-0.3} style={{ skewY: '10deg'}}>
				<div className='RoadmapSection__background__image' />
			</ParallaxWrapper>
		</section>
	)
}

interface RoadmapStepProps {
	side: Side
	stepNumber: number
	title: string
	done?: boolean
	wip?: boolean
	highlight?: boolean
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ side, stepNumber, title, done, wip, highlight, children }) => {
	const [stepRef, inView] = useInView({
		rootMargin: '-200px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<motion.div className={`RoadmapStep ${Side[side]}`} ref={stepRef} variants={itemVariants} initial="hidden" animate={controls}>
			<div className='content'>
				<div className='box'>
					<h1 className='title'>{title}</h1>
					<p className='text'>{children}</p>
				</div>
				<div className='link'/>
				<div className='number-box'>
					<div className='number'>{stepNumber}</div>
					<div className={`notification-bubble ${done ? 'done' : ''} ${wip ? 'wip' : ''} ${highlight ? 'highlight' : ''}`}>
						<div className='notification-bubble__icon' />
					</div>
				</div>
			</div>
			<div className='free-space' />
		</motion.div>
	)
}

export default RoadmapSection