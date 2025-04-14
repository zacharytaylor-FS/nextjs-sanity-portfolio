'use client';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { Tab, Tabs } from '@heroui/tabs';
import { UserAvatar } from '../../components/Avatar';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../../components/icons';
import { client } from '../../sanity/lib/client';

const query =
  '*[_type == "profile"]{_id, fullName, email, location, skills, socialLinks, headline, fullBio, shortBio, resumeURL, profileImage {alt, "image": asset->url}}';

async function getProfile() {
  return client.fetch(query);
}

export default function aboutPage() {
  const profile = getProfile();
  console.log(profile);
  return (
    <div className=''>
      {profile &&
        Object.keys(profile).map((key) => (
          <div
            key={key}
            className='flex flex-col md:flex-row  justify-center min-width-0 fill-width gap-10'>
            <div className='flex flex-col mx-auto px-10 pb-20 gap-6 justify-center sm:justify-normal items-center max-w-[160px]'>
              <UserAvatar picture={data.profileImage.image} />
              <Chip className='text-medium'>{data.location} 🌎</Chip>
            </div>
            <div className='flex flex-col text-start gap-5 text-white'>
              <Button>Schedule a Session</Button>
              <div>
                <div className='flex flex-col my-8'>
                  <h1 className='text-5xl md:text-7xl font-extrabold'>
                    {data.fullName}
                  </h1>
                  <span className='text-2xl font-extralight mb-5 text-[#959595] '>
                    {data.headline}
                  </span>
                  <Tabs className='mx-auto'>
                    <Tab
                      key='github'
                      as={Link}
                      href={data.socialLinks.github}
                      title={
                        <div className='flex items-center space-x-4'>
                          <GithubIcon />
                          <span>Github</span>
                        </div>
                      }
                    />
                    <Tab
                      key='linkedin'
                      as={Link}
                      href={data.socialLinks.linkedin}
                      title={
                        <div className='flex items-center space-x-4'>
                          <LinkedInIcon />
                          <span>LinkedIn</span>
                        </div>
                      }
                    />
                    <Tab
                      key='email'
                      as={Link}
                      href={data.email}
                      title={
                        <div className='flex items-center space-x-4'>
                          <EmailIcon />
                          <span>Email</span>
                        </div>
                      }
                    />
                  </Tabs>
                </div>
              </div>
              <div>
                <small>{data.email}</small>
                <small className='text-lg md:text-2xl'>{data?.shortBio}</small>
              </div>
              <div className='mb-10'>
                <h2 className='text-xl md:text-5xl mb-3'>Studies</h2>
                <div className='flex flex-col gap-x-1.5'>
                  <small className='text-xl font-bold'>
                    Full Sail University{' '}
                  </small>
                  <small className='text-base text-foreground-400'>
                    Web Design & Web Development
                  </small>
                </div>
              </div>
              <div className='mb-10'>
                <h2 className='text-xl md:text-5xl mb-3'>Tech Stack</h2>
                <div className='flex flex-col gap-x-1.5'>
                  <small className='text-xl font-bold'>Figma </small>
                  <small className='text-base md:text-lg text-foreground-400'>
                    Web Design & Web Development
                  </small>
                </div>
                <div className='flex flex-wrap pt-4 gap-x-5 min-w-0 w-full mt-5'>
                  <Image src='./images/blkLogo.png' width={'200px'} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
