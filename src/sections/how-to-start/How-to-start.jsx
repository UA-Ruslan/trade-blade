import styles from './how-to-start.module.scss';

const HowToStart = () => {
	return (
		<section className={styles.section__how_to_start}>
			<div className={`${styles.how_to_start__container} container`}>
				<div className={styles.how_to_start__content_wrapper}>
					<h2 data-aos="fade-right" className={styles.how_to_start__title}>
						Як розпочати користуватися сервісом
					</h2>
					<ul className={styles.how_to_start__card_list}>
						<li data-aos="fade-up" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Створіть обліковий запис</h3>
							<p>Розпочніть із безкоштовною 3-денною пробною версією. Кредитна карта не потрібна</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="300" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Провести обмін API ключами</h3>
							<p>Просто вставте свої ключі API з особистого кабінету.</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="600" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Налаштуйте обліковий запис</h3>
							<p>Вкажіть потрібні налаштування депозиту для кожного сигналу й натисніть 'Зберегти'.</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="900" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Ваш копітрейдер запущено.</h3>
							<p>
								Просто розслабтеся і почніть отримувати пасивний дохід від криптовалюти за допомогою
								TradeBlade.
							</p>
						</li>
					</ul>
					<button className={`${styles.how_to_start__btn} button_common`}>
						<span className={styles.button_title}>Спробувати безкоштовно</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default HowToStart;
