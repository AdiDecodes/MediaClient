import React, {
	useEffect,
	useRef,
	useState,
} from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import styles from '../Styles/Home.module.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import Testimonial from '../Components/Testimonial';
import Projects from '../Components/Projects';
import Carousel from '../Components/Carousel';
import Brands from '../Components/MarqueeBrands';
import icon from '../../src/assets/home_icon.svg';
import office from '../../src/assets/office.png';
import ScrolltoTop from '../Components/scrollBtn';
import { sassTrue } from 'sass';

const Home = () => {
	const brandRef = useRef(null);
	const projectRef = useRef(null);
	const [showLoader, setShowLoader] =
		useState(sassTrue);

	useEffect(() => {
		setTimeout(() => {
			setShowLoader(false);
		}, 750);
	}, []);

	return (
		<div className={styles.MainWrapper}>
			{showLoader ? (
				<Loader />
			) : (
				<>
					<div transition-style='in:wipe:up'>
						<ScrolltoTop />
						<Header
							element={{ brandRef, projectRef }}
						/>
						<div className={styles.Main}>
							<div className={styles.section1}>
								<div className={styles.left}>
									<h1>
										Changes can be hard, We can help!
									</h1>
									<p>
										Unleash your brand's potential with
										Firdaus Media, the creative agency that
										turns imagination into reality
									</p>
									<div
										className={styles.contactBtn}
										onClick={() => {
											window.open('/contact', '_blank');
										}}
									>
										<p>Enquire Now</p>
										<BsArrowUpRight />
									</div>
								</div>
								<div className={styles.right}>
									<img
										src={icon}
										alt=''
									/>
								</div>
							</div>
							<div
								ref={brandRef}
								id='brand'
								className={styles.brand}
							>
								<p>Our Partner Brands</p>
								<Brands />
							</div>
							<div className={styles.services}>
								<div className={styles.serviceWrapper}>
									<Carousel />
								</div>
							</div>
							<div className={styles.stats}>
								<div className={styles.section}>
									<p>300+</p>
									<p>Campaigns Completed</p>
								</div>
								<div className={styles.line}></div>
								<div className={styles.section}>
									<p>2K+</p>
									<p>Happy Customers</p>
								</div>
								<div className={styles.line}></div>
								<div className={styles.section}>
									<p>5+</p>
									<p>Years of Experience</p>
								</div>
								<div className={styles.line}></div>
								<div className={styles.section}>
									<p>250+</p>
									<p>Valuable Feedbacks</p>
								</div>
							</div>
							<div className={styles.aboutUs}>
								<div className={styles.left}>
									<div className={styles.headingWrapper}>
										<div />
										<p>Who We Are</p>
									</div>
									<h3>
										Discover Firdaus Media Empowering Brands
										to Shine
									</h3>
									<div className={styles.line}></div>
									<p>
										Our company specializes in research,
										brand building, PR Services, Meme
										Marketing, Instagram Marketing, SEO/SEM
										services and much more. To help our
										clients improve their businesses, we
										work with them all over the world.
									</p>
									<div
										className={styles.buttonMore}
										onClick={() => {
											window.open('/services', '_blank');
										}}
									>
										Explore service
									</div>
								</div>
								<div className={styles.right}>
									<img
										src={office}
										alt=''
									/>
								</div>
							</div>
							<div ref={projectRef}>
								<Projects />
							</div>
							<Testimonial />
							<div className={styles.contactUs}>
								<div className={styles.InfoWrapper}>
									<h3>Have a Project In Mind ?</h3>
									<p>
										Let's talk about your brand or
										requirement
									</p>
								</div>
								<div
									className={styles.discussBtn}
									onClick={() => {
										window.open('/contact', '_blank');
									}}
								>
									Let's discuss
								</div>
							</div>
						</div>
						<Footer
							element={{ brandRef, projectRef }}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
