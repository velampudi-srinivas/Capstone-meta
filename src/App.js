import './App.css';
import BoookingConfirmation from './pages/BookingConfirmation';
import BookingPage from './pages/BookingPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/booking-confirmation" element={<BoookingConfirmation/>}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
