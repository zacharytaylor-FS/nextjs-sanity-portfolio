import { Button } from '@heroui/button';
import { UserAvatar } from '../../components/Avatar';
import { client } from '../../sanity/lib/client';

const query =
  '*[_type == "profile"]{_id, fullName, email, location, skills, socialLinks, headline, fullBio, shortBio, resumeURL, profileImage {alt, "image": asset->url}}';

async function getProfile() {
  return client.fetch(query);
}

export default async function aboutPage() {
  const profile = await getProfile();
  console.log(profile);
  return (
    <div className=''>
      {profile.map((data) => (
        <div
          key={data._id}
          className='flex justify-center min-width-0 fill-width gap-10'>
          <div className='flex flex-col px-10 pb-20 gap-6 items-center max-w-[160px]'>
            <UserAvatar picture={data.profileImage.image} />
            <small className='text-medium'>{data.location} 🌎</small>
          </div>
          <div className='flex flex-col text-start gap-5 text-white'>
            <Button>Schedule a Session</Button>
            <h1 className='text-7xl font-extrabold'>{data.fullName}</h1>
            <span className='text-4xl font-extralight text-[#959595] '>
              {data.headline}
            </span>
            <div>
              <small>{data.email}</small>
              <small>{data?.shortBio}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
