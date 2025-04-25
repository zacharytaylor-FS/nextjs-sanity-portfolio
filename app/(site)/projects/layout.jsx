export default function AboutLayout({ children }) {
  return (
    <section className=''>
      <div className='flex justify-start md:justify-center mx-auto'>
        {children}
      </div>
    </section>
  );
}
