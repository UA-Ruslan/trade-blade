import styles from './how-to-start.module.scss';

const HowToStart = () => {
	return (
		<section className={styles.section__how_to_start}>
			<div className={`${styles.how_to_start__container} container`}>
				<h2 className={styles.how_to_start__title}>Як розпочати користуватися сервісом</h2>
				<ul className={styles.how_to_start__card_list}>
					<li>
						<h3>title</h3>
						<p>subtitle</p>
					</li>
					<li>
						<h3>title</h3>
						<p>subtitle</p>
					</li>
					<li>
						<h3>title</h3>
						<p>subtitle</p>
					</li>
					<li>
						<h3>title</h3>
						<p>subtitle</p>
					</li>
				</ul>
				<button className={`${styles.how_to_start__btn} button_common`}>
					<span className={styles.button_title}>Спробувати безкоштовно</span>
				</button>
			</div>
		</section>
	);
};

export default HowToStart;
