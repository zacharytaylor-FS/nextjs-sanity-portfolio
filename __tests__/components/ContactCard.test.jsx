import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { ContactCard } from '../../components/ContactCard';
jest.mock('next/navigation',  () => ({
  useRouter: jest.fn(),
}));

describe('Component: ContactCard', () => {
  const push = jest.fn();
  beforeEach(() => {
    useRouter.mockReturnValue({push})
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all contact cards with correct usernames and labels', () => {
    render(<ContactCard/>);
  
    expect(screen.getByText('zacharytaylor-FS')).toBeInTheDocument();
    expect(screen.getByText('TG-Fullstack@outlook')).toBeInTheDocument();
    expect(screen.getByText('@TgFullstack')).toBeInTheDocument();
    expect(screen.getByText(/GitHub/)).toBeInTheDocument();
    expect(screen.getByText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/X/)).toBeInTheDocument();
  });

  it('clicks a card and triggers router.push with correct href', async () => {
    render(<ContactCard/>);

    const githubCard = screen.getByTestId('contact-card-github');

    // simulate user clicking the card
    await userEvent.click(githubCard);

    expect(push).toHaveBeenCalledWith('https://github.com/zacharytaylor-FS')
  });
  
});
