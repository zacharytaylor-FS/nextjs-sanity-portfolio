import { render, screen } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';

describe('Component: HeroSection', () => {
  it('renders heading', () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Code. Design. Perfectly Taylor'D./i),
    ).toBeInTheDocument();
  });
});
