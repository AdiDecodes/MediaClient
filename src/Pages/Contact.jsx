import React, {
	useEffect,
	useState,
} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import styles from '../Styles/Contact.module.scss';
import { LuMapPin, LuMail } from 'react-icons/lu';
import { BsPhoneVibrate } from 'react-icons/bs';
import {
	FaFacebookF,
	FaTwitter,
} from 'react-icons/fa';
import {
	AiOutlineInstagram,
	AiOutlineMail,
	AiOutlineSend,
} from 'react-icons/ai';
const Contact = () => {
	const [formData, setFormData] = useState({
		Clientname: '',
		email: '',
		phone: '',
		category: '',
		message: '~~~~~None~~~~~',
	});

	const SubmitClicked = () => {
		const isEmpty = Object.values(formData).some(
			(value) => value === null || value === ''
		);

		if (!isEmpty) {
			const validatePhone = (num) => {
				const regex = /^\\d{12}$/;
				const isValid = regex.test(num);
				return isValid;
			};

			const validateEmail = (email) => {
				const regex =
					/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z]{2,})+$/;
				const isValid = regex.test(email);
				return isValid;
			};

			if (validatePhone(formData.phone)) {
				if (validateEmail(formData.email)) {
					console.log('Form Valid');
				} else {
					console.log('Email Galat');
				}
			} else {
				console.log('Phone Galat');
			}
		} else {
			console.log('Kuch to khali hai');
		}
	};
	const [Services, setServices] = useState([
		{
			id: 0,
			title: 'Select a category',
		},
		{
			id: 1,
			title: 'Digital Marketing',
		},
		{
			id: 2,
			title: 'Social Media Management',
		},
		{
			id: 3,
			title: 'Focused Instagram Marketing',
		},
		{
			id: 4,
			title: 'Meme Marketing',
		},
		{
			id: 5,
			title: 'Influencer Marketing',
		},
		{
			id: 6,
			title: 'Brand Building',
		},
		{
			id: 7,
			title: 'PR Agency Services',
		},
		{
			id: 8,
			title: 'Affiliate Marketing',
		},
		{
			id: 9,
			title: 'Web Design & Development',
		},
		{
			id: 10,
			title: 'Content Creation & Strategy',
		},
		{
			id: 11,
			title: 'SEO & SEM Services',
		},
		{
			id: 12,
			title: 'Growth Marketing Strategies',
		},
		{
			id: 13,
			title: 'IT Services',
		},
	]);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	useEffect(() => {
		new FinisherHeader({
			count: 200,
			size: {
				min: 2,
				max: 8,
				pulse: 0.1,
			},
			speed: {
				x: {
					min: 0,
					max: 0.4,
				},
				y: {
					min: 0,
					max: 0.6,
				},
			},
			colors: {
				background: '#000000',
				particles: [
					'#ffffff',
					'#ffffff',
					'#ffffff',
					'#ffffff',
					'#ffffff',
					'#ffffff',
					'#ffffff',
				],
			},
			blending: 'screen',
			opacity: {
				center: 1,
				edge: 0.05,
			},
			skew: 0,
			shapes: ['s', 't'],
		});
	}, []);
	return (
		<>
			<Header />
			<div
				className={`${styles.Globalwrapper} header finisher-header`}
			>
				<div className={styles.bgBlack}>
					<div className={styles.wrapper}>
						<h3>Get in Touch</h3>
						<p>
							Have a project you're working on? Let us
							know how we can help.
						</p>
					</div>
				</div>
				<div className={styles.form}>
					<div className={styles.left}>
						<div className={styles.upper}>
							<h3>Send us a Message</h3>
							<AiOutlineMail />
						</div>
						<div className={styles.formWrapper}>
							<div className={styles.formInner}>
								<input
									placeholder='Name'
									type='text'
									className={styles.input}
									onChange={(e) => {
										setFormData((prev) => ({
											...prev,
											Clientname: e.target.value,
										}));
									}}
								/>
								<input
									placeholder='Email'
									type='text'
									className={styles.input}
									onChange={(e) => {
										setFormData((prev) => ({
											...prev,
											email: e.target.value,
										}));
									}}
								/>
							</div>
							<div className={styles.formInner}>
								<input
									placeholder='Phone Number'
									type='text'
									className={styles.input}
									onChange={(e) => {
										setFormData((prev) => ({
											...prev,
											phone: e.target.value,
										}));
									}}
								/>
								<select
									className={styles.selectStyle}
									onChange={(e) => {
										if (
											e.target.value != 'Select a category'
										) {
											setFormData((prev) => ({
												...prev,
												category: e.target.value,
											}));
										} else {
											setFormData((prev) => ({
												...prev,
												category: '',
											}));
										}
									}}
								>
									{Services.map((item) => {
										return (
											<option
												key={item.id}
												value={item.title}
											>
												{item.title}
											</option>
										);
									})}
								</select>
							</div>
							<textarea
								placeholder='Message (Optional)'
								type='text'
								className={styles.inputMessage}
								maxLength='750'
								onChange={(e) => {
									if (e.target.value != '') {
										setFormData((prev) => ({
											...prev,
											message: e.target.value,
										}));
									} else {
										setFormData((prev) => ({
											...prev,
											message: '~~~~~None~~~~~',
										}));
									}
								}}
							/>
							<div
								className={styles.submitBtn}
								onClick={SubmitClicked}
							>
								<p>Submit</p>
								<AiOutlineSend />
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<h3>Contact Information</h3>
						<div
							className={styles.contactInfo}
							onClick={() => {
								window.open(
									'https://goo.gl/maps/wyk6TRMwgubjscgv6',
									'!blank'
								);
							}}
						>
							<LuMapPin />
							<h3>
								59, Marathahalli Building, Pushkar,
								Rajathan, 494212
							</h3>
						</div>
						<div className={styles.contactInfo}>
							<BsPhoneVibrate />
							<h3>+91 85458 65895</h3>
						</div>
						<div
							className={styles.contactInfo}
							onClick={() => {
								window.open(
									'mailto:firdausmedia.com',
									'!blank'
								);
							}}
						>
							<LuMail />
							<h3>contact@firdausmedia.com</h3>
						</div>
						<div className={styles.socials}>
							<div className={styles.iconHolder}>
								<AiOutlineInstagram />
							</div>
							<div className={styles.iconHolder}>
								<FaFacebookF />
							</div>
							<div className={styles.iconHolder}>
								<FaTwitter />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
