import styles from './feedback.module.scss';
import user1 from '../../assets/images/sections/feedback/ArtemGuriev.png';
import user2 from '../../assets/images/sections/feedback/XPonse.png';
import user3 from '../../assets/images/sections/feedback/gWagon.png';
import user4 from '../../assets/images/sections/feedback/sanyaMnS.png';

const Feedback = () => {
	return (
		<section id="feedback" className={styles.section__feedback}>
			<div className={`${styles.feedback__container} container`}>
				<h2 className={styles.feedback__title}>Відгуки учасників ком&#39;юніті</h2>
				<ul className={styles.feedback__card_list}>
					<li data-aos="fade-right" className={styles.feedback__card_list_item}>
						<div className={styles.feedback__user_icon_wrapper}>
							<img className={styles.feedback__user_icon} src={user1} alt="Artem Guriev" />
						</div>
						<div className={styles.feedback__card_content}>
							<h3 className={styles.feedback__user_name}>@ArtemGuriev</h3>
							<span className={styles.feedback__profit}>Загальний прибуток: 3043.27 USD</span>
							<p className={styles.feedback__user_feedback}>
								Я запустив спот-бота 5 січня. За 25 днів я заробив понад 3 тисячі на споті без жодних збитків
								і без страху ліквідації. Велике спасибі TradeBlade за створення такого чудового бота.
							</p>
						</div>
					</li>
					<li data-aos="fade-left" className={styles.feedback__card_list_item}>
						<div className={styles.feedback__user_icon_wrapper}>
							<img className={styles.feedback__user_icon} src={user2} alt="X Ponse" />
						</div>
						<div className={styles.feedback__card_content}>
							<h3 className={styles.feedback__user_name}>@XPonse</h3>
							<span className={styles.feedback__profit}>Розмір загального прибутку не розголошується.</span>
							<p className={styles.feedback__user_feedback}>
								Мій капітал - 2000 доларів. Якщо я заробляю 10 доларів на день, то за місяць я заробляю 300
								доларів. Це означає, що я отримую 15% в місяць, що є більш ніж достатньо для мене.
							</p>
						</div>
					</li>
					<li data-aos="fade-right" className={styles.feedback__card_list_item}>
						<div className={styles.feedback__user_icon_wrapper}>
							<img className={styles.feedback__user_icon} src={user3} alt="G Wagon" />
						</div>
						<div className={styles.feedback__card_content}>
							<h3 className={styles.feedback__user_name}>@gWagon</h3>
							<span className={styles.feedback__profit}>Загальний прибуток не розголошується.</span>
							<p className={styles.feedback__user_feedback}>
								Я спробував. Сподобалося. Рекомендую? Так. Але я розумію, що чим більше людей, тим менше може
								бути прибутку...
							</p>
						</div>
					</li>
					<li data-aos="fade-left" className={styles.feedback__card_list_item}>
						<div className={styles.feedback__user_icon_wrapper}>
							<img className={styles.feedback__user_icon} src={user4} alt="Sanya Mn S" />
						</div>
						<div className={styles.feedback__card_content}>
							<h3 className={styles.feedback__user_name}>@sanyaMnS</h3>
							<span className={styles.feedback__profit}>Загальний прибуток: 4 405.96 USD</span>
							<p className={styles.feedback__user_feedback}>
								Спочатку я трохи розчарувався, так як заробив лише 4 долари з одної великої угоди. Але
								зрозумів, що все одно вийшов у плюс. На наступній угоді все пішло вгору.
							</p>
						</div>
					</li>
				</ul>
				<button className={`${styles.feedback__btn} button_common`}>
					<span className={`${styles.feedback__btn_title} btn_title`}>Завантажити більще відгуків</span>
				</button>
			</div>
		</section>
	);
};

export default Feedback;
