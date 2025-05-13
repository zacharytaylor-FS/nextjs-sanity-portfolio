export default function Footer() {
  return (
    <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
      <small>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </small>
    </footer>
  );
}
