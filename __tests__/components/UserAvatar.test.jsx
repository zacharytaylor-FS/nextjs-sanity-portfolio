import { render, screen } from "@testing-library/react";
import { UserAvatar } from "../../components/Avatar";
 describe('UserAvatar', () => {
  const alt = 'John Doe';
  const picture = 'https://example.com/avatar.jpg'
   it('renders the avatar image with correct src and alt', () => {
    render(<UserAvatar picture={picture} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('src', picture)
    expect(img).toHaveAttribute('alt', alt)
   });

   it('renders fallback if no picture is provided', () => {
    render(<UserAvatar picture='' alt={alt} />);
    
    // HeroUI fallback renders initials as text when no image
    expect(screen.getByText('Joh')).toBeInTheDocument(); // 'John Doe' -> 'Joh'
   });
   
   
 })
 