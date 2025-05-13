import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer'; // Update this path if needed

describe('Footer', () => {
  it('renders the copyright with the current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    expect(
      screen.getByText(`© ${currentYear} My Portfolio. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders inside a <footer> tag', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
