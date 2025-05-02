'use client';
import { Button, Form, Input } from '@heroui/react';
import React from 'react';

export const ContactForm = () => {
  const [action, setAction] = React.useState(null);

  return (
    <section className='w-80 my-16'>
      <Form
        className='w-full max-w-s flex flex-col gap-4 bg-slate-600 p-4 rounded-md'
        onReset={() => setAction('reset')}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          console.log({ data });
          setAction(`submit ${JSON.stringify(data)}`);
        }}>
        <Input
          isRequired
          errorMessage='Please enter a valid name'
          label='Name'
          labelPlacement='outside'
          name='name'
          placeholder='Enter your name'
          type='text'
        />
        <Input
          isRequired
          errorMessage='Please enter a valid email'
          label='Email'
          labelPlacement='outside'
          name='email'
          placeholder='Enter your email'
          type='email'
        />

        <Input
          isRequired
          errorMessage='Please enter a valid phone number'
          label='phone'
          labelPlacement='outside'
          name='phone'
          placeholder='Enter your phone'
          type='phone'
        />
        <div className='flex gap-2'>
          <Button color='primary' type='submit'>
            Submit
          </Button>
          <Button type='reset' variant='flat'>
            Reset
          </Button>
        </div>
        {action && (
          <div className='text-small text-default-500'>
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </section>
  );
};
