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
							<h3 className={styles.how_to_start__card_title}>Создайте аккаунт</h3>
							<p>Начните бесплатную 3-дневную пробную версию. Кредитная карта не требуется.</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="300" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Подключить обмен API ключами</h3>
							<p>Просто вставьте свои ключи API из личного кабинета.</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="600" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Налаштуйте обліковий запис</h3>
							<p>Поставьте нужные настройки депозита на каждый сигнал и нажмите сохранить.</p>
						</li>
						<li data-aos="fade-up" data-aos-delay="900" className={styles.how_to_start__card_list_item}>
							<h3 className={styles.how_to_start__card_title}>Ваш копитрейдер запущен</h3>
							<p>
								Просто расслабьтесь и начните получать пассивный доход от криптовалюты с помощью TradeBlade
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
