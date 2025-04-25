'use client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      className='relative top-1/4 right-1/4 z-50 rounded-full w-2 h-2 p-4'
      onPress={() => router.back()}>
      Back
    </Button>
  );
}
