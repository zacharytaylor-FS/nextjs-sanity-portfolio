// 'use client';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Image } from '@heroui/image';
import { PortableText } from 'next-sanity';
import { UserAvatar } from '../../../components/Avatar';
import { ProfileTabs } from '../../../components/ProfileTabs';
import { client } from '../../../sanity/lib/client';
const query =
  '*[_type == "profile"]{_id, fullName, email, location, skills, socialLinks, headline, fullBio, shortBio, resumeURL, profileImage {alt, "image": asset->url}}';

async function getProfile() {
  return client.fetch(query);
}
export const metadata = {
  title: 'Taylor’D About',
  description: 'Zachary Taylor About page ',
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
    title: 'Taylor’D About',
    description:
      'Explore Zachary Taylors, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.',
    url: 'https://taylord.dev',
    siteName: 'Zachary Taylor About',
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

export default async function aboutPage() {
  const profile = await getProfile();
  console.log(profile);
  return (
    <div className=''>
      {/* {profile &&
        Object.keys(profile).map((key, data) => ( */}
      {profile.map((profile) => (
        <div
          key={profile._id}
          className='flex flex-col md:flex-row  justify-center min-width-0 fill-width gap-10'>
          <div className='flex flex-col mx-auto px-10 pb-2 md:pb-20 gap-6 justify-center md:justify-normal items-center max-w-[160px]'>
            <UserAvatar
              picture={profile?.profileImage.image}
              alt={profile?.profileImage.alt}
            />

            <Chip className='text-medium'>{profile.location} 🌎</Chip>
          </div>
          <div className='flex flex-col text-start gap-5 dark:text-white light:text-black'>
            <Button className='max-w-md'>Schedule a Session</Button>
            <div>
              <div className='flex flex-col my-8'>
                <h1 className='text-5xl md:text-7xl font-extrabold'>
                  {profile.fullName}
                </h1>
                <span className='text-2xl font-extralight mb-5 text-[#959595] '>
                  {profile.headline}
                </span>
                <ProfileTabs profile={profile} />
                {/* <div className='flex w-full flex-col'>
                    <Tabs className='mx-auto'>
                      <Tab
                        key='github'
                        as={Link}
                        href={data.socialLinks}
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
                        href={data.socialLinks}
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
                  </div> */}
              </div>
            </div>
            <div className='mb-10'>
              {/* <small className='text-lg md:text-2xl'>{profile.shortBio}</small> */}
              <div className='text-white'>
                <p className='text-lg pb-7'>{profile.shortBio}</p>

                <small>
                  {Array.isArray(profile.fullBio) && (
                    <PortableText value={profile?.fullBio} />
                  )}
                </small>
              </div>
            </div>
            <div className='mb-10'>
              <h2 className='text-xl md:text-5xl mb-3'>Studies</h2>
              <div className='flex flex-col gap-x-1.5 mb-4'>
                <small className='text-xl font-bold'>
                  Full Sail University{' '}
                </small>
                <small className='text-base text-foreground-400'>
                  Web Design & Web Development
                </small>
              </div>
              <div className='flex flex-col gap-x-1.5'>
                <small className='text-xl font-bold'>
                  Google Career Certification{' '}
                </small>
                <small className='text-base text-foreground-400'>
                  IT Support Professional
                </small>
              </div>
            </div>
            <div className='mb-10'>
              <h2 className='text-xl md:text-5xl mb-3'>Tech Stack</h2>
              {profile?.skills.map((skill) => (
                <div key={skill} className='flex flex-col gap-x-1.5 mb-4'>
                  <small className='text-xl font-bold'>{skill}</small>
                  <small className='text-base md:text-lg text-foreground-400'>
                    Web Design & Web Development
                  </small>
                  <div className='flex flex-wrap gap-x-5 min-w-0 w-full mt-5'>
                    <Image src='./images/blkLogo.png' width={'200px'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ))} */}
    </div>
  );
}
