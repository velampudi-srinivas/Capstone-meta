import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Hero from "../components/herobanner/Hero";
import Highlights from "../components/Highlights/Highlights";
import Spacer from "../components/Spacer/Spacer";
import Testimonials from "../components/Testimonials/Testimonials";

function Home()
{
    return(
        <>
           <Header/>
           <Hero/>
           <Spacer/>
           <Highlights/>
           <Testimonials/>
           <Banner/>
           <Footer/>
        </>
    )
}

export default Home;