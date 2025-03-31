import Image from 'next/image';
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
          className='flex flex-column justify-center min-width-0 fill-width'>
          <div>
            <Image
              src={data.profileImage.image}
              alt='Profile pic'
              width={160}
              height={160}
            />
            <p className='font-bold'>{data.location}</p>
          </div>
          <div className='flex-1 text-start'>
            <h1 className='text-7xl'>{data.fullName}</h1>
            <h4>{data.email}</h4>
            {/* <p>{data?.fullBio}</p> */}
            <p>{data.headline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
