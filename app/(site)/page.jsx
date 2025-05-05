import Script from 'next/script';
import { client } from '../../sanity/lib/client';
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
    url: 'https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/',
    siteName: 'Taylor’D Portfolio',
    type: 'website',
  },
};

const PROJECT_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, coverImage {alt, "image": asset->url}, url, tags [], technologies}`;

const options = { next: { revalidate: 30 } };
export default async function Home() {
  const projects = await client.fetch(PROJECT_QUERY, {}, options);
  console.log(projects);
  return (
    <>
      <Script id='next'>
        async src={`https://www.googletagmanager.com/gtag/js?id=G-TX8ZS8HD77`}
      </Script>
      <Script id='next'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TX8ZS8HD77');`}
      </Script>
      <section className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
          <div className='flex gap-x-4'>
            <div className='flex flex-col mx-auto justify-center align-middle text-center'>
              <h1 className='text-6xl sm:text-9xl font-extrabold mb-6 text-foreground text-center'>
                Taylor'D
              </h1>
              <div className='text-start'>
                <h2 className='text-lg text-center md:text-5xl my-3'>
                  {' '}
                  Code. Design. Perfectly Taylor'D.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
