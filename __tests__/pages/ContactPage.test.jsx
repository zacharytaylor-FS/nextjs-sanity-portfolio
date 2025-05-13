import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from '../../app/(site)/contact/page';

describe('App Router: Contact Page', () => {
  it('renders a heading', () => {
    render(<ContactPage />);


    expect(screen.getByText(/zacharytaylor-FS/)).toBeInTheDocument()
    expect(screen.getByText(/GitHub/)).toBeInTheDocument()
    expect(screen.getByText(/TG-Fullstack@outlook/)).toBeInTheDocument()
    expect(screen.getByText(/Email/)).toBeInTheDocument()
    expect(screen.getByText(/@TgFullstack/)).toBeInTheDocument()
    expect(screen.getByText(/X/)).toBeInTheDocument()
    // const heading = screen.getByRole('heading', { level: 2 });
    // const headingText = screen.getByText(/Contact Page/)
    // expect(heading).toBeInTheDocument();
    // expect(headingText).toBeInTheDocument();
    
  });
});
