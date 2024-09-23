import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer/Footer';
import Highlights from './components/Highlights/Highlights';
import Hero from './components/herobanner/Hero';
import Spacer from './components/Spacer/Spacer';
import Testimonials from './components/Testimonials/Testimonials';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Spacer/>
      <Highlights/>
      <Testimonials/>
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;
