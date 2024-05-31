import { useState } from 'react';
import styles from './tariffs.module.scss';
import sprite from '../../assets/images/sprites/sprite.svg';

const Tariffs = () => {
	const [radioBtnToggle, setRadioBtnToggle] = useState('spot');

	const handleToggle = (e) => {
		const radioBtnValue = e.target.value;
		setRadioBtnToggle(radioBtnValue);
	};

	return (
		<section id="tariffs" className={styles.section__tariffs}>
			<div className={`${styles.tariffs__container} container`}>
				<div className={styles.tariffs__left_content}>
					<h2 className={styles.tariffs__left_title}>тарифи</h2>
					<form className={styles.tariffs__radio_btn_wrapper}>
						<input
							onChange={handleToggle}
							className={styles.tariffs__radio_btn}
							type="radio"
							id="spot"
							name="tariff"
							value="spot"
							checked={radioBtnToggle === 'spot'}
						/>
						<label
							className={
								radioBtnToggle === 'spot'
									? `${styles.tariffs__radio_btn_label} ${styles.label__active}`
									: styles.tariffs__radio_btn_label
							}
							htmlFor="spot"
						>
							спот
						</label>

						<input
							onChange={handleToggle}
							className={styles.tariffs__radio_btn}
							type="radio"
							id="futures"
							name="tariff"
							value="futures"
						/>
						<label
							className={
								radioBtnToggle === 'futures'
									? `${styles.tariffs__radio_btn_label} ${styles.label__active}`
									: styles.tariffs__radio_btn_label
							}
							htmlFor="futures"
						>
							ф&apos;ючерс
						</label>
					</form>
					<article
						data-aos="fade-right"
						data-aos-delay="700"
						className={`${styles.tariffs__left_card} ${styles.card_common}`}
					>
						<div className={styles.card__top_content}>
							<span className={styles.card__title}>standart</span>
							<ul className={styles.card__list}>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Ручний трейдинг
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Автоматичне або напівавтоматичне копіювання угод
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Особистий кабінет зі статистикою
								</li>
								<li className={styles.card__list_item}>
									<svg className={styles.card__list_check_icon}>
										<use xlinkHref={`${sprite}#check`} />
									</svg>
									Середньострокові угоди з рівнями формування портфеля
								</li>
							</ul>
						</div>
						<div className={styles.card__bottom_content}>
							<div className={styles.card__price_wrapper}>
								<span className={styles.card__price}>$234</span>
								<div className={styles.card__dropdown_wrapper}>
									<select className={styles.card__dropdown} name="interval" id="interval">
										<option className={styles.card__dropdown_item} value="12">
											12 місяців
										</option>
										<option className={styles.card__dropdown_item} value="6">
											6 місяців
										</option>
										<option className={styles.card__dropdown_item} value="1">
											1 місяц
										</option>
									</select>
									<svg className={styles.card__dropdown_arrow}>
										<use xlinkHref={`${sprite}#card-dropdown-arrow`} />
									</svg>
								</div>
							</div>
							<button className={`${styles.card__btn} button_common`}>
								<span className={styles.card__btn_title}>Спробувати</span>
								<span className={`${styles.card__btn_title} ${styles.card__btn_subtitle}`}>
									5 днів безкоштовно
								</span>
							</button>
						</div>
					</article>
				</div>

				<article
					data-aos="fade-left"
					data-aos-delay="700"
					className={`${styles.tariffs__right_card} ${styles.card_common}`}
				>
					<div className={styles.card__top_content}>
						<span className={styles.card__title}>vip</span>
						<ul className={styles.card__list}>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Ручний трейдинг
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Автоматичне або напівавтоматичне копіювання угод
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Особистий кабінет зі статистикою
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Короткострокові, середньострокові та інвестиційні угоди
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Доступ до VIP-чату з командою
							</li>
							<li className={styles.card__list_item}>
								<svg className={styles.card__list_check_icon}>
									<use xlinkHref={`${sprite}#check`} />
								</svg>
								Наш авторський курс з трейдингу
							</li>
						</ul>
					</div>
					<div className={styles.card__bottom_content}>
						<div className={styles.card__price_wrapper}>
							<span className={styles.card__price}>$585</span>
							<div className={styles.card__dropdown_wrapper}>
								<select className={styles.card__dropdown} name="interval" id="interval">
									<option className={styles.card__dropdown_item} value="12">
										12 місяців
									</option>
									<option className={styles.card__dropdown_item} value="6">
										6 місяців
									</option>
									<option className={styles.card__dropdown_item} value="1">
										1 місяц
									</option>
								</select>
								<svg className={styles.card__dropdown_arrow}>
									<use xlinkHref={`${sprite}#card-dropdown-arrow`} />
								</svg>
							</div>
						</div>
						<button className={`${styles.card__btn} button_common`}>
							<span className={styles.card__btn_title}>Спробувати</span>
							<span className={`${styles.card__btn_title} ${styles.card__btn_subtitle}`}>
								5 днів безкоштовно
							</span>
						</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Tariffs;
