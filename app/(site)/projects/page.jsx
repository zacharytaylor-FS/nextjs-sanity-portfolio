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
    url: 'https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/projects',
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
  console.log(projects);
  if (!projects)
    return <div className='text-white'>No Projects at this time....</div>;
  return (
    <div className='max-w-6xl font-bold mx-auto px-6 py-12'>
      <h1 className='text-4xl mb-5'>Projects</h1>
      <ProjectList projects={projects} />
      {/* <div className=''>
        {projects.map((project) => (
          //Todo Add HeroUI Card to place
          <li key={project._id} className='bg-slate-400 max-w-xs p-4 flex-1 '>
            <div className='container'>
              <h2>{project.title}</h2>
              {project?.coverImage && (
                <Image
                  src={project.coverImage.image}
                  alt='project image'
                  width={300}
                  height={220}
                />
              )}
              <p className='mt-3'>{project.client}</p>
              <p className='mt-3'>{project.slug.current}</p>
              <Link href={`/project/${project.slug.current}`} className='mt-3'>
                Check out more detail
              </Link>
              {project?.tags && <p className='mt-3 mr-2'>{project.tags}</p>}
            </div>
          </li>
        ))}
      </div> */}
    </div>
  );
}
