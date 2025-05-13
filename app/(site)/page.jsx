import HeroSection from '../../components/HeroSection';

export const metadata = {
  title:
    'Taylor’D | Creative Web Developer Portfolio – Next.js, Tailwind, Sanity',
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
    title: 'Taylor’D | Creative Web Developer Portfolio',
    description:
      'Explore Taylor’D, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.',
    url: 'https://www.taylord-portfolio.com',
    siteName: 'Taylor’D Portfolio',
    type: 'website',
  },
};

// const PROJECT_QUERY = `*[
//   _type == "project"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, coverImage {alt, "image": asset->url}, url, tags [], technologies}`;

// const options = { next: { revalidate: 30 } };
export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
