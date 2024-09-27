import React, { useState} from 'react';
import "./FormStyles.css"

const Form = ({ availableTimes, onDateChange, onSubmit }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');


    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        onDateChange(selectedDate); // Dispatch the change to update available times

     };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    required
                />
            </div>
            <div><label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Select time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
            </div>
            <div><label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
            </div>
            <div><label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required
                >
                    <option value="">Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div className='subbtn'><input type="submit" value="Make Your Reservation"/>
            </div>
        </form>
    );
};

export default Form;
