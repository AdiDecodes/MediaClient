import React from 'react';
import styles from './Styles/Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.MainWrapper}>
			<div className={styles.loader}></div>
			<h3>Loading</h3>
		</div>
	);
};

export default Loader;
