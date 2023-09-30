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
				content: `UI/UX delivered almost in no time! That was fantastic. Working with this agency not only got my work done but making connections with them was a great experience. I would love to work with them again!`,
				author: 'Aditya Singh',
				designation: 'Web Developer, superbattle.com',
				profilepic:
					'https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg',
			},
			{
				id: 1,
				content: `Firdaus Media's video and graphic designing services are a game-changer. Their stunning graphics and engaging videos have elevated our marketing campaigns. Highly recommended!`,
				author: 'Suraj Yadav',
				designation: `Meme Creator, @the.funny.indian`,
				profilepic:
					'https://static.vecteezy.com/system/resources/previews/010/260/479/large_2x/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg',
			},
			{
				id: 2,
				content: `Firdaus Media transformed our online presence. Their web development and SEO strategies drove more organic traffic. Highly professional and responsive team.`,
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
