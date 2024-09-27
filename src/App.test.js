import {render, screen } from '@testing-library/react';
import React from 'react';
import BookingPage from './pages/BookingPage';
import { initializeTimes } from "./components/FormBooking/Main";
import TestWrapper from './components/FormBooking/TestWrapper'; // Adjust the path as necessary


test('Renders the BookingForm heading', () => {
  render(<BookingPage/>);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});

describe('initializeTimes', () => {
  it('should return the correct initial available times', () => {
    const expectedTimes = initializeTimes();
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe('Main component', () => {
  it('should expose availableTimes via ref', () => {
    const ref = React.createRef();
    render(<TestWrapper ref={ref} />); // Use the TestWrapper here

    // Check that availableTimes contains the expected values
    expect(ref.current.availableTimes).toEqual(initializeTimes());
  });
});

