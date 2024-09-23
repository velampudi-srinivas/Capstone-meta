import "./HeroStyles.css"
import heroimage from "./assets/restauranfood.jpg"

function Hero()
{
   return(
    <>
       <section className="hero-section">
              <div className="hero-banner">
                <div className="hero-conent">
                   <div className="hero-heading">
                        <h2>Little Lemon</h2>
                   </div>
                   <div className="hero-label">
                         <span>Chicago</span>
                   </div>
                   <div className="hero-description">
                         <p>Discover Little Lemon, your go-to destination for delicious, fresh food made with love. Enjoy our diverse menu featuring wholesome ingredients and flavors that delight. Join us for a meal today!</p>
                   </div>
                   <div className="hero-cta">
                          <a href="./">Reserve a Table</a>
                   </div>
                </div>
                <div className="hero-image">
                   <img src={heroimage} alt="heroimage"/>
                </div>
              </div>
       </section>
    </>
   )
}

export default Hero;