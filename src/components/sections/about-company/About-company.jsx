import Form from '../../form/Form';
import styles from './about-company.module.scss';

const AboutCompany = () => {
	return (
		<section className={styles.section_about_company}>
			<div className={`${styles.about_company__container} container`}>
				<article className={styles.about_company__content_wrapper}>
					<h2 className={styles.about_company__content_title}>О компании</h2>
					<p className={styles.about_company__content_text}>
						Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным
						официальным брокером биржи Binance.
						<br />
						<br />
						Он представляет пользователям множество преимуществ, таких как более високая скорость
						синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в
						1 клик.
					</p>
				</article>
				<article className={styles.about_company__form_wrapper}>
					<h3 className={styles.about_company__form_title}>
						Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования
					</h3>

					<Form btnTitle={'попробовать'} ownStyle={'about_company__form'} />
				</article>
			</div>
		</section>
	);
};

export default AboutCompany;
