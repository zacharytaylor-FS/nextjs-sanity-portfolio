'use client';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from '@heroui/react';
import { PortableText } from 'next-sanity';
import Link from 'next/link';

export default function ProjectList({ projects }) {
  return (
    <div className='gap-8 grid grid-cols-1 lg:mx-auto md:justify-start'>
      {projects.map((project) => (
        <Card key={project.title} shadow='md' className='py-4 max-w-[550px]'>
          <CardHeader className='py-0 px-4 flex-col items-start'>
            <div className='relative'>
              <Image
                className='w-full rounded-xl h-20'
                src={project.coverImage.image}
                alt='Project Image'
                style={{
                  width: '550px',
                  height: '310px',
                }}
              />
            </div>
            <h1 className='font-bold text-xl mt-2'>{project.title}</h1>
          </CardHeader>
          <CardBody className='py-4 gap-4'>
            <div className='py-3'>
              {Array.isArray(project.description) && (
                <PortableText value={project.description} />
              )}
            </div>
            {/* <p className='mt-2 text-lg'>{project.client}</p>
            <p className='mt-2 text-sm'>{project.slug.current}</p> */}
            <ul className='flex gap-2 flex-wrap'>
              {project.tags.map((tag, index) => (
                <li
                  key={tag}
                  className='flex-auto bg-primary max-w-fit p-1 rounded-md'>
                  <small className='text-tiny font-bold'>{tag}</small>
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
              className=' text-blue-700 hover:text-blue-500'>
              Check out more detail
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
