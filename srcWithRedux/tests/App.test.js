import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add New Transaction/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders text Budget', () => {
  render(<App />);
  const textelement = screen.getByText(/Budget/i);
  const title=screen.getByTitle("img title")
  expect(textelement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});