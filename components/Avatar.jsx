'use client';
import { Avatar } from '@heroui/react';

export const UserAvatar = ({ picture }) => {
  return (
    <div className='flex items-center'>
      <Avatar showFallback src={picture} />
    </div>
  );
};
