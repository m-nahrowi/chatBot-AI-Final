import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App Component', () => {
  it('renders correctly and adds message to list', () => {
    const { getByPlaceholderText, getByText } = render(<App />);

    const input = getByPlaceholderText('Ask to AI');
    fireEvent.changeText(input, 'Test message');
    fireEvent.press(getByText('>'));

    expect(getByText('Test message')).toBeTruthy();
  });
});
