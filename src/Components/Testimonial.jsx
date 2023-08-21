import React, { useState } from 'react';
import styles from './Styles/Testimonial.module.scss';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimonial = () => {
	const [testimonialData, setTestimonialData] =
		useState([
			{
				id: 0,
				content: `Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error, nobis? Omnis
                quaerat iste voluptas, itaque sed corporis
                rerum, error, dignissimos voluptatum sunt
                accusantium temporibus. Nulla, odio!
                Doloremque ut dignissimos facere vero nemo
                obcaecati aliquam doloribus illo. Dolor
                maxime, atque ducimus odio magni sit`,
				author: 'James Carter',
				designation: 'Founder at JameGame.com',
				profilepic:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
			},
			{
				id: 0,
				content: `Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error, nobis? Omnis
                quaerat iste voluptas, itaque sed corporis
                rerum, error, dignissimos voluptatum sunt
                accusantium temporibus. Nulla, odio!
                Doloremque ut dignissimos facere vero nemo
                obcaecati aliquam doloribus illo. Dolor
                maxime, atque ducimus odio magni sit`,
				author: 'James Carter',
				designation: 'Founder at JameGame.com',
				profilepic:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
			},
			{
				id: 0,
				content: `Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error, nobis? Omnis
                quaerat iste voluptas, itaque sed corporis
                rerum, error, dignissimos voluptatum sunt
                accusantium temporibus. Nulla, odio!
                Doloremque ut dignissimos facere vero nemo
                obcaecati aliquam doloribus illo. Dolor
                maxime, atque ducimus odio magni sit`,
				author: 'James Carter',
				designation: 'Founder at JameGame.com',
				profilepic:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
			},
		]);
	return (
		<div className={styles.wrapper}>
			<div className={styles.heading}>
				<BiSolidQuoteAltLeft />
				<h3>
					Beloved by so many <br />
					businesses out there!
				</h3>
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
