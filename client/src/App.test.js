import { render, screen } from '@testing-library/react';
import App from './App';

test('header is rendered', () => {
  render(<App />);
  const titleElement = screen.getByText(/Impact/i);
  const subtitleElement = screen.getByText(/Giving made easy/i);
  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});
