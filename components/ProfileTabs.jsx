'use client';
import { Tab, Tabs } from '@heroui/react';
import Link from 'next/link';
import { EmailIcon, GithubIcon, LinkedInIcon } from './icons';

export const ProfileTabs = ({ profile }) => {
  return (
    <div className='flex w-full flex-col '>
      <Tabs className='mx-auto md:justify-start'>
        <Tab
          key='github'
          as={Link}
          href={profile.socialLinks.github}
          title={
            <div className='flex items-center space-x-4'>
              <GithubIcon />
              <span className='hidden md:flex'>Github</span>
            </div>
          }
        />
        <Tab
          key='linkedin'
          as={Link}
          href={profile.socialLinks.linkedin}
          title={
            <div className='flex items-center space-x-4'>
              <LinkedInIcon />
              <span className='hidden md:flex'>LinkedIn</span>
            </div>
          }
        />
        <Tab
          key='email'
          as={Link}
          href={profile.email}
          title={
            <div className='flex items-center space-x-4'>
              <EmailIcon />
              <span className='hidden md:flex'>Email</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
};
