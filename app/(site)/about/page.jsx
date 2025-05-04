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
  description: `Zachary Taylor's About page `,
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
    description: `Explore Zachary Taylor's, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.`,
    url:
      'https://www.taylord-portfolio.com' |
      'https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/about',
    siteName: 'Zachary Taylor About',
    images: [
      {
        url: 'https://cdn.sanity.io/images/ohqmul73/production/4123407d2efbeac38d102eb622f5f15606e0a2fc-4184x2150.png',
        width: 160,
        height: 160,
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
    <div className='relative'>
      {/* {profile &&
        Object.keys(profile).map((key, data) => ( */}
      {profile.map((profile) => (
        <div
          key={profile._id}
          className='relative flex flex-col md:flex-row min-h-screen justify-center min-width-0 max-w-5xl mx-auto'>
          <div className='w-1/3 relative md:sticky flex top-0 h-fit flex-col mx-auto md:mx-0 sm:mr-auto px-10 pb-2 md:pb-20 gap-6 justify-center md:justify-normal items-center min-width-[160px]'>
            <div className='relative border-1.5 rounded-full'>
              <UserAvatar
                picture={profile?.profileImage.image}
                alt={profile?.profileImage.alt}
                width={300}
                height={300}
              />
            </div>

            <Chip className='text-label text-base'>{profile.location} 🌎</Chip>
          </div>
          <div className='w-2/3 overflow-y-auto relative top-4 flex-9 flex-col mx-auto md:p-4 md:text-start gap-5 dark:text-white light:text-black max-w-[40rem]'>
            <div className='mx-auto md:mx-0'>
              <div className='flex flex-col mb-0 gap-4 font-default font-lg'>
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold py-1'>
                  {profile.fullName}
                </h1>
                <span className='text-3xl sm:text-4xl font-extralight mb-5 text-[#959595] '>
                  {profile.headline}
                </span>
                <ProfileTabs className='justify-center' profile={profile} />
              </div>
            </div>
            <div className='my-10'>
              <div className='light:text-black dark:text-white'>
                {Array.isArray(profile.fullBio) && (
                  <small className='text-lg text-start'>
                    <PortableText
                      className='text-lg'
                      value={profile?.fullBio}
                    />
                  </small>
                )}
              </div>
            </div>
            <div className='mb-10 text-start'>
              <h2 className='text-3xl sm:text-5xl mb-3 font-bold'>Studies</h2>
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
            <div className='mb-10 text-start'>
              <h2 className='text-3xl sm:text-5xl mb-3 font-bold'>
                Tech Stack
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {profile?.skills.map((skill) => (
                  <div key={skill} className='grid grid-col-5 gap-x-1.5 mb-4'>
                    <small className='text-lg font-bold'>{skill}</small>
                    {/* <small className='text-tiny md:text-md text-foreground-400'>
                      Web Design & Web Development
                    </small> */}
                    <div className='flex flex-wrap gap-x-5 min-w-0 w-full mt-3'>
                      <Image src='./images/blkLogo.png' width={'200px'} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ))} */}
    </div>
  );
}
