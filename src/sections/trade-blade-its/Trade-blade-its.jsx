import React from 'react';
import TradeBladeCard from './trade-bade-card/Trade-blade-card';
import styles from './trade-blade-its.module.scss';
import { cardData } from '../../static/trade-blade-card';

const TradeBladeIts = () => {
	return (
		<section className={styles.section__trade_blade_its}>
			<div className={`${styles.trade_blade_its__container} container`}>
				<h2
					data-aos="zoom-in"
					data-aos-duration="1500"
					data-aos-delay="1000"
					className={styles.trade_blade_its__title}
				>
					tradeblade це
				</h2>
				<div className={styles.trade_blade_its__content}>
					{cardData.map((item) => {
						return (
							<React.Fragment key={item.id}>
								<TradeBladeCard id={item.id} title={item.title} subtitle={item.subtitle} />
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TradeBladeIts;
