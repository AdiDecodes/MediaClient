import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import anmt from '../assets/404.json';
import styles from '../Styles/Error.module.scss';
import Header from '../Components/Header';

const Error = () => {
	const navigate = useNavigate();
	const animationContainer = useRef(null);
	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: anmt,
		});

		return () => {
			anim.destroy();
		};
	}, []);

	return (
		<div className={styles.wrapper}>
			<Header />
			<div
				ref={animationContainer}
				className={styles.animation}
			></div>
			<h3 className={styles.heading}>
				Page not Found
			</h3>
			<p className={styles.subHeading}>
				The page you are trying to reach is not found!
			</p>
			<div
				className={styles.gotoHome}
				onClick={() => {
					navigate('/');
				}}
			>
				Go Back Home
			</div>
		</div>
	);
};

export default Error;
