import Image from 'next/image';
import Link from 'next/link';
import ProjectList from '../../components/ProjectList';
import { client } from '../../sanity/lib/client';

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
    <div className='max-w-6xl font-bold mx-auto px-6 py-12'>
      <h1>Project Page</h1>
      <ProjectList projects={projects} />
      <div className=''>
        {projects.map((project) => (
          <div>
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
                <Link
                  href={`/project/${project.slug.current}`}
                  className='mt-3'>
                  Check out more detail
                </Link>
                {project?.tags && <p className='mt-3 mr-2'>{project.tags}</p>}
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
