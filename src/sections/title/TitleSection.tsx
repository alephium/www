import React from 'react';
import './TitleSection.scss';
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';
import { motion } from 'framer-motion';

const TitleSection = () => {
	return (
		<section className='TitleSection'>
			<div className='TitleSection__background-fragments'>
				<ParallaxWrapper className='TitleSection__background-fragment fragment1' movingSpeed={1} style={{ skewY: '-10deg'}}/>
				<ParallaxWrapper className='TitleSection__background-fragment fragment2' movingSpeed={0.8} style={{ skewY: '10deg'}} />
				<ParallaxWrapper className='TitleSection__background-fragment fragment3' movingSpeed={0.6} style={{ skewY: '-10deg'}} />
			</div>
			<div className='TitleSection__Splash-Container'>
				<div className='TitleSection__Splash'>
					<ParallaxWrapper className='TitleSection__BlockFlow' movingSpeed={0.2} style={{ skewY: "10deg"}}>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>Alephium is a sharded blockchain to make programmable money<br />scalable and secure</span>
						<div className='TitleSection__BlockFlow__box'>For massive adoption</div>
					</ParallaxWrapper>
					<ParallaxWrapper className={'TitleSection__Splash__background-image'} movingSpeed={0.6} style={{scale: 1.6}} />
				</div>
			</div>
			<ParallaxWrapper className='TitleSection__GetStarted' movingSpeed={-0.4}>
				<div>
					<div className='TitleSection__GetStarted__title'>
						<div className='GetStarted__title__top-label'>Get</div>
						<div className='GetStarted__title__bottom-label'>Started</div>
					</div>
					<div className='TitleSection__button-list'>
						<GetStartedButton title="Technical paper" link="https://github.com/alephium/research/raw/master/alephium.pdf" />
						<GetStartedButton title="One pager" link="https://github.com/alephium/www/raw/master/docs/Onepage.pdf" />
					</div>
				</div>
			</ParallaxWrapper>
		</section>
	);
}

interface GetStartedButtonProps {
	title: string
	link: string
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ title, link }) => {
	return (
		<motion.button className='TitleSection__button' whileHover={{ y: -3, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.08)', backgroundColor: "rgb(174, 54, 255)" }}>
			<a href={link}>
					{title}
			</a>
		</motion.button>
	)
}

export default TitleSection;
