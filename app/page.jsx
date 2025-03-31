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
          <div className=''>
            <h1 className='text-9xl font-bold mb-4 text-foreground'>
              Taylor'D
            </h1>
            <h2 className='text-3xl mb-4'> Code. Design. Perfectly Taylor'D</h2>
            <h3 className='text-2xl'>
              I'm Zachary, a Full-stack developer, making changes one page at a
              time.
            </h3>
          </div>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <small>&copy; 2025 My Portfolio. All rights reserved.</small>
      </footer>
    </section>
  );
}
