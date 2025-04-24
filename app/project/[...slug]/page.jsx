import { client } from '../../../sanity/lib/client';

const query =
  '*[_type == "project"]{_id, title, slug, description, coverImage {alt, "image": asset->url}, url, tags [], technologies, client, timeline}';

async function getProjects() {
  return client.fetch(query);
}

export async function generateMetadata({ params }) {
  // const slug = params.slug;

  const project = await getProjects();
  console.log(project);
  return {
    title: `${project.title} || Taylor'D Projects`,
    description: `${project.description}`,
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
      title: `${project.title} || Taylor'D Projects`,
      description: project.description,
      url: `https://taylord.dev/projects/slug || https://taylord.dev/projects/slug`,
      siteName: 'Taylor’D Projects',
      images: [
        {
          url: 'https://taylord.dev/preview.jpg',
          width: 1200,
          height: 630,
          alt: 'Taylor’D Portfolio Preview',
        },
      ],
      type: 'website',
    },
  };
}

export default async function projectsPage({ params }) {
  const slug = (await params).slug;
  const project = await getProjects();
  return (
    <div>
      <h1>Project Slug Page{slug}</h1>

      <h3>Slug: {slug}</h3>
      {/* <Image src={project.coverImage} /> */}
    </div>
  );
}
