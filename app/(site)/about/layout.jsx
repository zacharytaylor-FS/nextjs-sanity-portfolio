'use client';

export default function AboutLayout({ children }) {
  return (
    <section className='relative top-4 left-0 flex flex-col items-center justify-center gap-4 w-fill'>
      <div className='relative w-full text-center justify-center'>
        {children}
      </div>
    </section>
  );
}
