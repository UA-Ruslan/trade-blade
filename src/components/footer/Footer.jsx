import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import styles from './footer.module.scss';
const Footer = ({ setDropdownActive }) => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer_container} container`}>
				<article className={styles.footer__navigation_wrapper}>
					<span className={styles.footer__navigation_title}>Быстрая навигация</span>
					<Navbar setDropdownActive={setDropdownActive} renderIn={'footer'} />
				</article>
				<span className={styles.footer_line}></span>
				<article className={styles.footer__logo_wrapper}>
					<Logo height={'8rem'} width={'16.5rem'} />
					<span className={styles.footer__logo_subtitle}>© 2022 TradeBlade. All rights reserved</span>
				</article>
			</div>
		</footer>
	);
};

export default Footer;
