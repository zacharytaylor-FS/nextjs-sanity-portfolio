import ProjectList from '../../../components/ProjectList';
import { client } from '../../../sanity/lib/client';

const query =
  '*[_type == "project"]{_id, title, slug, overview, description, coverImage {alt, "image": asset->url}, url, tags [], technologies, client, timeline}';

async function getProjects() {
  return client.fetch(query);
}

export const metadata = {
  title: `Taylor’D Project's`,
  description: `Zachary Taylor's Project page `,
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
    title: `Taylor’D Project's`,
    description: `Explore Zachary Taylor's, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.`,
    url: 'https://www.taylord-portfolio.com/projects',
    siteName: `Zachary Taylor Project's`,
    // images: [
    //   {
    //     url: 'https://cdn.sanity.io/images/ohqmul73/production/4123407d2efbeac38d102eb622f5f15606e0a2fc-4184x2150.png',
    //     width: 160,
    //     height: 160,
    //     alt: 'Taylor’D Portfolio Preview',
    //   },
    // ],
    type: 'website',
  },
};

const options = { next: { revalidate: 60 } };

export default async function projectsPage() {
  const projects = await getProjects();
  console.log(projects);
  if (!projects)
    return <div className='text-white'>No Projects at this time....</div>;
  return (
    <div className='max-w-6xl font-bold mx-auto px-6 py-12'>
      <h1 className='text-4xl mb-5'>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
