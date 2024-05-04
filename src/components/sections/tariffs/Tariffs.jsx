import { useState } from 'react';
import styles from './tariffs.module.scss';
import sprite from '../../../assets/images/sprites/sprite.svg';

const Tariffs = () => {
	const [radioBtnToggle, setRadioBtnToggle] = useState('spot');

	const handleToggle = (e) => {
		const radioBtnValue = e.target.value;
		setRadioBtnToggle(radioBtnValue);
	};

	return (
		<section className={styles.section__tariffs}>
			<div className={`${styles.tariffs__container} container`}>
				<div className={styles.tariffs__left_content}>
					<h2 className={styles.tariffs__left_title}>тарифы</h2>
					<div className={styles.tariffs__left_inputs_wrapper}>
						<input
							onChange={handleToggle}
							className={styles.tariffs__left_input}
							type="radio"
							id="spot"
							name="tariff"
							value="spot"
							checked={radioBtnToggle === 'spot'}
						/>
						<label
							className={
								radioBtnToggle === 'spot'
									? `${styles.tariffs__left_label} ${styles.label__active}`
									: styles.tariffs__left_label
							}
							htmlFor="spot"
						>
							спот
						</label>

						<input
							onChange={handleToggle}
							className={styles.tariffs__left_input}
							type="radio"
							id="futures"
							name="tariff"
							value="futures"
						/>
						<label
							className={
								radioBtnToggle === 'futures'
									? `${styles.tariffs__left_label} ${styles.label__active}`
									: styles.tariffs__left_label
							}
							htmlFor="futures"
						>
							фьючерс
						</label>
					</div>
					<article className={`${styles.tariffs__left_card} ${styles.card_common}`}>
						<div className={styles.card__top_content}>
							<span className={styles.card__title}>standart</span>
							<ul className={styles.card__list}>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Ручной трейдинг
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Автоматическое или полуавтоматическое копирование сделок
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Личный кабинет со статистикой
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Среднесрочные сделки с уровнями набора портфеля
								</li>
							</ul>
						</div>
						<div className={styles.card__bottom_content}>
							<div className={styles.card__price_wrapper}>
								<span className={styles.card__price}>$234</span>
								<div className={styles.card__dropdown_wrapper}>
									<select className={styles.card__dropdown} name="interval" id="interval">
										<option className={styles.card__dropdown_item} value="12">
											12 месяцев
										</option>
										<option className={styles.card__dropdown_item} value="6">
											6 месяцев
										</option>
										<option className={styles.card__dropdown_item} value="1">
											1 месяц
										</option>
									</select>
									<svg className={styles.card__dropdown_arrow}>
										<use xlinkHref={`${sprite}#card-dropdown-arrow`} />
									</svg>
								</div>
							</div>
							<button className={`${styles.card__btn} button_common`}>
								<span className={styles.card__btn_title}>Попробовать</span>
								<span className={`${styles.card__btn_title} ${styles.card__btn_subtitle}`}>
									5 дней бесплатно
								</span>
							</button>
						</div>
					</article>
				</div>

				<article className={`${styles.tariffs__right_card} ${styles.card_common}`}>
					<div className={styles.card__top_content}>
						<span className={styles.card__title}>vip</span>
						<ul className={styles.card__list}>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Ручной трейдинг
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Автоматическое или полуавтоматическое копирование сделок
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Личный кабинет со статистикой
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Краткосрочные, среднесрочные и инвест сделки
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Доступ в Vip чат с командой
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Наш авторский курс по трейдингу
							</li>
						</ul>
					</div>
					<div className={styles.card__bottom_content}>
						<div className={styles.card__price_wrapper}>
							<span className={styles.card__price}>$585</span>
							<div className={styles.card__dropdown_wrapper}>
								<select className={styles.card__dropdown} name="interval" id="interval">
									<option className={styles.card__dropdown_item} value="12">
										12 месяцев
									</option>
									<option className={styles.card__dropdown_item} value="6">
										6 месяцев
									</option>
									<option className={styles.card__dropdown_item} value="1">
										1 месяц
									</option>
								</select>
								<svg className={styles.card__dropdown_arrow}>
									<use xlinkHref={`${sprite}#card-dropdown-arrow`} />
								</svg>
							</div>
						</div>
						<button className={`${styles.card__btn} button_common`}>
							<span className={styles.card__btn_title}>Попробовать</span>
							<span className={`${styles.card__btn_title} ${styles.card__btn_subtitle}`}>
								5 дней бесплатно
							</span>
						</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Tariffs;
