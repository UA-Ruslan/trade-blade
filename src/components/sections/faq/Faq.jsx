import { useState, useEffect } from 'react';
import styles from './faq.module.scss';
import sprite from '../../../assets/images/sprites/sprite.svg';
import { faqData } from '../../../static/faq-data';

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!event.target.closest(`.${styles.faq__accordion_item}`)) {
				setActiveIndex(null);
			}
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return (
		<section id="faq" className={styles.section__faq}>
			<div className={`${styles.faq__container} container`}>
				<article className={styles.faq__content_wrapper}>
					<h2 className={styles.faq__title}>часті питання</h2>
					<div className={styles.faq__accordion}>
						{faqData.map((item, index) => (
							<div
								key={index}
								className={`${styles.faq__accordion_item} ${
									index === activeIndex ? styles.accordion_item__active : ''
								}`}
								onClick={() => handleAccordionClick(index)}
							>
								<div className={styles.faq__accordion_title_wrapper}>
									<span className={styles.accordion_item__title}>{item.question}</span>
									<svg className={styles.accordion_item__arrow_icon}>
										<use xlinkHref={`${sprite}#card-dropdown-arrow`} />
									</svg>
								</div>
								<div className={styles.faq__accordion_content_wrapper}>
									<div className={styles.faq__accordion_content}>
										{item.answer.map((paragraph, pIndex) => (
											<div key={pIndex}>
												<p className={styles.accordion_item__content}>{paragraph}</p>
												{pIndex < item.answer.length - 1 && <br />}
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Faq;
