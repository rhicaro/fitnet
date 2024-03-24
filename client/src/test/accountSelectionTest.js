import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Home from '../components/Home';

jest.mock('axios');

describe('Home component', () => {
  test('fetches user demographics and displays trainer accounts', async () => {
    const userData = [
      {
        first_name: 'John',
        last_name: 'Doe',
        user_location: 'New York',
        user_activity: 'Fitness',
        user_sex: 'Male',
        user_price: 50,
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        user_location: 'Los Angeles',
        user_activity: 'Yoga',
        user_sex: 'Female',
        user_price: 60,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: userData });

    render(<Home />);

    // Wait for the API call to resolve and populate the UI
    await waitFor(() => {
      expect(screen.getByText('Trainers')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  test('selects account when clicked', async () => {
    const userData = [
      {
        first_name: 'John',
        last_name: 'Doe',
        user_location: 'New York',
        user_activity: 'Fitness',
        user_sex: 'Male',
        user_price: 50,
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        user_location: 'Los Angeles',
        user_activity: 'Yoga',
        user_sex: 'Female',
        user_price: 60,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: userData });

    render(<Home />);

    // Wait for the API call to resolve and populate the UI
    await waitFor(() => {
      expect(screen.getByText('Trainers')).toBeInTheDocument();
    });

    // Click on the first account card
    userEvent.click(screen.getByText('John Doe'));

    // Verify that the selected account is displayed
    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Location: New York')).toBeInTheDocument();
    expect(screen.getByText('Activity: Fitness')).toBeInTheDocument();
    expect(screen.getByText('Sex: Male')).toBeInTheDocument();
    expect(screen.getByText('Price: $50')).toBeInTheDocument();
  });
});
