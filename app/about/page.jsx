import Image from 'next/image';
import { client } from '../../sanity/lib/client';

const query =
  '*[_type == "profile"]{_id, fullName, email, location, skills, socialLinks, profileImage {alt, "image": asset->url}}';

async function getProfile() {
  return client.fetch(query);
}

export default async function aboutPage() {
  const profile = await getProfile();
  console.log(profile);
  return (
    <div>
      <h1>About Page</h1>
      {profile.map((data) => (
        <div key={data._id}>
          <h2>{data.fullName}</h2>
          <Image
            src={data.profileImage.image}
            alt='Profile pic'
            width={120}
            height={120}
          />
          <h4>{data.email}</h4>
          <h4>{data.location}</h4>
          <p>{data.headline}</p>
        </div>
      ))}
    </div>
  );
}
