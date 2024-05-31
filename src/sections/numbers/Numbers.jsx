import styles from './numbers.module.scss';

const Numbers = () => {
	return (
		<section id="numbers" className={styles.section_numbers}>
			<div className={`${styles.numbers__container} container`}>
				<div data-aos="fade-down-right" className={styles.numbers__title_wrapper}>
					<h2 className={styles.numbers__title}>Цифри</h2>
					<span className={styles.numbers__subtitle}>Вересень 2022</span>
				</div>

				<ul className={styles.numbers__list}>
					<li
						data-aos="fade-down-right"
						data-aos-delay="500"
						className={`${styles.numbers__list_item} ${styles.first_item}`}
					>
						<p className={styles.list_item_title}>Торгового прибутку</p>
						<span className={styles.list_item_value}>2756%</span>
					</li>
					<li
						data-aos="fade-down-left"
						data-aos-delay="500"
						className={`${styles.numbers__list_item} ${styles.second_item}`}
					>
						<p className={styles.list_item_title}>ф&apos;ючерсних і спотових угод</p>
						<span className={styles.list_item_value}>67</span>
					</li>
					<li
						data-aos="fade-down-left"
						className={`${styles.numbers__list_item} ${styles.third_item}`}
					>
						<p className={styles.list_item_title}>прибуток підписників</p>
						<span className={styles.list_item_value}>375000</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Numbers;
