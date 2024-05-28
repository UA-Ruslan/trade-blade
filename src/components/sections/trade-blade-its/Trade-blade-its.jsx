import React from 'react';
import TradeBladeCard from './trade-bade-card/Trade-blade-card';
import styles from './trade-blade-its.module.scss';
import { cardData } from '../../../static/trade-blade-card';

const TradeBladeIts = () => {
	return (
		<section id="faq" className={styles.section__trade_blade_its}>
			<div className={`${styles.trade_blade_its__container} container`}>
				<h2 className={styles.trade_blade_its__title}>tradeblade це</h2>
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
