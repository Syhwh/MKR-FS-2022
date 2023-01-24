import { render, screen } from '@testing-library/react';
import { MyList } from '../MyList';

it.skip('renders the list correctly', () => {
    render(<MyList />);
    const list = screen.getAllByTestId(/list/i);
})