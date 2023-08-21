import React, { useEffect, useRef } from 'react';
import styles from './Styles/Brands.module.scss';
import netflix from '../assets/logos/netflix1.png';
import altbalaji from '../assets/logos/alt-balaji.png';
import sayastudio from '../assets/logos/netflix1.png';
import disneyhotstar from '../assets/logos/disneyhotstar.png';
import magicpin from '../assets/logos/magicpin.png';
import eloelo from '../assets/logos/eloelo.png';
import minitv from '../assets/logos/minitv.png';
import mcaffeine from '../assets/logos/mcaffeine.png';
import mamaearth from '../assets/logos/mamaearth.png';
import priyagold from '../assets/logos/priyagold.png';
import realme from '../assets/logos/realme.png';
import bingo from '../assets/logos/bingo.png';
import astrotalk from '../assets/logos/astrotalk.png';

const MarqueeBrands = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logos}>
				<div className={styles.logoSlide}>
					<img src={netflix} />
					<img src={altbalaji} />
					<img src={sayastudio} />
					<img src={disneyhotstar} />
					<img src={magicpin} />
					<img src={astrotalk} />
					<img src={mcaffeine} />
					<img src={minitv} />
					<img src={priyagold} />
					<img src={realme} />
					<img src={bingo} />
					<img src={mamaearth} />
					<img src={eloelo} />
				</div>
			</div>
		</div>
	);
};

export default MarqueeBrands;
