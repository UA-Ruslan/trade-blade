import styles from './start-now.module.scss';
import Form from '../../components/form/Form';

const StartNow = () => {
	return (
		<section className={styles.section__start_now}>
			<div className={`${styles.start_now__container} container`}>
				<h3 data-aos="fade-right" data-aos-duration="1500" className={styles.start_now__title}>
					Почніть прямо зараз з безкоштовним 5-денним пробним періодом!
				</h3>
				<div data-aos="fade-left" data-aos-duration="1500" className={styles.start_now__form_wrapper}>
					<Form btnTitle="зареєструватися" ownStyle={'start_now__form'} />
				</div>
			</div>
		</section>
	);
};

export default StartNow;
