import React, { useState } from 'react';
import styles from './Styles/Header.module.scss';
const Header = () => {
	const [showSidebar, setSidebar] =
		useState(false);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				FIRDAUS MEDIA
			</div>
			<div className={styles.menuWrapper}>
				<a href='/hello'>Media</a>
				<a href='/hello'>Services</a>
				<a href='/hello'>Contact</a>
				<a href='/hello'>Brands</a>
				<a
					href='/hello'
					onClick={() => setSidebar(!showSidebar)}
				>
					Become a partner
				</a>
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
