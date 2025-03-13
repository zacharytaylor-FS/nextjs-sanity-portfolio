import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

const query =
  '*[_type == "project"]{_id, title, slug, description, coverImage {alt, "image": asset->url}, url, tags [], technologies, client}';

async function getProjects() {
  return client.fetch(query);
}

export default async function projectsPage() {
  const projects = await getProjects();
  console.log(projects);
  console.log(projects);
  return (
    <div>
      <h1>Project Page</h1>
      <div className='flex space-x-5'>
        {projects.map((project) => (
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
              {project?.tags && <p className='mt-3'>{project.tags}</p>}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
