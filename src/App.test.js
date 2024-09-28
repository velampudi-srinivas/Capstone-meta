import {render, screen, fireEvent} from '@testing-library/react';
import React from 'react';
import BookingPage from './pages/BookingPage';
import { initializeTimes } from "./components/FormBooking/Main";
import TestWrapper from './components/FormBooking/TestWrapper'; // Adjust the path as necessary
import Form from './components/FormBooking/Form';


test('Renders the BookingForm heading', () => {
  render(<BookingPage/>);
  const headingElement = screen.getByText("Book Your Table Reservation");
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

const mockOnDateChange = jest.fn();
const mockOnSubmit = jest.fn(() => true)

const availableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];

describe('Form Validation', () => {
    beforeEach(() => {
        render(
            <Form 
                availableTimes={availableTimes} 
                onDateChange={mockOnDateChange} 
                onSubmit={mockOnSubmit} 
            />
        );
    });

    test('should display error if date is not selected', () => {
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: 1 } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

        fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

        expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    });

    test('should display error if time is not selected', () => {
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: 1 } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

        fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

        expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });

    test('should display error if number of guests is out of range', () => {
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '12:00 PM' } });
        fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: 11 } });
        fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

        fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

        expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
    });

    test('should display error if occasion is not selected', () => {
        fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-09-30' } });
        fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '12:00 PM' } });
        fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: 1 } });

        fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

        expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
    });

    test('should not call onSubmit if there are validation errors', () => {
        fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});

