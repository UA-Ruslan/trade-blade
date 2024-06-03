import Slider from '../../components/slider/Slider';
import styles from './past-deals.module.scss';

const PastDeals = () => {
	return (
		<section id="past-deals" className={styles.section__past_deals}>
			<div className={`${styles.past_deals__container} container`}>
				<h2 data-aos="flip-right" className={styles.past_deals__title}>
					Минулі угоди
				</h2>
				<span data-aos="flip-right" data-aos-delay="150" className={styles.past_deals__subtitle}>
					Онлайн
				</span>

				<div data-aos="zoom-in" className={styles.past_deals__slider_wrapper}>
					<Slider />
				</div>
			</div>
		</section>
	);
};
export default PastDeals;
