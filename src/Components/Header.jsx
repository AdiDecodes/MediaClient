import React, { useState } from 'react';
import styles from './Styles/Header.module.scss';
import { useNavigate } from 'react-router-dom';
const Header = () => {
	const navigate = useNavigate();
	const [showSidebar, setSidebar] =
		useState(false);
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.title}
				onClick={() => {
					navigate('/');
				}}
			>
				FIRDAUS MEDIA
			</div>
			<div className={styles.menuWrapper}>
				<p
					onClick={() => {
						navigate('/');
					}}
				>
					Media
				</p>
				<p
					onClick={() => {
						navigate('/');
					}}
				>
					Services
				</p>
				<p
					onClick={() => {
						navigate('/contact');
					}}
				>
					Contact
				</p>
				<p
					onClick={() => {
						navigate('/');
					}}
				>
					Brands
				</p>
			</div>
			<div
				className={
					showSidebar
						? `${styles.sidebar}${styles.open}`
						: styles.sidebar
				}
			>
				hii
			</div>
		</div>
	);
};

export default Header;
