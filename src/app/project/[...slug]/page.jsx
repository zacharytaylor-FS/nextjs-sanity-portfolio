export default async function projectsPage({ params }) {
  const slug = (await params).slug;
  return (
    <div>
      <h1>Project Slug Page{slug}</h1>
      <h3>Slug: {slug}</h3>
    </div>
  );
}
