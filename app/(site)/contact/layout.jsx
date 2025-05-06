export default function ContactLayout({ children }) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 pt-10'>
      <div className='mx-auto text-center justify-center'>{children}</div>
    </section>
  );
}
