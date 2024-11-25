'use client';

import React from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import avatar from '@/assets/images/avatar.svg';

interface User {
  id: number;
  name: string;
  date: string;
  message: string;
}

interface MessagesCardProps {
  user: User;
  maxWidth: number;
}

export const MessagesCard: React.FC<MessagesCardProps> = ({ user, maxWidth }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const handleClick = () => {
    // Append the user ID to the current route
    const newPath = `${pathname}/${user.id}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={handleClick}
      style={{ maxWidth: `${maxWidth}px` }} // Apply dynamic maxWidth
      className="relative w-full rounded-2xl border border-solid border-grey-200 bg-white p-4 font-sans"
    >
      <div className="mb-4 flex items-end justify-between">
        <div className="inline-flex items-end justify-between gap-2">
          <Image className="size-10 rounded-full" src={avatar} alt="avatar" />
          <div className="text-lg font-semibold leading-[160%] text-grey-900">{user.name}</div>
        </div>
        <div className="text-sm font-normal leading-[150%] text-grey-700">{user.date}</div>
      </div>
      <div className="overflow-hidden text-ellipsis text-nowrap text-left text-base font-medium leading-[160%]">
        {user.message}
      </div>
    </button>
  );
};
