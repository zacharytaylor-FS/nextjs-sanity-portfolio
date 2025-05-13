import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../../app/(site)/page';

jest.mock('../../components/HeroSection', () => () => (
  <h1>Taylor'D</h1>
))

describe('App Router: Home Page', () => {
  it('renders a h1 & h2 heading', () => {
    render(<Home />);

    const headingLevelOne = screen.getByRole('heading', { level: 1 });
    const headingLevelTwo = screen.getByRole('heading', { level: 2 });
    expect(headingLevelOne).toBeInTheDocument();
    expect(headingLevelTwo).toBeInTheDocument();
  });

  it('renders the HeroSection component', () => {
    render(<Home/>)
    expect(screen.getByRole('heading', /Taylor'D/)).toBeInTheDocument();
  });
  
});
