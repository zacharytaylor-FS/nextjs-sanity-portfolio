export default function HeroSection() {
  return (
    <section className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='flex gap-x-4'>
          <div className='flex flex-col mx-auto justify-center align-middle text-center'>
            <h1
              role='heading'
              className='text-6xl sm:text-9xl font-extrabold mb-6 text-foreground text-center'>
              Taylor'D
            </h1>
            <div className='text-start'>
              <h2 className='text-lg text-center md:text-5xl my-3'>
                {' '}
                Code. Design. Perfectly Taylor'D.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
