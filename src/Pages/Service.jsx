import React, {
	useEffect,
	useState,
} from 'react';
import styles from '../Styles/Service.module.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { BsArrowRight } from 'react-icons/bs';

import afmarketing from '../assets/Icons/affiliatemarketing.png';
import brand from '../assets/Icons/brand.png';
import coding from '../assets/Icons/coding.png';
import content from '../assets/Icons/content.png';
import growth from '../assets/Icons/growth.png';
import influencer from '../assets/Icons/influencer.png';
import instagram from '../assets/Icons/instagram.png';
import IT from '../assets/Icons/IT.png';
import marketing from '../assets/Icons/marketing.png';
import mememarketing from '../assets/Icons/mememarketing.png';
import pragency from '../assets/Icons/pragency.png';
import seo from '../assets/Icons/seo.png';
import socialmedia from '../assets/Icons/socialmedia.png';

const Service = () => {
	const [Services, setServices] = useState([
		{
			id: 1,
			title: 'Digital Marketing',
			description: `We don't just market; we create digital phenomena. Our strategies
            are your roadmap to online dominance.
            `,
			image: marketing,
		},
		{
			id: 2,
			title: 'Social Media Management',
			description: `We nurture your online community like no other.
            Engage, connect, and thrive with our expertise.
            `,
			image: socialmedia,
		},
		{
			id: 3,
			title: 'Focused Instagram Marketing',
			description: `We make Instagram more than a platform; we make
            it your success story. Let's connect.
            `,
			image: instagram,
		},
		{
			id: 4,
			title: 'Meme Marketing',
			description: `We make your brand viral, not just visible. Our memes don't just
            entertain; they resonate and engage.            
            `,
			image: mememarketing,
		},
		{
			id: 5,
			title: 'Influencer Marketing',
			description: `We connect you with voices that don't just speak but inspire.
            Our influencer strategies are powerful.
            `,
			image: influencer,
		},
		{
			id: 6,
			title: 'Brand Building',
			description: `We don't just build brands; we craft legacies. Let's make your brand
            an unforgettable experience.
            `,
			image: brand,
		},
		{
			id: 7,
			title: 'PR Agency Services',
			description: `We manage your reputation as we manage our excellence –
            with integrity and finesse.
            `,
			image: pragency,
		},
		{
			id: 8,
			title: 'Affiliate Marketing',
			description: `We create partnerships that prosper. With us, your reach knows
            no bounds.
            `,
			image: afmarketing,
		},
		{
			id: 9,
			title: 'Web Design & Development',
			description: `We build websites that captivate and convert. Your
            digital space, sculpted to perfection.            
            `,
			image: coding,
		},
		{
			id: 10,
			title: 'Content Creation & Strategy',
			description: `We craft content that doesn't just tell your story; it
            sells your story
            `,
			image: content,
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
			image: growth,
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
			<div className={styles.mainWrapper}>
				<Header />
				<div
					className={styles.Innerwrapper}
					transition-style='in:wipe:up'
				>
					<div className={styles.headingWrapper}>
						<h3>Services we offer</h3>
						<p>
							Drive Results with Our Comprehensive Media
							Services: Ad Run, Web Development, Meme
							Marketing, and Beyond!
						</p>
					</div>
					<div className={styles.serviceWrapper}>
						{Services.map((item) => {
							return (
								<div className={styles.serviceCard}>
									<img
										src={item.image}
										alt=''
									/>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<div
										className={styles.enquiryButton}
										onClick={() => {
											window.open('/contact');
										}}
									>
										<p>Enquire Now</p>
										<BsArrowRight />
									</div>
								</div>
							);
						})}
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Service;
