import React from 'react';
import styles from './Styles/Footer.module.scss';
import {
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillFacebook,
} from 'react-icons/ai';

import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<div className={styles.globalWrapper}>
			<div className={styles.wrapper}>
				<div className={styles.section1}>
					<h1>FirdausMedia</h1>
					<p>Elevate, Innovate, Dominate</p>

					<div className={styles.social}>
						<AiFillFacebook />
						<AiFillInstagram />
						<AiFillTwitterSquare />
						<AiFillLinkedin />
						<MdEmail />
					</div>
				</div>

				<div className={styles.section2}>
					<h3>Services</h3>
					<p>Projects</p>
					<p>Services</p>
					<p>Brands</p>
				</div>
				<div className={styles.section2}>
					<h3>Company</h3>
					<p>About Us</p>
					<p>Contact Us</p>
					<p>Privacy Policy</p>
				</div>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.bottomFooter}>
				<h4 className={styles.copyright}>
					Firdaus Media Pvt Ltd.
				</h4>
				<h4 className={styles.copyright}>
					© 2023 All Rights Reserved
				</h4>
			</div>
		</div>
	);
};

export default Footer;
