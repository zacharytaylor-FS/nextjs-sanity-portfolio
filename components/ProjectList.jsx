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
        <Card key={project.title} shadow='md' className='py-4 '>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <h4 className='font-bold text-large'>{project.title}</h4>
            <Image
              className='w-full object-fit rounded-xl h-[230px]'
              src={project.coverImage.image}
              alt='Project Image'
              width='100%'
            />
          </CardHeader>
          <CardBody>
            <small className='mt-3'>{project.client}</small>
            <small className='mt-3'>{project.slug.current}</small>
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
