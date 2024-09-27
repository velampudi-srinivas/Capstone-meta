import React, { useState} from 'react';
import "./FormStyles.css"

const Form = ({ availableTimes, onDateChange, onSubmit }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('');
    const [errors, setErrors] = useState({});


    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        onDateChange(selectedDate); // Dispatch the change to update available times

     };

     const validateForm = () => {
        const newErrors = {};
        if (!date) newErrors.date = "Date is required.";
        if (!time) newErrors.time = "Time is required.";
        if (guests < 1 || guests > 10) newErrors.guests = "Number of guests must be between 1 and 10.";
        if (!occasion) newErrors.occasion = "Occasion is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        let status = onSubmit(FormData);
        if (status) {
            alert("form submitted successfully");
            setDate("");
            setTime("");
            setGuests(1);
            setOccasion("");
            window.location.href = '/booking-confirmation';
        }
        else {
            alert("form submission failed")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                {errors.date && <p className="error">{errors.date}</p>}
            </div>
            <div><label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="">Select time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
                {errors.time && <p className="error">{errors.time}</p>}
            </div>
            <div><label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="0"
                    max="10"
                />
                {errors.guests && <p className="error">{errors.guests}</p>}
            </div>
            <div><label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="">Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {errors.occasion && <p className="error">{errors.occasion}</p>}
            </div>
            <div className='subbtn'><input role='button' type="submit" value="Make Your Reservation"/>
            </div>
        </form>
    );
};

export default Form;
