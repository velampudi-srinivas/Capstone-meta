import "./HighlightsStyles.css"
import details from "./details.js"
import logo from "./assets/delivery-logo.png"

function Highlights() {
   return (
      <>
         <section className="high-section">
            <div className="high-banner">
               <div className="high-h2-container"><h2 className="h2-high">This Week's Specials</h2></div>
               <div className="high-btn-container"><a className="btn-high" href="./">Online Menu</a></div>
            </div>
            <div className="high-cards">
               {details.map((e, index) => (
                  <div className="high-card" key={index}>
                     <div className="hcard-img"><img src={e.image} alt="img
                     "/></div>
                     <div className="hcard-body">
                        <div className="hcard-details">
                           <div className="hcard-label"><span>{e.label}</span></div>
                           <div className="hcard-price"><span>{e.price}</span></div>
                        </div>
                        <div className="hcard-description">
                           <p>{e.description}</p>
                        </div>
                        <div className="hcard-cta">
                           <a href="./">{e.cta}<img src={logo} alt="logo" /></a>
                        </div>
                     </div>
                  </div>))}
            </div>
         </section>
      </>
   );
}

export default Highlights;