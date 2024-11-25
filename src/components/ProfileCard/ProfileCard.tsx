'use client';

import React from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import avatar from '@/assets/images/avatar.svg';
import share from '@/assets/images/icons/share.svg';
import { MENU } from '@/components/ProfileCard/constants';

export const ProfileCard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const baseRoute = pathname.split('/').slice(0, 2).join('/');

  const handleChangePage = (link: string) => {
    const targetPath = `${baseRoute}${link.startsWith('/') ? link : `/${link}`}`;
    if (pathname !== targetPath) {
      router.push(targetPath);
    }
  };

  return (
    <div className="inline-flex w-[290px] flex-col items-center justify-start gap-6 overflow-hidden rounded-2xl bg-white-100 pt-6">
      <div className="flex flex-col items-center justify-start gap-4">
        <Image className="size-40 rounded-full" src={avatar} alt="avatar" />
        <div className="font-sans text-xl font-semibold leading-[30px]">John Doe</div>
        <button className="inline-flex h-12 items-center justify-center gap-1.5 rounded-lg border border-solid border-grey-200 bg-white px-6 py-[13px]">
          <span className="font-['Inter'] text-sm font-medium leading-snug">Share Profile</span>
          <Image
            src={share}
            className="flex size-6 items-center justify-center px-[3px] py-0.5"
            alt="share"
          />
        </button>
      </div>
      <hr className="h-0 w-[94%] border-t border-solid border-grey-200 px-2" />
      <div className="flex w-full flex-col items-start justify-start">
        {MENU.map((item, index) => {
          const isActive = pathname.startsWith(`${baseRoute}${item.link}`);

          return (
            <button
              onClick={() => handleChangePage(item.link)}
              key={index}
              className={`w-full border-t border-solid border-grey-200 p-4 font-sans text-sm font-normal leading-[150%] first:border-none ${
                isActive
                  ? 'bg-grey-900 text-white'
                  : 'text-grey-700 hover:bg-grey-100 hover:text-black'
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
