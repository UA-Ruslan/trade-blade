import styles from './slider.module.scss';
import { slidesData } from '../../static/slider-data';
import sprite from '../../assets/images/sprites/sprite.svg';

import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const Slider = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const scroll = document.querySelector('.swiper-scrollbar-drag');
		const scrollbar = document.querySelector('.swiper-scrollbar');
		if (scroll && scrollbar) {
			scroll.style.background = '#6073A1';
			scrollbar.style.cssText = `background: rgba(67, 79, 112, 0.4); height: .6rem; width: ${
				windowWidth > 768 ? 66 : 90
			}%; position: absolute; top: 100%; left: 50%;transform: translate(${windowWidth > 768 ? -57 : -53}%, -100%);`;
		}
	}, [windowWidth]);

	return (
		<div style={{ overflow: 'hidden !important' }}>
			<Swiper
				className={styles.slider}
				modules={[Scrollbar, A11y]}
				spaceBetween={20}
				slidesPerView={4.3}
				scrollbar={{ draggable: true }}
				breakpoints={{
					50: {
						slidesPerView: 1.1,
					},
					320: {
						slidesPerView: 1.2,
					},
					425: {
						slidesPerView: 1.2,
					},
					768: {
						slidesPerView: 2.2,
					},
					1024: {
						slidesPerView: 3.2,
					},
					1280: {
						slidesPerView: 4.3,
					},
				}}
			>
				{slidesData.map((slide) => {
					return (
						<SwiperSlide key={slide.id} className={styles.slide}>
							<span className={styles.slide__title}>{slide.title}</span>
							<span className={styles.slide__spot}>{slide.spot}</span>
							<span className={styles.slide__profit}>{slide.profit}</span>
							<span className={styles.slide__value}>
								{slide.value}
								<svg className={styles.slide__arrow}>
									<use xlinkHref={`${sprite}#slide-arrow`} />
								</svg>
							</span>
							<div className={styles.slide__target_date_wrapper}>
								<span className={styles.slide__target}>{slide.target}</span>
								<span className={styles.slide__date}>{slide.date}</span>
							</div>
							<svg className={styles.slide__icon}>
								<use xlinkHref={`${sprite}#slide-icon`} />
							</svg>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
