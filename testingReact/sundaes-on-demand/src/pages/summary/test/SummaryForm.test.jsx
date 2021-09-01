import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('initial conditions', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmButton).toBeDisabled();
});

test('checkbox enables on first click', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test('popover responids to hover', async () => {
    render(<SummaryForm/>);

    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).toBeNull();

    const termsAndConditions = screen.getByText(/Terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popOver = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(popOver).not.toBeNull();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
    expect(nullPopover).toBeNull();
});