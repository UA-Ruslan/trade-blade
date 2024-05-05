import { useState, useEffect } from 'react';
import styles from './faq.module.scss';
import sprite from '../../../assets/images/sprites/sprite.svg';

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleAccordionClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
		console.log('click');
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

	const faqData = [
		{
			question: 'Что такое TradeBlade',
			answer:
				'Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.',
			answer2:
				'Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.',
		},
		{
			question: 'Что TradeBlade предлагает инвесторам',
			answer:
				'Мы сосредоточены на развитии и совершенствовании инструментов для трейдеров. TradeBlade предоставляет доступ к самым современным технологиям и аналитическим инструментам для эффективного трейдинга на бирже Binance. Наши продукты помогают снижать риски и увеличивать прибыль, делая процесс трейдинга более быстрым и эффективным.',
		},
		{
			question: 'Должен ли я перевести свои средства на TradeBlade',
			answer:
				'TradeBlade - ваш надежный партнер на пути к успешному трейдингу на бирже Binance. Мы предлагаем широкий спектр инструментов и услуг, которые позволяют настроить торговый процесс под ваши потребности. Наши эксперты предоставляют персонализированную поддержку и консультации, чтобы вы могли достигнуть своих финансовых целей быстрее и эффективнее.',
		},
	];

	return (
		<section id='faq' className={styles.section__faq}>
			<div className={`${styles.faq__container} container`}>
				<article className={styles.faq__content_wrapper}>
					<h2 className={styles.faq__title}>часто задаваемые вопросы</h2>
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
								<p className={styles.accordion_item__content}>{item.answer}</p>
								{item.answer2 ? (
									<div>
										<p><br/></p>
										<p className={styles.accordion_item__content}>{item.answer2}</p>{' '}
									</div>
								) : (
									''
								)}
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Faq;
