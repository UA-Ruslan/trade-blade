import Navbar from '../../navbar/Navbar';
import styles from './dropdown-menu.module.scss';

const DropdownMenu = ({ isDropdownActive, setDropdownActive }) => {
	const handleStopPropagation = (e) => {
		e.stopPropagation();
	};

		const handleClick = () => {
			setDropdownActive(false);
		};
	return (
		<aside
			onClick={handleStopPropagation}
			className={
				isDropdownActive ? `${styles.dropdown_menu} ${styles.dropdown_menu_active}` : styles.dropdown_menu
			}
		>
			<article className={styles.dropdown_menu__navbar_wrapper}>
				<Navbar setDropdownActive={setDropdownActive} renderIn={'dropdown'} />
			</article>

			<article className={styles.dropdown_menu__buttons_wrapper}>
				<button onClick={handleClick} className={`button_common ${styles.dropdown_menu__enter_btn}`}>
					<span className={styles.dropdown_menu__button_title}>вхід</span>
				</button>
				<button onClick={handleClick} className={`button_common ${styles.dropdown_menu__registration_btn}`}>
					<span className={styles.dropdown_menu__button_title}>реєстрація</span>
				</button>
			</article>
		</aside>
	);
};

export default DropdownMenu;
