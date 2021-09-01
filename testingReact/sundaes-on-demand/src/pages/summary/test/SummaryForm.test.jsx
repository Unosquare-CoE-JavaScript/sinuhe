import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('initial conditions', () => {
    render(<Summaryfrom/>);
    const checkbox = screen.getByrole('checkbox', { name: /terms and conditions/i });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByrole('button', { name: '/confirm order/i' });
    expect(confirmButton).toBeDisabled();
});

test('checkbox enables on first click', () => {
    render(<Summaryfrom/>);
    const checkbox = screen.getByrole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByrole('button', { name: '/confirm order/i' });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});