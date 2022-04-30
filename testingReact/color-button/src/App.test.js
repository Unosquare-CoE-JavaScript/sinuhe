import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has a corrrect initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnitghtBlue' });

  //expect background color to be red

  expect(colorButton).toHaveStyle( { backgroundColor: 'MediumVioletRed' });

});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnitghtBlue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  expect(colorButton.textContent).toBe('Change to MediumVioletRed');
});

test('initial conditions', () => {
  // check buttons are enabled
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnitghtBlue' });

  expect(colorButton).toBeEnabled();

  //check checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

});

test('button disbled and enabled', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to MidnitghtBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();


});

test('Change button color to graey', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'Change to MidnitghtBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnitghtBlue' });

});

describe('spaces befor camel-case', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnitghtBlue')).toBe('Midnitght Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});