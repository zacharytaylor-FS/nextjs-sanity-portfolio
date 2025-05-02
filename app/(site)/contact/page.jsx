import { ContactForm } from '../../../components/ContactForm';

export const metadata = {
  title: 'Taylor’D | Contact Page',
  description:
    'Taylor’D is a bold and modern portfolio showcasing custom web development using Next.js, Tailwind CSS, Sanity CMS, and Framer Motion. Discover unique projects and creative digital solutions.',
  keywords: [
    'Web Developer Portfolio',
    'Next.js Developer',
    'Tailwind CSS',
    'Sanity CMS',
    'JavaScript Developer',
    'Framer Motion',
    'Frontend Developer',
    'Full Stack Developer',
  ],
  openGraph: {
    title: 'Taylor’D | Contact Page',
    description:
      'Explore Taylor’D, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.',
    url: 'https://taylord-portfolio-zachary-taylors-projects-f75ab8a1.vercel.app/contact',
    siteName: 'Taylor’D | Contact',
    type: 'website',
  },
};

export default function contactPage() {
  // const [formData, setFormData] = React.useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form submitted! (Integrate backend or form handler here)');
  //   // You can integrate with Formspree, Resend, Nodemailer, etc.
  // };

  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className='text-4xl font-bold text-accent mb-8 flex items-center'>
        {/* <EnvelopeIcon className='w-8 h-8 mr-3' /> */}
        Contact Me
      </h2>
      {/* <Form onSubmit={handleSubmit} className='space-y-6'>
        <Input
          type='text'
          label='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          isRequired
          className='text-black'
        />
        <Input
          type='email'
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          isRequired
          className='text-black'
        />
        <Textarea
          label='Message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          isRequired
          minRows={4}
          className='text-black'
        />
        <Button
          type='submit'
          color='warning'
          className='text-black font-semibold'>
          Send Message
        </Button>
      </Form> */}
      <ContactForm />
    </div>
  );
}
