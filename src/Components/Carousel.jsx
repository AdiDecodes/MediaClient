import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Styles/Carousel.module.scss';
import doge from '../../src/assets/evil-doge.jpg';
import brand from '../assets/Icons/brand.png';
import instagram from '../assets/Icons/instagram.png';
import mememarketing from '../assets/Icons/mememarketing.png';
import pragency from '../assets/Icons/pragency.png';
const Carousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	const [Services, setServices] = useState([
		{
			id: 1,
			title: 'Focused Instagram Marketing',
			description: `We make Instagram more than a platform; we make
            it your success story. Let's connect.
            `,
			image: instagram,
		},
		{
			id: 2,
			title: 'Meme Marketing',
			description: `We make your brand viral, not just visible. Our memes don't just
            entertain; they resonate and engage.            
            `,
			image: mememarketing,
		},
		{
			id: 3,
			title: 'Brand Building',
			description: `We don't just build brands; we craft legacies. Let's make your brand
            an unforgettable experience.
            `,
			image: brand,
		},
		{
			id: 4,
			title: 'PR Agency Services',
			description: `We manage your reputation as we manage our excellence –
            with integrity and finesse.
            `,
			image: pragency,
		},
	]);
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<div className={styles.innerLeft}>
					<div className={styles.card}>
						<img
							src={doge}
							alt=''
						/>
						<p>Meme Marketing</p>
						<p>
							We make your brand viral, not just visible.
							Our memes don't just entertain; they
							resonate and engage
						</p>
					</div>
					<div className={styles.card}>
						<img
							src={instagram}
							alt=''
						/>
						<p>Focused Instagram Marketing</p>
						<p>
							We make Instagram more than a platform; we
							make it your success story. Let's connect.
						</p>
					</div>
				</div>
				<div className={styles.innerRight}>
					<div className={styles.card}>
						<img
							src={brand}
							alt=''
						/>
						<p>Brand Building</p>
						<p>
							We don't just build brands; we craft
							legacies. Let's make your brand an
							unforgettable experience.
						</p>
					</div>
					<div className={styles.card}>
						<img
							src={pragency}
							alt=''
						/>
						<p>PR Agency</p>
						<p>
							We manage your reputation as we manage our
							excellence – with integrity and finesse.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.headingWrapper}>
					<div></div>
					<p>Services</p>
				</div>

				<h3>
					We can help you solve your problem through
					our service
				</h3>
				<div className={styles.line}></div>
				<p>
					We are a brand strategy & digital design
					agency building brands that matter in culture
					with more than 7 years of experience.
				</p>

				<div
					className={styles.buttonMore}
					onClick={() => {
						window.open('/services', '_blank');
					}}
				>
					Explore services
				</div>
			</div>
		</div>
	);
};

export default Carousel;
