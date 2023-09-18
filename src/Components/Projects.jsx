import React, { useState } from 'react';
import styles from './Styles/Projects.module.scss';
import {
	BsArrowLeft,
	BsArrowRight,
} from 'react-icons/bs';

const Projects = () => {
	const [projectData, setProjectData] = useState([
		{
			id: 0,
			title: 'MamaEarth',
			description:
				'Instagram Marketing | 19th june, 2022',
			projectURL: 'https://www.google.com',
			img: 'https://i0.wp.com/deshicompanies.com/wp-content/uploads/2021/06/Mamaearth-company.png?fit=1280%2C720&ssl=1',
		},
		{
			id: 1,
			title: 'MamaEarth',
			description:
				'Instagram Marketing | 19th june, 2022',
			projectURL: 'https://www.google.com',
			img: 'https://i0.wp.com/deshicompanies.com/wp-content/uploads/2021/06/Mamaearth-company.png?fit=1280%2C720&ssl=1',
		},
		{
			id: 2,
			title: 'MamaEarth',
			description:
				'Instagram Marketing | 19th june, 2022',
			projectURL: 'https://www.google.com',
			img: 'https://i0.wp.com/deshicompanies.com/wp-content/uploads/2021/06/Mamaearth-company.png?fit=1280%2C720&ssl=1',
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
