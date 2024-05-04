import './app.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutCompany from './components/sections/about-company/About-company';
import Faq from './components/sections/faq/Faq';
import Numbers from './components/sections/numbers/Numbers';
import PastDeals from './components/sections/past-deals/Past-deals';
import QuickDealCopy from './components/sections/quick-deal-copy/Quick-deal-copy';
import Tariffs from './components/sections/tariffs/Tariffs';

function App() {
	return (
		<div className="app">
			<Header />
			<main className="main">
				<QuickDealCopy />
				<Numbers />
				<PastDeals />
				<AboutCompany />
				<Tariffs />
				<Faq />
			</main>
			<Footer />
		</div>
	);
}

export default App;
