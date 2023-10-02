import React, { useState } from 'react';
import styles from './Styles/Testimonial.module.scss';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimonial = () => {
	const Image1 = import.meta.env.VITE_IMAGE1;
	const Image2 = import.meta.env.VITE_IMAGE2;
	const Image3 = import.meta.env.VITE_IMAGE3;
	const [testimonialData, setTestimonialData] =
		useState([
			{
				id: 0,
				content: `I have been extremely satisfied with Firdaus Media's digital marketing abilities. Their strategic insights and execution capabilities are incredible. Their efforts led in a significant increase in our online presence, which translated quickly into increased engagement and conversion rates. I strongly recommend Firdaus Media's services, and I look forward to future collaboration.`,
				author: 'Aditya Singh',
				designation: 'Web Developer, superbattle.com',
				profilepic:
					'https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg',
			},
			{
				id: 1,
				content: `Wow, I didn't realize how much digital presence had the potential to alter things until Firdaus Media came in. They truly understood our brand and made it shine online. It's as if somebody flipped a switch and everyone started talking about us! Definitely am looking forward to working with them again.`,
				author: 'Suraj Yadav',
				designation: `Meme Creator, @the.funny.indian`,
				profilepic:
					'https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg',
			},
			{
				id: 2,
				content: `Team's data-driven digital strategies had a huge impact on our online presence. We're genuinely satisfied and intend to engage them for future campaigns.`,
				author: 'Priyanshu Tiwari',
				designation: 'SEO Expert, viralflumemes.com',
				profilepic:
					'https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg',
			},
		]);
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<h3>
					Beloved by so many businesses out there!
				</h3>
				<p>See what our client says</p>
			</div>
			<div className={styles.testimonialWrapper}>
				{testimonialData.map((item) => {
					return (
						<div
							key={item.id}
							className={styles.card}
						>
							<p>{item.content}</p>
							<div className={styles.line}></div>
							<div className={styles.bottomBar}>
								<img
									draggable='false'
									onContextMenu={(e) => {
										e.preventDefault();
									}}
									src={item.profilepic}
									alt='img'
								/>

								<div className={styles.userWrapper}>
									<p>{item.author}</p>
									<p>{item.designation}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Testimonial;
