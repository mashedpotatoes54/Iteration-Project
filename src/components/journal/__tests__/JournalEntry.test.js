import React from 'React';
import { render, screen } from '@testing-library/react';
import JournalEntry from '../JournalEntry.jsx';

test('renders the journal form component', () => {
  render(<JournalEntry />);

//   expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
//   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
//   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
//   expect(screen.getByRole("img")).toBeInTheDocument();

//   expect(screen.getByText(container, 'Date:'))
//   expect(screen.getByRole("label", {name : "Date:"})).toBeInTheDocument();
    // expect(screen.getByLabelText('Date:', {selector: 'input'})).toBeInTheDocument();

    expect(screen.getByText('mood:')).toBeInTheDocument();
})