import React, {
	useEffect,
	useState,
	useRef,
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
import axios from 'axios';
import {
	ToastContainer,
	toast,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PuffLoader from 'react-spinners/PuffLoader';
const Contact = () => {
	const [formData, setFormData] = useState({
		clientname: '',
		email: '',
		phone: '',
		category: '',
		message: '',
	});

	const SubmitClicked = () => {
		const isEmpty = Object.values(formData).some(
			(value) => value === null || value === ''
		);

		if (!isEmpty) {
			const sendMail = async () => {
				showToast('Sending Mail');
				const options = {
					method: 'POST',
					url: 'https://mediaclient-backend.vercel.app/',
					// url: 'http://localhost:4000/',
					headers: {
						'Content-Type': 'application/json',
					},
					data: formData,
				};
				const response = await axios.request(options);
				if (response.data.status === 'success') {
					updateToast('Mail Sent', true);
					setFormData({
						clientname: '',
						email: '',
						phone: '',
						category: '',
						message: '',
					});
				} else {
					updateToast('Mail Not Sent', false);
				}
			};
			const validatePhone = (num) => {
				const regexP = /^(\+91|0)?[6789]\d{9}$/;
				const isValid = regexP.test(num);
				return isValid;
			};

			const validateEmail = (email) => {
				const regex =
					/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				const isValid = regex.test(email);
				return isValid;
			};

			if (validatePhone(formData.phone)) {
				if (validateEmail(formData.email)) {
					console.log('Form Valid');
					sendMail();
				} else {
					errorMsg('Invalid Email');
				}
			} else {
				errorMsg('Invalid Phone Number');
			}
		} else {
			errorMsg('Please fill all the fields');
		}
	};

	const toastRef = useRef(null);

	const toastProps = {
		position: 'top-right',
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		autoClose: 5000,
		draggable: true,
		progress: undefined,
		theme: 'light',
	};

	const updateToast = (message, success) => {
		if (success == true) {
			toast.update(toastRef.current, {
				hideProgressBar: false,
				type: toast.TYPE.SUCCESS,
				render: message,
				autoClose: 5000,
				closeButton: null,
			});
		} else {
			toast.update(toastRef.current, {
				hideProgressBar: false,
				type: toast.TYPE.ERROR,
				render: message,
				autoClose: 5000,
				closeButton: null,
			});
		}
	};

	const errorMsg = (msg) => {
		toast.error(msg);
	};

	const showToast = (message) => {
		toastRef.current = toast(
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<PuffLoader
					size={40}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
				<span style={{ margin: '0 0 0 15px' }}>
					{message}
				</span>
			</div>,
			toastProps
		);
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

	return (
		<div className={styles.transitionWrapper}>
			<Header />
			<div
				className={styles.Globalwrapper}
				transition-style='in:wipe:up'
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
											clientname: e.target.value,
										}));
									}}
									value={formData.clientname}
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
									value={formData.email}
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
									value={formData.phone}
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
									value={formData.category}
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
											message: '~~None~~',
										}));
									}
								}}
								value={formData.message}
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
									'https://maps.app.goo.gl/UyyjbzNHPYk4jprVA',
									'!blank'
								);
							}}
						>
							<LuMapPin />
							<h3>
								S37, 2nd floor, KRW executive center, Plot
								No. 270, Phase 2, Udyog Vihar, Sector 20,
								Gurugram, Haryana 122016
							</h3>
						</div>
						<div className={styles.contactInfo}>
							<BsPhoneVibrate />
							<h3>+91 82788 16765</h3>
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
							<div
								className={styles.iconHolder}
								onClick={() => {
									window.open(
										'https://www.instagram.com/firdausxmedia/',
										'_blank'
									);
								}}
							>
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
			<ToastContainer />
		</div>
	);
};

export default Contact;
