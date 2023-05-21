import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import PortfolioBody from './components/PortfolioBody';
import Footer from './components/footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navigation />
      <div>
        <Header />
      </div>
      <div>
        <PortfolioBody />
        <Footer />
      </div>
    </div>

  );
}

export default App;
