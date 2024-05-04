import styles from './numbers.module.scss';

const Numbers = () => {
	return (
		<section className={styles.section_numbers}>
			<div className={`${styles.numbers__container} container`}>
				<div className={styles.numbers__title_wrapper}>
					<h2 className={styles.numbers__title}>Цифры</h2>
					<span className={styles.numbers__subtitle}>Cентябрь 2022</span>
				</div>

				<ul className={styles.numbers__list}>
					<li className={`${styles.numbers__list_item} ${styles.first_item}`}>
						<p className={styles.list_item_title}>Торговой прибыли</p>
						<span className={styles.list_item_value}>2756%</span>
					</li>
					<li className={`${styles.numbers__list_item} ${styles.second_item}`}>
						<p className={styles.list_item_title}>фьючерсных и спотовых сделок</p>
						<span className={styles.list_item_value}>67</span>
					</li>
					<li className={`${styles.numbers__list_item} ${styles.third_item}`}>
						<p className={styles.list_item_title}>прибыль подписчиков</p>
						<span className={styles.list_item_value}>375000</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Numbers;
