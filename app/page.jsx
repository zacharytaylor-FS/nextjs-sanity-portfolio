export default function Home() {
  return (
    <section className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <div className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='flex gap-x-4'>
          {/* <div>
            <Image
              className='w-auto h-auto rounded-md'
              src='/portfolioImage.png'
              alt='Portfolio Image'
              width={180}
              height={100}
              priority
            />
          </div> */}
          <div className='flex flex-col mx-auto justify-center align-middle text-center'>
            <h1 className='text-4xl md:text-9xl font-extrabold mb-6 text-foreground text-center'>
              Taylor'D
            </h1>
            <div className='text-start'>
              <h2 className='text-lg text-center md:text-5xl my-3'>
                {' '}
                Code. Design. Perfectly Taylor'D.
              </h2>
              {/* <p className='text-md md:text-md py-3 '>
                Hi, my name is Zachary, a Full-stack developer, making a
                difference one page at a time.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
