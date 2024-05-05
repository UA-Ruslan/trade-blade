import { useState } from 'react';
import styles from './logo.module.scss';
import sprite from '../../assets/images/sprites/sprite.svg';

const Logo = ({ width, height, transform }) => {
	const [isLogoActive, setLogoActive] = useState(false);

	const logoStyle = {
		minWidth: width,
		width: width,
		height: height,
		transform: transform ? transform : '',
	};

	const handleMouseEnter = () => {
		setLogoActive(true);
	};
	const handleMouseLeave = () => {
		setLogoActive(false);
	};
	return (
		<article style={logoStyle} className={styles.logo_wrapper}>
			<a
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={styles.logo_link}
				href="/"
			>
				<svg className={styles.logo_icon}>
					<use xlinkHref={`${sprite}#logo`} />
				</svg>
				<svg
					className={`${styles.logo_icon} ${styles.logo_top_icon}  ${
						isLogoActive ? styles.logo_icon__active : ''
					}`}
				>
					<use xlinkHref={`${sprite}#logo-active`} />
				</svg>

				<svg className={styles.logo_text}>
					<use xlinkHref={`${sprite}#logo-text`} />
				</svg>
				<svg className={`${styles.logo_top_text}  ${isLogoActive ? styles.logo_top_text__active : ''}`}>
					<use xlinkHref={`${sprite}#logo-text-active`} />
				</svg>
			</a>
		</article>
	);
};

export default Logo;
