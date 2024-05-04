import Slider from '../../slider/Slider';
import styles from './past-deals.module.scss';

const PastDeals = () => {
	return (
		<section className={styles.section__past_deals}>
			<div className={`${styles.past_deals__container} container`}>
				<h2 className={styles.past_deals__title}>Прошедшие сделки</h2>
				<span className={styles.past_deals__subtitle}>Онлайн</span>

				<div className={styles.past_deals__slider_wrapper}>
					<Slider />
				</div>
			</div>
		</section>
	);
};
export default PastDeals;
