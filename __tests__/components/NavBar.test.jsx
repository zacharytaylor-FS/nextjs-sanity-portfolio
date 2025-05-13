import { render, screen } from "@testing-library/react";
import { Navbar } from "../../components/Navbar";

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar/>)
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
  });
  
})
