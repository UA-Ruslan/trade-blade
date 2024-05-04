import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.header__container} container`}>
				<Logo width={'13.1rem'} height={'6.4rem'} />
				<Navbar renderIn={'header'} />
				<div className={styles.header__buttons_wrapper}>
					<button className={`button_common ${styles.header__enter_btn}`}>
						<span className={styles.button_title}>вход</span>
					</button>
					<button className={`button_common ${styles.header__registration_btn}`}>
						<span className={styles.button_title}>регистрация</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
