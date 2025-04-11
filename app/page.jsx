export default function Home() {
  return (
    <section className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
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
          <div className='flex flex-col mx-auto justify-center text-center'>
            <h1 className='text-9xl font-extrabold mb-4 text-foreground text-center'>
              Taylor'D
            </h1>
            <div className='text-start'>
              <h2 className='text-2xl mt-5 '>
                {' '}
                Code. Design. Perfectly Taylor'D
              </h2>
              <p className='text-md py-3 font-semibold '>
                Hi, my name is Zachary, a Full-stack developer, making changes
                one page at a time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <small>&copy; 2025 My Portfolio. All rights reserved.</small>
      </footer>
    </section>
  );
}
