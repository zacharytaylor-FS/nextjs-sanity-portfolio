import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectList from '../../components/ProjectList'; // ✅ Update the path

// 🧪 Mock `next-sanity` PortableText
jest.mock('next-sanity', () => ({
  PortableText: ({ value }) => (
    <div data-testid="portable-text">{JSON.stringify(value)}</div>
  ),
}));

// 🧪 Mock Image to avoid layout errors
jest.mock('@heroui/react', () => {
  const React = require('react');
  return {
    Card: ({ children, ...props }) => <div {...props}>{children}</div>,
    CardHeader: ({ children }) => <div>{children}</div>,
    CardBody: ({ children }) => <div>{children}</div>,
    CardFooter: ({ children }) => <div>{children}</div>,
    Divider: () => <hr />,
    Image: ({ src, alt, ...props }) => (
      <img src={src} alt={alt} {...props} data-testid="project-image" />
    ),
  };
});

describe('ProjectList', () => {
  const mockProjects = [
    {
      title: 'Taylor’d Portfolio',
      slug: { current: 'taylord-portfolio' },
      coverImage: {
        image: '/project-img.jpg',
      },
      overview: [{ type: 'block', children: [{ text: 'This is an overview.' }] }],
      tags: ['Next.js', 'Sanity'],
      technologies: ['Tailwind CSS', 'Heroicons'],
    },
  ];

  it('renders project cards when projects are provided', () => {
    render(<ProjectList projects={mockProjects} />);

    expect(screen.getByText('Taylor’d Portfolio')).toBeInTheDocument();
    expect(screen.getByTestId('project-image')).toHaveAttribute(
      'src',
      '/project-img.jpg'
    );

    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /check out more detail/i })
    ).toHaveAttribute('href', '/project/taylord-portfolio');
  });

  it('renders fallback message when no projects are available', () => {
    render(<ProjectList projects={null} />);
    expect(screen.getByText('No Projects at this time')).toBeInTheDocument();
  });
});
