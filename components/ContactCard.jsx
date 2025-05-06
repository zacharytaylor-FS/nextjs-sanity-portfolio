'use client';
useRouter;

import { Button, Card, CardBody } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EmailIcon, GithubIcon, TwitterIcon } from './icons';

const contactItems = [
  {
    label: 'GitHub',
    icon: <GithubIcon width={30} height={30} className='max-w-11' />,
    href: 'https://github.com/zacharytaylor-FS',
    username: 'zacharytaylor-FS',
  },
  {
    label: 'Email',
    icon: <EmailIcon width={30} height={30} />,
    href: 'mailto:TG-Fullstack@outlook.com',
    username: 'TG-Fullstack@outlook',
  },
  {
    label: 'X',
    icon: <TwitterIcon />,
    href: 'https://x.com/TgFullstack',
    username: '@TgFullstack',
  },
];

export const ContactCard = () => {
  const router = useRouter();
  return (
    <div className='grid w-full grid-cols-1 sm:grid-cols-3 max-auto gap-8 lg:gap-16 mt-10 sm:mt-0'>
      {contactItems.map((item, index) => (
        <Card
          isPressable
          key={index}
          shadow='xl'
          className='flex-1 h-[400px] max-w-[400px] hover:bg-white/5'
          onPress={() => router.push(item.href)}>
          <CardBody className='flex justify-center items-center gap-8'>
            <span className='flex z-10 items-center justify-center w-12 h-12 text-sm border rounded-full bg-zinc-900'>
              <Button
                className='w-3/4 min-h-fit bg-transparent'
                as={Link}
                isIconOnly
                aria-label={item.label}
                radius='full'
                href={item.href}>
                <>{item.icon}</>
              </Button>
            </span>
            <div>
              <h2 className='text-lg lg:text-xl  font-semibold wrap p-4 max-w-full'>
                {item?.username}
              </h2>
              <h1 className='text-tiny text-center mt-3'>{item.label}</h1>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
