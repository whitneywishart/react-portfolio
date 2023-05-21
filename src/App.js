import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import BucketList from './components/BucketList';
import Footer from './components/footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navigation />
      <Header />
      <BucketList />
      <Footer />
    </div>
  );
}

export default App;
