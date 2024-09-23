import "./TestimonialStyles.css"
import details from "./details";
import rating from "./assets/star-rating.png"

function Testimonials() {
    return (
        <>
            <section className="test-section">
                <div className="test-body">
                    <div className="test-head">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="test-cards">
                        {details.map((e, index) => (
                            <div className="test-card" key={index}>
                                <div className="testcard-label">
                                    <img src={rating} alt="rating-logo" />
                                </div>
                                <div className="testcard-info">
                                    <div><img src={e.image} alt="user-image" /></div>
                                    <div><span>{e.user}</span></div>
                                </div>
                                <div className="testcard-des">
                                    <p>{e.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}


export default Testimonials;