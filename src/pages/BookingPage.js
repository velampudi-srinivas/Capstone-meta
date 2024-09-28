import TestWrapper from "../components/FormBooking/TestWrapper";
import Header from "../components/Header"
import "../components/FormBooking/FormStyles.css";

function BookingPage()
{
    return(
        <>
        <Header/>
          <h1 className="bp-header">Book Your Table Reservation</h1>
          <TestWrapper/>
        </>
    )
}

export default BookingPage;