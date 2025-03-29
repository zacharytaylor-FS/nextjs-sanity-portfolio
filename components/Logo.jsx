'use client';
import { Image } from '@heroui/react';

export const Logo = ({ logo, width, height }) => {
  return (
    <div>
      <Image
        className='object-fit w-full h-auto'
        src={logo}
        height={height || 180}
        width={width || 220}
      />
    </div>
  );
};
