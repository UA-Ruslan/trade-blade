import styles from './quick-deal-copy.module.scss';
import quickCopyImg from '../../assets/images/sections/quickDealCopy/quickDealCopy.png';
import Form from '../../components/form/Form';

const QuickDealCopy = () => {
	return (
		<section className={styles.section_quick_copy}>
			<div className={`${styles.quick_copy__container} container`}>
				<article
					data-aos="fade-right"
					data-aos-duration="1200"
					className={styles.quick_copy__content_wrapper}
				>
					<h1 className={styles.quick_copy__title}>миттєво копіюй угоди профі трейдерів</h1>

					<p className={styles.quick_copy__text}>
						Почни копіювати угоди з успішною командою професійних трейдерів в автоматичному режимі.
					</p>

					<Form btnTitle={'почати'} ownStyle={'quick_copy__form'} />

					<span className={styles.quick_copy__free_days_text}>5 днів безкоштовного користування</span>
				</article>

				<div data-aos="fade-left" data-aos-duration="1200" className={styles.quick_copy__img_wrapper}>
					<img className={styles.quick_copy__img} src={quickCopyImg} alt="Quick Copy" />
				</div>
			</div>
		</section>
	);
};

export default QuickDealCopy;
