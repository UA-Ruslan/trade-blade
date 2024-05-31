import Form from '../../components/form/Form';
import styles from './about-company.module.scss';

const AboutCompany = () => {
	return (
		<section id="about" className={styles.section_about_company}>
			<div className={`${styles.about_company__container} container`}>
				<article
					data-aos="fade-up"
					data-aos-duration="1500"
					className={styles.about_company__content_wrapper}
				>
					<h2 className={styles.about_company__content_title}>Про компанію</h2>
					<p className={styles.about_company__content_text}>
						Ми досвідчена команда, для якої трейдинг – професія. TradeBlade є авторизованим офіційним брокером
						біржі Binance.
						<br />
						<br />
						Він пропонує користувачам безліч переваг, таких як вища швидкість синхронізації API та можливість
						створити обліковий запис Binance через платформу TradeBlade всього в 1 клік.
					</p>
				</article>
				<article data-aos="flip-left" className={styles.about_company__form_wrapper}>
					<h3
						data-aos="zoom-in"
						data-aos-delay="500"
						data-aos-duration="1500"
						className={styles.about_company__form_title}
					>
						Спробуйте зараз і отримайте <br /> 5 днів безкоштовного користування
					</h3>

					<Form btnTitle={'Спробувати'} ownStyle={'about_company__form'} />
				</article>
			</div>
		</section>
	);
};

export default AboutCompany;
