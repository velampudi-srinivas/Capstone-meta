import "./BannerStyles.css"
import bannerimgone from "./assets/Mario and Adrian A.jpg";
import bannerimgtwo from "./assets/Mario and Adrian b.jpg"


function Banner() {
    return (
        <>
            <section className="banner-section">
                <div className="banner-banner">
                    <div className="banner-conent">
                        <div className="banner-heading">
                            <h2>Little Lemon</h2>
                        </div>
                        <div className="banner-label">
                            <span>Chicago</span>
                        </div>
                        <div className="banner-description">
                            <p>Little Lemon Company also hosts culinary events and workshops, inviting guests to engage with local chefs and learn about sustainable cooking practices. With a commitment to community and a focus on fresh, delicious food, Little Lemon Company creates a memorable experience that nourishes both the body and the soul. Whether you're visiting for a weekend getaway or a longer stay, this food hotel is a delightful destination for food lovers and travelers alike.</p>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img className="imga" src={bannerimgone} alt="bannerimage1" />
                        <img className="imgb" src={bannerimgtwo} alt="bannerimage2" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;