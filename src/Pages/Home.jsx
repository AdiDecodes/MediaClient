import React, {
	useEffect,
	useState,
} from 'react';
import styles from '../Styles/Home.module.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';
import Carousel from '../Components/Carousel';
import video from '../../src/assets/video.mp4';
import logo from '../../src/assets/logoNew.jpeg';
const Home = () => {
	const [showLoader, setShowLoader] =
		useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowLoader(false);
		}, 2000);
	}, []);

	return (
		<div className={styles.MainWrapper}>
			{showLoader ? (
				<Loader />
			) : (
				<>
					<div /* transition-style='in:wipe:up' */>
						{/* <Header /> */}
						<div className={styles.Main}>
							<div className={styles.videoSection}>
								<video
									src={video}
									autoPlay
									muted
									loop
								/>
							</div>
							<div className={styles.aboutUs}>
								<div className={styles.Aboutwrapper}>
									<p className={styles.mainHeading}>
										Who are we?
									</p>
									<p className={styles.description}>
										We are Firdaus Media, the leaders of
										digital excellence with over 7 years of
										proven success. Our team of marketing
										maestros don't just follow trends; we
										set them. We understand your vision,
										align it with our innovation, and create
										strategies that translate into tangible
										triumphs. From Instagram mastery to
										reaching your target audience with
										precision, we've got the expertise, the
										creativity, and the confidence to take
										your brand to unparalleled heights.
										Partner with us, and let's redefine
										success together.
									</p>
								</div>
								<div className={styles.imageContainer}>
									<img
										src={logo}
										alt=''
									/>
								</div>
							</div>
							<div className={styles.services}>
								<p className={styles.heading}>Services</p>
								<p className={styles.description}>
									Have a look at services we are offering!
								</p>
								<Carousel />
							</div>
						</div>
						<Footer />
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
