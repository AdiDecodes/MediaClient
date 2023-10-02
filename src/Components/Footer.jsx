import React from 'react';
import styles from './Styles/Footer.module.scss';
import { useNavigate } from 'react-router-dom';
import {
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiFillInstagram,
	AiFillFacebook,
} from 'react-icons/ai';

import { MdEmail } from 'react-icons/md';

const Footer = ({ element }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.globalWrapper}>
			<div className={styles.wrapper}>
				<div className={styles.section1}>
					<h1>Firdaus Media</h1>
					<p>Your Brand Becomes a Star</p>

					<div className={styles.social}>
						<AiFillFacebook
							onClick={() => {
								window.open(
									'https://www.facebook.com/firdausmedia',
									'_blank'
								);
							}}
						/>
						<AiFillInstagram
							onClick={() => {
								window.open(
									'https://www.instagram.com/firdausxmedia',
									'_blank'
								);
							}}
						/>
						<AiFillTwitterSquare />
						<AiFillLinkedin />
						<MdEmail
							onClick={() => {
								window.open(
									'mailto:contact@firdausmedia.com',
									'_blank'
								);
							}}
						/>
					</div>
				</div>

				<div className={styles.section2}>
					<h3>Quick Links</h3>
					<p
						onClick={() => {
							navigate('/');
							const y =
								element.projectRef.current.getBoundingClientRect()
									.top + window.scrollY;
							window.scroll({
								top: y,
								behavior: 'smooth',
							});
						}}
					>
						Projects
					</p>
					<p
						onClick={() => {
							navigate('/services');
							window.scroll({
								top: 0,
								behavior: 'smooth',
							});
						}}
					>
						Services
					</p>
					<p
						onClick={() => {
							navigate('/career');
							window.scroll({
								top: 0,
								behavior: 'smooth',
							});
						}}
					>
						Career
					</p>
				</div>
				<div className={styles.section2}>
					<h3>Company</h3>
					<p
						onClick={() => {
							navigate('/about');
							window.scroll({
								top: 0,
								behavior: 'smooth',
							});
						}}
					>
						About Us
					</p>
					<p
						onClick={() => {
							navigate('/contact');
							window.scroll({
								top: 0,
								behavior: 'smooth',
							});
						}}
					>
						Contact Us
					</p>
					<p
						onClick={() => {
							navigate('/privacy-policy');
							window.scroll({
								top: 0,
								behavior: 'smooth',
							});
						}}
					>
						Privacy Policy
					</p>
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
