export default function AboutLayout({ children }) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-1 md:py-2'>
      <div className='inline-block max-w-lg text-center justify-center'>
        {children}
      </div>
    </section>
  );
}
