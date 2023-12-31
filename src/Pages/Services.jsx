import React, { useState } from 'react';
import styles from '../Styles/Services.module.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import dm from '../assets/dm.png';
import am from '../assets/affiliate-marketing.png';
import bb from '../assets/brand-building.png';
import cc from '../assets/content-creation.png';
import dmark from '../assets/digital-marketing.png';
import gs from '../assets/growth-strategies.png';
import im from '../assets/instagram-marketing.png';
import IT from '../assets/IT-services.png';
import mm from '../assets/meme-marketing.png';
import seo from '../assets/seo-sem.png';
import webdev from '../assets/web-dev.png';
import ifm from '../assets/influencer-marketing.png';
import pr from '../assets/pr.png';

const Services = () => {
	const [Services, setServices] = useState([
		{
			id: 1,
			title: 'Digital Marketing',
			description: `We don't just market; we create digital phenomena. Our strategies
            are your roadmap to online dominance.
            `,
			image: dm,
		},
		{
			id: 2,
			title: 'Social Media Management',
			description: `We nurture your online community like no other.
            Engage, connect, and thrive with our expertise.
            `,
			image: dmark,
		},
		{
			id: 3,
			title: 'Focused Instagram Marketing',
			description: `We make Instagram more than a platform; we make
            it your success story. Let's connect.
            `,
			image: im,
		},
		{
			id: 4,
			title: 'Meme Marketing',
			description: `We make your brand viral, not just visible. Our memes don't just
            entertain; they resonate and engage.            
            `,
			image: mm,
		},
		{
			id: 5,
			title: 'Influencer Marketing',
			description: `We connect you with voices that don't just speak but inspire.
            Our influencer strategies are powerful.
            `,
			image: ifm,
		},
		{
			id: 6,
			title: 'Brand Building',
			description: `We don't just build brands; we craft legacies. Let's make your brand
            an unforgettable experience.
            `,
			image: bb,
		},
		{
			id: 7,
			title: 'PR Agency Services',
			description: `We manage your reputation as we manage our excellence –
            with integrity and finesse.
            `,
			image: pr,
		},
		{
			id: 8,
			title: 'Affiliate Marketing',
			description: `We create partnerships that prosper. With us, your reach knows
            no bounds.
            `,
			image: am,
		},
		{
			id: 9,
			title: 'Web Design & Development',
			description: `We build websites that captivate and convert. Your
            digital space, sculpted to perfection.            
            `,
			image: webdev,
		},
		{
			id: 10,
			title: 'Content Creation & Strategy',
			description: `We craft content that doesn't just tell your story; it
            sells your story
            `,
			image: cc,
		},
		{
			id: 11,
			title: 'SEO & SEM Services',
			description: `We make your brand not just visible but victorious. Your
            success in the digital marketplace is our promise.            
            `,
			image: seo,
		},
		{
			id: 12,
			title: 'Growth Marketing Strategies',
			description: `We don't just grow businesses; we skyrocket them.
            Let's fuel your success together.
            `,
			image: gs,
		},
		{
			id: 13,
			title: 'IT Services',
			description: `We provide tech solutions that lead the industry. Your technology needs,
            met with mastery
            `,
			image: IT,
		},
	]);
	return (
		<div className={styles.transitionWrapper}>
			<div className={styles.wrapper}>
				<Header />
				<div
					className={styles.innerWrapper}
					transition-style='in:wipe:up'
				>
					<h3 className={styles.heading}>
						Services We Offer
					</h3>
					<p className={styles.description}>
						Drive Results with Our Comprehensive Media
						Services: Ad Run, Web Development, Meme
						Marketing, and Beyond!
					</p>
					<div className={styles.servicelayout}>
						{Services.map((service) => {
							return (
								<div
									key={service.id}
									className={styles.serviceCard}
								>
									<div className={styles.image}>
										<img
											src={service.image}
											alt=''
										/>
									</div>

									<div className={styles.info}>
										<h3 className={styles.headingInfo}>
											{service.title}
										</h3>
										<p className={styles.descriptionInfo}>
											{service.description}
										</p>

										<div
											className={styles.serviceSelect}
											onClick={() => {
												window.open('/contact', '_blank');
											}}
										>
											Enquire
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Services;
