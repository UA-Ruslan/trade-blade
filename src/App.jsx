import { useState, useEffect } from 'react';
import './app.scss';
import DropdownBtn from './components/dropdown/dropdown-btn/Dropdown-btn';
import DropdownMenu from './components/dropdown/dropdown-menu/Dropdown-menu';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutCompany from './components/sections/about-company/About-company';
import Faq from './components/sections/faq/Faq';
import Numbers from './components/sections/numbers/Numbers';
import PastDeals from './components/sections/past-deals/Past-deals';
import QuickDealCopy from './components/sections/quick-deal-copy/Quick-deal-copy';
import Tariffs from './components/sections/tariffs/Tariffs';

function App() {
	const [isDropdownActive, setDropdownActive] = useState(false);

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

	return (
		<div className="app">
			<Header setDropdownActive={setDropdownActive} />
			<main className="main">
				<QuickDealCopy />
				<Numbers />
				<PastDeals />
				<AboutCompany />
				<Tariffs />
				<Faq />
			</main>

			<DropdownBtn isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />
			<DropdownMenu isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />

			<Footer setDropdownActive={setDropdownActive} />
		</div>
	);
}

export default App;
