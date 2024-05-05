import styles from './dropdown-btn.module.scss';

const DropdownBtn = ({ isDropdownActive, setDropdownActive }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		setDropdownActive(!isDropdownActive);
	};

	return (
		<div
			className={
				isDropdownActive
					? `${styles.dropdown_btn_wrapper} ${styles.dropdown_btn_active}`
					: styles.dropdown_btn_wrapper
			}
		>
			<button onClick={handleClick} className={styles.dropdown_btn}>
				<span className={styles.dropdown_btn_item}></span>
				<span className={`${styles.dropdown_btn_item} ${styles.dropdown_btn_second_item}`}></span>
			</button>
		</div>
	);
};

export default DropdownBtn;
