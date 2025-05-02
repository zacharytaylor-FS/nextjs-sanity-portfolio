import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { getProjectBySlug } from '../../../../sanity/lib/queries';

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const project = await getProjectBySlug(slug);
  // const project = getProjectBySlug(params.slug);
  return {
    title: ` Taylor'D Project ${project.title}`,
    description: `Taylord ${project.description}`,
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
      title: `Taylor'D Project ${project.title}`,
      description: `Taylor'D ${project.description}`,
      url: `https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/project/${project.slug}`,
      siteName: `Taylor’D Project ${project.title}`,
      images: [
        {
          url: project.coverImage.image,
          width: 800,
          height: 800,
          alt: project.coverImage.alt,
        },
      ],
      type: 'website',
    },
  };
}

export default async function projectsPage({ params }) {
  const slug = await params.slug;
  const project = await getProjectBySlug(params.slug);
  console.log(project);
  if (!project) return <div>No Project found</div>;
  return (
    <div className='bg-primary-50 p-4 flex flex-col gap-4 max-w-5xl rounded-md shadow-lg'>
      <div>
        <div className='relative w-full'>
          <Image
            className='w-full rounded-md'
            src={project?.coverImage.image}
            sizes='100vw'
            width={800}
            height={800}
            alt='Project Image'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <h1 className='text-2xl font-bold mb-4 text-start'>
          Title: {project.title}
        </h1>
        <h3 className='text-start py-3'>Slug: {slug}</h3>
        {/* <p>{project.description}</p> */}
        {project.technologies && (
          <div>
            <h2>Tech Stack</h2>
            <div className='flex gap-2'>
              {project.technologies.map((tech, index) => (
                <div key={index} className='flex gap-3 flex-wrap'>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {project.tags && (
          <div>
            <h3>Tags</h3>
            {project.tags.map((index, tag) => (
              <div key={index}>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        )}
        <div className='text-lg font-bold mb-8'>
          <div className='prose'>
            <p>Date: {new Date(project.publishedAt).toLocaleDateString()}</p>
            {Array.isArray(project.description) && (
              <PortableText value={project.description} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
