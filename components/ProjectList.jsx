'use client';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@heroui/react';
import Link from 'next/link';

export default function ProjectList({ projects }) {
  return (
    <div className='gap-8 grid grid-cols-2 lg:grid-cols-3'>
      {projects.map((project) => (
        <Card key={project.title} shadow='md' className='py-4 max-w-[400px]'>
          <CardHeader className='pb-0 pt-2 flex-col items-start'>
            <Image
              className='w-full object-fit rounded-xl h-[230px]'
              src={project.coverImage.image}
              alt='Project Image'
              width='100%'
            />
            <h1 className='font-bold text-xl mt-2'>{project.title}</h1>
          </CardHeader>
          <CardBody>
            <p className='mt-2 text-lg'>{project.client}</p>
            <p className='mt-2 text-sm'>{project.slug.current}</p>
            <ul className='flex mt-3'>
              {project.tags.map((tag, index) => (
                <li key={tag} className='flex-auto'>
                  {tag}
                </li>
              ))}
            </ul>
            {/* {project?.tags && (
                <div key={project.tags} className='mr-2 flex space-x-3'>
                  <p className='mt-3'>{project.tags[0]}</p>
                </div>
              )} */}
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              href={`/project/${project.slug.current}`}
              className='mt-3 text-blue-700 hover:text-blue-500'>
              Check out more detail
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
