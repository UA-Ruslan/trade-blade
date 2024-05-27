import { useState, useEffect } from 'react';
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import styles from './header.module.scss';

const Header = ({ setDropdownActive }) => {
	const [transform, setTransform] = useState(() => {
		const screenWidth = window.innerWidth;
		return screenWidth <= 1280 ? 'scale(0.8)' : 'scale(1)';
	});

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			setTransform(screenWidth <= 1280 ? 'scale(0.8)' : 'scale(1)');
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className={styles.header}>
			<div className={`${styles.header__container} container`}>
				<Logo transform={transform} width={'13.1rem'} height={'6.4rem'} />
				<Navbar setDropdownActive={setDropdownActive} renderIn={'header'} />
				<div className={styles.header__buttons_wrapper}>
					<button className={`button_common ${styles.header__enter_btn}`}>
						<span className={styles.button_title}>вхід</span>
					</button>
					<button className={`button_common ${styles.header__registration_btn}`}>
						<span className={styles.button_title}>реєстрація</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
