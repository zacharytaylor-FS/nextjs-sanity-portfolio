import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../app/(site)/about/page';

describe('App Router: About Page', () => {
  it('renders heading h1', () => {
    render(<AboutPage />)
    expect(screen.getByText(/Zachary Taylor/)).toBeInTheDocument()
  });
  
})
