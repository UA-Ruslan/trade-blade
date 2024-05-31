import styles from './trade-blade-card.module.scss';
import sprite from '../../../assets/images/sprites/sprite.svg';

const TradeBladeCard = ({ id, title, subtitle }) => {
	return (
		<article
			data-aos="fade-up"
			data-aos-duration="1500"
			className={styles.trade_blade__card_wrapper}
		>
			<div className={styles.card_icon__wrapper}>
				<svg className={styles.card_icon}>
					<use xlinkHref={`${sprite}#${id}`} />
				</svg>
			</div>
			<div className={styles.card_content}>
				<h3 className={styles.card_content_title}>{title}</h3>
				<p className={styles.card_content_subtitle}>{subtitle}</p>
			</div>
		</article>
	);
};

export default TradeBladeCard;
