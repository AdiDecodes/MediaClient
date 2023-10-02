import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styles from '../Styles/About.module.scss';
import team from '../assets/team.svg';
import {
	AiOutlineInstagram,
	AiOutlineMail,
} from 'react-icons/ai';

import mission from '../assets/Icons/mission.png';
import values from '../assets/Icons/values.png';

const About = () => {
	const CEO = import.meta.env.VITE_CEO;
	const CSO = import.meta.env.VITE_CSO;
	const COO = import.meta.env.VITE_COO;
	const BDE = import.meta.env.VITE_BDE;
	const PTDM = import.meta.env.VITE_PTDM;
	const TD = import.meta.env.VITE_TD;
	const CAM = import.meta.env.VITE_CAM;
	const [teamMembers, setTeamMembers] = useState([
		{
			id: 0,
			name: 'Rakshit Datta',
			description: `Rakshit Datta is the visionary leader at the helm of Firdaus Media. With a wealth of experience and a proven track record of transformative leadership, Rakshit sets the bar high in our industry, consistently achieving groundbreaking milestones and redefining the boundaries of what's possible. Under his guidance, we embark on an exciting journey through the ever-evolving digital landscape, where we not only keep pace with trends but set them, pushing the envelope and exceeding expectations.`,
			position: 'CEO',
			img: CEO,
			mail: 'rakshit@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 1,
			name: 'Varun Attri',
			position: 'COO',
			description:
				'Meet Varun, the operational genius who keeps Firdaus Media running like a well-oiled machine. With an unwavering commitment to efficiency and excellence, Varun ensures that every project unfolds seamlessly, and our team operates at the peak of its potential. His empowering leadership fosters a culture of collaboration and growth, and his meticulous approach guarantees that our operations are fully equipped to meet the dynamic demands of the digital world.',
			img: CSO,
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 2,
			name: 'Dr. Mamta Kodwani',
			position: 'CSO',
			description:
				'Dr. Mamta Kodwani, our CSO, is the strategic powerhouse driving Firdaus Media towards uncharted digital territories. With a profound understanding of our industry and a knack for spotting opportunities on the horizon, Dr. Kodwani crafts visionary strategies that position us as true industry leaders. Her forward-thinking approach keeps us ahead of market trends, and her dedication to innovation has made us pioneers in the digital realm. With Dr. Kodwani at the helm, our future is as bright as our vision is bold.			',
			img: COO,
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 3,
			name: 'Amit Panchal',
			position: 'Business Development Executive',
			description:
				'Amit, a literature professional turned sales executive, brings a unique blend of passion for words and the art of persuasion to Firdaus Media. The synergy between his love for literature and his career is evident in every interaction.',
			img: BDE,
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 4,
			name: 'Manpreet Singh Narula',
			description:
				'Meet Manpreet Singh Narula, our esteemed advisor, with a multifaceted background in website development, blogging, and marketing. His commitment to excellence ensures that our strategies are always on the cutting edge.',
			position: 'Part-Time Digital Strategist',
			img: PTDM,
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 5,
			name: 'Aditya Singh',
			description:
				'Meet Aditya Singh, the driving force behind our digital innovations. He crafts bespoke solutions tailored to your unique requirements.',
			position: 'Technical Developer',
			img: TD,
			mail: 'aditya@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
		{
			id: 6,
			name: 'Suraj Yadav',
			description:
				'Suraj Yadav is here to empower you with insights, solutions, and support, always ready to go the extra mile to ensure your success.',
			position: 'Client Account Manager',
			img: CAM,
			mail: 'suraj@firdausmedia.com',
			instagram:
				'https://www.instagram.com/areysuraj/',
		},
	]);
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<div className={styles.aboutWrapper}>
				<h3>About us</h3>
			</div>
			<div className={styles.aboutUs}>
				<div className={styles.innerDiv}>
					<img
						src='https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1503919103-scaled.jpg'
						alt=''
					/>
					<h3>Our story</h3>
					<p>
						We are Firdaus Media, the architects of
						digital excellence with over 7 years of
						proven success. Our team of marketing
						maestros doesn't just follow trends; we set
						them. We understand your vision, align it
						with our innovation, and create strategies
						that translate into tangible triumphs. From
						Instagram mastery to reaching your target
						audience with precision, we've got the
						expertise, creativity, and confidence to
						take your brand to unparalleled heights.
						Partner with us, and let's redefine success
						together.
					</p>
				</div>
			</div>

			<div className={styles.mission}>
				<div className={styles.missionWrapper}>
					<div className={styles.heading}>
						<img
							src={values}
							alt=''
						/>
						<p>Our Values</p>
					</div>
					<p>
						Excellence: We demand nothing less than the
						extraordinary and consistently deliver
						exceptional results. Innovation: We lead the
						charge, constantly pioneering avant-garde
						strategies that propel our clients to the
						forefront of success. Collaboration: Your
						triumph is our collective objective; we work
						hand-in-hand with you as dedicated partners.
						Integrity: In all our endeavors, we uphold
						the utmost ethical standards, ensuring trust
						and transparency.
					</p>
				</div>
				<div className={styles.missionWrapper}>
					<div className={styles.heading}>
						<img
							src={mission}
							alt=''
						/>
						<p>Our Mission</p>
					</div>
					<p>
						Our raison d'être is to empower brands,
						whether colossal or compact, to reach the
						zenith of digital greatness. Our mission is
						rooted in delivering unwavering expertise,
						unbridled creativity, and boundless
						confidence to transform visions into
						veritable triumphs in the ever-evolving
						digital universe.
					</p>
				</div>
			</div>
			<div className={styles.usp}>
				<h3>Why choose us?</h3>
				<p>
					Proven Success: A stellar 7-year track record
					of tangible achievements speaks volumes about
					our capabilities. Innovative Strategies:
					Rather than merely following trends, we
					pioneer novel approaches that carve out new
					horizons. Customer-Centric Focus: Your unique
					vision serves as our North Star, enabling us
					to craft tailor-made solutions that resonate
					with your distinct needs. Comprehensive
					Service Range: Our comprehensive suite of
					services, from digital marketing to web
					design, consolidates us as your sole
					destination for all things digital.
				</p>
			</div>
			<div className={styles.team}>
				<h3>Meet the Team</h3>
				<div className={styles.teamWrapper}>
					{teamMembers.map((member) => {
						return (
							<div
								key={member.id}
								className={styles.teamCard}
							>
								<div className={styles.imageWrapper}>
									<img
										src={member.img}
										alt=''
									/>
									<h3>{member.name}</h3>
									<p>{member.position}</p>
								</div>
								<div className={styles.memberInfo}>
									<p>{member.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
