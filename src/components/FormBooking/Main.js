import React, { useReducer, useImperativeHandle, forwardRef } from 'react';
import Form from './Form';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = function(formData) {
    return true;
};


export const initializeTimes = () => {
    // Return the initial available times
    return fetchAPI(new Date());
};

const initialState = {
    availableTimes: initializeTimes()
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, return the same times regardless of the date
            const times = action.payload;
            return { ...state, availableTimes: fetchAPI(new Date(times)) };
        default:
            return state;
    }
};


const Main = forwardRef((_, ref) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useImperativeHandle(ref, () => ({
        availableTimes: state.availableTimes,
    }));

    const updateTimes = (date) => {
        dispatch({ type: 'UPDATE_TIMES' ,payload: date });
    };

    return (
        <div>
            <Form availableTimes={state.availableTimes} onDateChange={updateTimes} onSubmit={submitAPI}/>
        </div>
    );
});

export default Main;
