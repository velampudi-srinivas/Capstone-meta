import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../components/FormBooking/FormStyles.css";
import Footer from "../components/Footer/Footer"

function BoookingConfirmation()
{
    return(
        <>
        <Header/>
        <div className="bc-body">
        <h2>Order submitted Successfully</h2>
        <Link  className="bk-cta" to={"/"}>Back to Home</Link>
        </div>
        <section className="bc-footer">
           <Footer/>
        </section>
        </>
    )
}

export default BoookingConfirmation;