import React, { useState } from 'react';
import styles from './Styles/Projects.module.scss';
import memeMarketingImg from '../assets/Projects/meme-marketing.jpg';
import {
	BsArrowLeft,
	BsArrowRight,
} from 'react-icons/bs';
import moviePromo from '../assets/Projects/movie-promo.jpg';

const Projects = () => {
	const [projectData, setProjectData] = useState([
		{
			id: 0,
			title: 'Bacchan Pandey',
			description: 'Movie Campaign | 50M+ Reach',
			projectURL:
				'https://www.instagram.com/reel/CaHRLm5gmIr/?igshid=YmMyMTA2M2Y%3D',
			img: 'https://i.ytimg.com/vi/-h9hj8BnTDk/maxresdefault.jpg',
		},
		{
			id: 1,
			title: 'Runway 34',
			description: 'Movie Campaign | 60M+ Reach',
			projectURL:
				'https://www.instagram.com/reel/CbbuL8ypH5V/',
			img: moviePromo,
		},
		{
			id: 2,
			title: 'Dasvi',
			description: 'Movie Campaign | 35M+ Reach',
			projectURL:
				'https://www.instagram.com/reel/CbcznlFJzBZ/?igshid=YmMyMTA2M2Y%3D',
			img: 'https://m.media-amazon.com/images/M/MV5BYWJmNmIyZDEtMmU1Ni00OGVmLWIxMzMtOTg3ZDczZDA3ZWZkXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg',
		},
	]);
	return (
		<div className={styles.wrapper}>
			<div className={styles.childWrapper}>
				<div className={styles.left}>
					<div className={styles.headingWrapper}>
						<div className={styles.headingContainer}>
							<div></div>
							<p>Our works</p>
						</div>
						<h3 className={styles.heading}>
							Our Latest Projects
						</h3>
						<div className={styles.line}></div>
						<p>
							We passionately bring your ideas to life,
							making your dreams a successful reality
							with an amazing experience.
						</p>
					</div>
				</div>
				{/* <div className={styles.right}>
					<div className={styles.arrowContainer}>
						<div className={styles.Arrow}>
							<BsArrowLeft />
						</div>
						<div className={styles.Arrow}>
							<BsArrowRight />
						</div>
					</div>
				</div> */}
			</div>

			<div className={styles.projectsWrapper}>
				{projectData.map((item) => {
					return (
						<div
							key={item.id}
							className={styles.card}
						>
							<img
								src={item.img}
								alt=''
							/>
							<div className={styles.content}>
								<div className={styles.info}>
									<p>{item.title}</p>
									<p>{item.description}</p>
								</div>
								<div
									className={styles.seeMore}
									onClick={() => {
										window.open(item.projectURL, '!blank');
									}}
								>
									See Project
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
