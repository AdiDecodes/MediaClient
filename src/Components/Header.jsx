import React, {
	useEffect,
	useState,
} from 'react';
import styles from './Styles/Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoNew.jpeg';
const Header = ({ element }) => {
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
				<img
					src={logo}
					alt=''
				/>
			</div>
			<div className={styles.menuWrapper}>
				<p
					onClick={() => {
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
						const y =
							element.brandRef.current.getBoundingClientRect()
								.top + window.scrollY;
						window.scroll({
							top: y,
							behavior: 'smooth',
						});
					}}
				>
					Brands
				</p>
			</div>
			<div className={styles.menuBtn}>
				<AiOutlineMenu />
			</div>
			<div
				className={
					showSidebar
						? `${styles.sidebar}${styles.open}`
						: styles.sidebar
				}
			></div>
		</div>
	);
};

export default Header;
