'use client';

export default function AboutLayout({ children }) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 p-10 md:py-10'>
      <div className=' text-center justify-center'>{children}</div>
    </section>
  );
}
