import React, { useState } from 'react';
import Header from '../Components/Header';
import styles from '../Styles/About.module.scss';
import team from '../assets/team.svg';
import {
	AiOutlineInstagram,
	AiOutlineMail,
} from 'react-icons/ai';

const About = () => {
	const [teamMembers, setTeamMembers] = useState([
		{
			id: 0,
			name: 'Suraj Yadav',
			position: 'CEO',
			img: '',
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 1,
			name: 'Suraj Yadav',
			position: 'CEO',
			img: '',
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 2,
			name: 'Suraj Yadav',
			position: 'CEO',
			img: '',
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 3,
			name: 'Suraj Yadav',
			position: 'CEO',
			img: '',
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 4,
			name: 'Suraj Yadav',
			position: 'CEO',
			img: '',
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
	]);
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<div className={styles.aboutWrapper}>
				<h3>
					We're here to make your project much easier
				</h3>
				<img
					src={team}
					alt=''
				/>
			</div>
			<div className={styles.aboutUs}>
				<div className={styles.innerDiv}>
					<h3>Our story</h3>
					<p>
						At Firdaus Media, we understand the problems
						posed by complex requirements at businesses.
					</p>
					<p>
						We are Firdaus Media, the leaders of digital
						excellence with over 7 years of proven
						success. Our team of marketing maestros
						don’t just follow trends; we set them.
					</p>

					<p>
						We understand your vision, align it with our
						innovation, and create strategies that
						translate into tangible triumphs.
					</p>
					<p>
						From Instagram mastery to reaching your
						target audience with precision, we've got
						the expertise, the creativity, and the
						confidence to take your brand to
						unparalleled heights. Partner with us, and
						let's redefine success together.
					</p>
				</div>
			</div>
			<div className={styles.team}>
				<h3>Meet our Team</h3>
				<div className={styles.teamCard}>
					<div className={styles.image}>
						<img
							src='https://res.cloudinary.com/customzone-app/image/upload/v1695616846/MediaClient/suraj_xfowsq.jpg'
							alt=''
						/>
					</div>
					<div className={styles.memberInfo}>
						<h3>Name</h3>
						<p>Position</p>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Beatae repudiandae
							voluptatum ducimus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
