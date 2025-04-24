'use client';
import { Avatar } from '@heroui/react';

export const UserAvatar = ({ picture, alt }) => {
  return (
    <div className='flex overflow-hidden fill min-w-0 fill-width items-center justify-center relative radius-full'>
      <Avatar
        isBordered
        showFallback
        src={picture}
        name={alt}
        radius='full'
        className='w-[150px] h-[150px] object-fill overflow-hidden '
        // Todo: Change default object-fit to fill
        classNames={{
          img: 'object-fill',
        }}
      />
    </div>
  );
};
