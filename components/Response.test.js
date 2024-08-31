import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Response from './response';

jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn(() => ({
    getGenerativeModel: jest.fn(() => ({
      generateContent: jest.fn(() => ({
        response: Promise.resolve({ text: () => Promise.resolve('Generated response text') })
      })),
    })),
  })),
}));

describe('Response Component', () => {
  it('renders correctly and displays generated text', async () => {
    const { getByText } = render(<Response prompt="Hello, AI!" />);
    await waitFor(() => expect(getByText('Generated response text')).toBeTruthy());
  });
});
