
import { ContactCard } from '../../../components/ContactCard';

export const metadata = {
  title: 'Taylor’D | Contact Page',
  description:
    'Taylor’D is a bold and modern portfolio showcasing custom web development using Next.js, Tailwind CSS, Sanity CMS, and Framer Motion. Discover unique projects and creative digital solutions.',
  keywords: [
    'Web Developer Portfolio',
    'Next.js Developer',
    'Tailwind CSS',
    'Sanity CMS',
    'JavaScript Developer',
    'Framer Motion',
    'Frontend Developer',
    'Full Stack Developer',
  ],
  openGraph: {
    title: 'Taylor’D | Contact Page',
    description:
      'Explore Taylor’D, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.',
    url:
      'https://www.taylord-portfolio.com/contact' |
      'https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/contact',
    siteName: 'Taylor’D | Contact',
    type: 'website',
  },
};

export default function contactPage(){
  return (
  <div className='md:max-w-6xl mx-auto justify-center items-center'>
    <ContactCard />
  </div>
  )
}
