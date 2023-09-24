import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styles from '../Styles/Job.module.scss';
import imgLogo from '../assets/favicon/android-chrome-512x512.png';
const Job = () => {
	const [job, setJob] = useState([
		{
			id: 0,
			title: 'Meme Officer',
			description:
				"Got a knack for going viral? Join us as a Meme Officer! We're looking for a creative genius with 3-4 years of meme-making magic. If you can turn ideas into laughs and likes, we want you! Let's make the internet a funnier place together.",
			company: 'Firdaus Media',
			tags: ['Full Time', 'Remote', 'Hybrid'],
			location: 'Remote / Hybrid',
			posted: '20 Sept, 2023',
			employment: 'Full Time',
		},
		{
			id: 1,
			title: 'Key Account Manager',
			description:
				"Are you a relationship guru? We're on the hunt for a Key Account Manager with 4-6 years of experience in building and nurturing client connections. If you can turn handshakes into lasting partnerships, you're our kind of person! Apply now and let's grow together.",
			company: 'Firdaus Media',
			tags: ['Full Time', 'On Site'],
			location: 'Mumbai / Delhi / Banglore',
			posted: '20 Sept, 2023',
			employment: 'Full Time',
		},
		{
			id: 2,
			title: 'HR - Talent Acquisition',
			description:
				"People person with a flair for finding gems? Join our HR team as a Talent Acquisition Specialist! With 2-3 years of experience in recruiting top-notch talent, you could be the one to help us build our dream team. Let's find the stars together!",
			company: 'Firdaus Media',
			tags: ['Full Time', 'On Site'],
			location: 'Mumbai / Delhi / Banglore',
			posted: '20 Sept, 2023',
			employment: 'Full Time',
		},
		{
			id: 3,
			title: 'Web Developer',
			description:
				"Code whisperer wanted! If you have 3-4 years of experience in turning coffee into code, we want you as our Web Developer. Join us and let's create digital masterpieces that wow the world. Apply now, and let's code something amazing together!",
			company: 'Firdaus Media',
			tags: ['Full Time', 'On Site'],
			location: 'Mumbai / Delhi / Banglore',
			posted: '20 Sept, 2023',
			employment: 'Full Time',
		},
		{
			id: 4,
			title: 'Category Manager',
			description:
				"Marketplace maestro? We're looking for a Category Manager with 2-3 years of experience in steering success in the bustling world of online marketplaces (for Marketplace). If you can spot trends and turn them into triumphs, you're our perfect match! Let's conquer the market together.",
			company: 'Firdaus Media',
			tags: ['Full Time', 'On Site'],
			location: 'Mumbai / Delhi / Banglore',
			posted: '20 Sept, 2023',
			employment: 'Full Time',
		},
	]);

	const mailActivity = (position) => {
		const email = 'career@firdausmedia.com';
		const subject =
			'Firdaus Media - Application for ' + position;
		const body = 'Please Attach your Resume here';

		const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

		window.location.href = mailtoLink;
	};
	const tags = (arrayList) =>
		arrayList.map((tag, index) => (
			<div
				key={index}
				className={styles.tag}
			>
				{tag}
			</div>
		));

	return (
		<div className={styles.transition}>
			<div
				className={styles.mainWrapper}
				transition-style='in:wipe:up'
			>
				<Header />
				<div className={styles.headingWrapper}>
					<h1>Job / Career</h1>
					<p>
						Work with us and be part of a team that is
						changing the future.
					</p>
				</div>
				<div className={styles.jobWrapper}>
					{job.map((item) => {
						return (
							<div
								key={item.id}
								className={styles.jobCard}
							>
								<div className={styles.DateWrapper}>
									<div className={styles.date}>
										{item.posted}
									</div>
									<img
										src={imgLogo}
										alt=''
									/>
								</div>
								<div className={styles.CompanyName}>
									Firdaus Media
								</div>
								<div className={styles.position}>
									<h3>{item.title}</h3>
								</div>
								<div className={styles.location}>
									{item.location}
								</div>
								<div className={styles.description}>
									{item.description}
								</div>
								<div className={styles.tagWrapper}>
									{tags(item.tags)}
								</div>

								<div
									className={styles.applyBtn}
									onClick={() => {
										mailActivity(item.title);
									}}
								>
									Apply Now
								</div>
							</div>
						);
					})}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Job;
