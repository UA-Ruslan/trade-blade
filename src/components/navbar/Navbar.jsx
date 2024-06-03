import styles from './navbar.module.scss';

const Navbar = ({ renderIn, setDropdownActive }) => {
	let className = styles.navbar;
	switch (renderIn) {
		case 'header':
			className = styles.navbar_header;
			break;
		case 'footer':
			className = styles.navbar_footer;
			break;
		case 'dropdown':
			className = styles.navbar_dropdown;
			break;
	}

	const handleClick = () => { 
		setDropdownActive(false);
	}
	return (
		<nav className={className}>
			<ul className={styles.navbar_list}>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#numbers"
					>
						цифри
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#past-deals"
					>
						угоди онлайн
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#about"
					>
						про компанію
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#how-to-start"
					>
						як почати
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#tariffs"
					>
						тарифи
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#feedback"
					>
						відгуки
					</a>
				</li>
				<li className={styles.navbar_list_item}>
					<a
						onClick={handleClick}
						className={`${styles.navbar_link} ${styles.navbar_link_common}`}
						href="#faq"
					>
						faq
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
