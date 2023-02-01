import { render, screen } from '@testing-library/react';
import { TextDisplay } from '../TextDisplay';

it('renders the Textdisplay Component correctly', () => {
  render(<TextDisplay />);
  const textDisplay = screen.getByRole('heading');
  expect(textDisplay).toBeInTheDocument();
});

it('renders the correct text prop', () => {
  render(<TextDisplay text="My Text" />);
  const textDisplay = screen.getByText('My Text');
  expect(textDisplay).toBeInTheDocument();
});
