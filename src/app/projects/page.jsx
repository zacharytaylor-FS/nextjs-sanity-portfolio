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
      {projects.map((project) => (
        <li key={project._id} className=''>
          <h2>{project.title}</h2>
          {project?.coverImage && (
            <Image
              src={project.coverImage.image}
              alt='project image'
              width={220}
              height={220}
            />
          )}
          <p>{project.client}</p>
          <p>{project.slug.current}</p>
          <Link href={`/project/${project.slug.current}`}>
            Check out more detail
          </Link>
          {project?.tags && <p>{project.tags}</p>}
        </li>
      ))}
    </div>
  );
}
