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
          className='flex flex-column justify-center min-width-0 fill-width gap-10'>
          <div className='p-'>
            <UserAvatar picture={data.profileImage.image} />
            {/* <Image
              className='rounded-sm'
              src={data.profileImage.image}
              alt='Profile pic'
              width={100}
              height={100}
            /> */}
            <p className='font-bold'>🇺🇸{data.location} </p>
          </div>
          <div className='flex flex-col text-start gap-5'>
            <h1 className='text-7xl'>{data.fullName}</h1>
            <p>{data.headline}</p>
            <h4>{data.email}</h4>
            <p>{data?.shortBio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
