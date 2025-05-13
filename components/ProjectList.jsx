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

  if (!projects) return <div>No Projects at this time</div>
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.title} shadow='md' className='py-4 max-w-4xl'>
          <CardHeader className='py-0 px-4 flex-col items-start'>
            <div className='relative w-full'>
              <Image
                className='aspect-video rounded-xl w-full'
                src={project.coverImage.image}
                alt='Project Image'
                style={{
                  objectFit: 'fill',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <h1 className='font-bold text-xl mt-2'>{project.title}</h1>
          </CardHeader>
          <CardBody className='py-4 gap-4'>
            {/* <p>{project.overview}</p> */}
            <div className='py-3 prose'>
              {Array.isArray(project.description) && (
                <div className='text-tiny font-normal'>
                  <PortableText value={project.overview} data-testid='portable-text'/>
                </div>
              )}
            </div>
            {/* <p className='mt-2 text-lg'>{project.client}</p>
            <p className='mt-2 text-sm'>{project.slug.current}</p> */}
            <ul className='flex gap-2 flex-wrap'>
              {project &&
                project.tags?.map((tag, index) => (
                  <li
                    key={index}
                    className='flex-auto bg-primary max-w-fit p-1 rounded-md'>
                    <small className='text-tiny font-bold'>{tag}</small>
                  </li>
                ))}
              {project &&
                project.technologies?.map((tech, index) => (
                  <li
                    key={index}
                    className='flex-auto bg-primary max-w-fit p-1 rounded-md'>
                    <small className='text-tiny font-bold'>{tech}</small>
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
