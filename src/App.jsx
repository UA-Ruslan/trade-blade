import { useState, useEffect } from 'react';
import './app.scss';

import DropdownBtn from './components/dropdown/dropdown-btn/Dropdown-btn';
import DropdownMenu from './components/dropdown/dropdown-menu/Dropdown-menu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutCompany from './sections/about-company/About-company';
import Faq from './sections/faq/Faq';
import Numbers from './sections/numbers/Numbers';
import PastDeals from './sections/past-deals/Past-deals';
import QuickDealCopy from './sections/quick-deal-copy/Quick-deal-copy';
import Tariffs from './sections/tariffs/Tariffs';
import TradeBladeIts from './sections/trade-blade-its/Trade-blade-its';
import HowToStart from './sections/how-to-start/How-to-start';
import StartNow from './sections/start-now/Start-now';
import Feedback from './sections/feedback/Feedback';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/preloader/Preloader';

function App() {
	const [isDropdownActive, setDropdownActive] = useState(false);
	const [isReadyState, setReadyState] = useState(false);

	useEffect(() => {
		const handleClick = (event) => {
			if (event.target.closest('.dropdown-container')) return;
			setDropdownActive(false);
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
		});
	}, []);

	useEffect(() => {
		let interval;

		if (!isReadyState) {
			interval = setInterval(() => {
				if (document.readyState === 'complete') {
					setReadyState(true);
				}
			}, interval);

			return () => clearInterval(interval);
		}
	}, [isReadyState]);

	return (
		<div className="app">
			{isReadyState ? (
				<>
					<Header setDropdownActive={setDropdownActive} />
					<main className="main">
						<QuickDealCopy />
						<Numbers />
						<PastDeals />
						<AboutCompany />
						<TradeBladeIts />
						<HowToStart />
						<Tariffs />
						<Feedback />
						<Faq />
						<StartNow />
					</main>
					<DropdownBtn isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />
					<DropdownMenu isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />
					<Footer setDropdownActive={setDropdownActive} />
				</>
			) : (
				<Preloader />
			)}
		</div>
	);
}

export default App;
