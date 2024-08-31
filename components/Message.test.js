import React from 'react';
import { render } from '@testing-library/react-native';
import Message from './message';

describe('Message Component', () => {
  it('renders correctly with given message', () => {
    const { getByText } = render(<Message message="Hello, this is a test message!" />);
    expect(getByText('Hello, this is a test message!')).toBeTruthy();
  });

  it('displays the correct username and time', () => {
    const { getByText } = render(<Message message="Hello, this is a test message!" />);
    expect(getByText('Username')).toBeTruthy();
    
    const currentDate = new Date();
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    expect(getByText(time)).toBeTruthy();
  });
});
