import styles from './quick-deal-copy.module.scss';
import quickCopyImg from '../../../assets/images/sections/quickDealCopy/quickDealCopy.png';
import Form from '../../form/Form';

const QuickDealCopy = () => {
	return (
		<section className={styles.section_quick_copy}>
			<div className={`${styles.quick_copy__container} container`}>
				<article className={styles.quick_copy__content_wrapper}>
					<h1 className={styles.quick_copy__title}>моментально копируй сделки профи трейдеров</h1>

					<p className={styles.quick_copy__text}>
						Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
					</p>

					<Form btnTitle={'начать'} ownStyle={'quick_copy__form'} />

					<span className={styles.quick_copy__free_days_text}>5 дней бесплатного пользования</span>
				</article>

				<div className={styles.quick_copy__img_wrapper}>
					<img className={styles.quick_copy__img} src={quickCopyImg} alt="Quick Copy" />
				</div>
			</div>
		</section>
	);
};

export default QuickDealCopy;
