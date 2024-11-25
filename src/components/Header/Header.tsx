import React from 'react';

import Image from 'next/image';

import search from '@/assets/images/icons/search.svg';
import logo from '@/assets/images/logo-dark.svg';
import { ICONS } from '@/components/Header/constants';

export const Header = () => {
  return (
    <div className="relative flex h-[65px] items-center justify-between border-b-2 border-grey-300 bg-white px-20 py-3 font-medium text-grey-700">
      <Image src={logo} alt="logo" />
      <a href="#" className=" text-sm font-medium leading-5">
        Categories
      </a>
      <div className="relative">
        <input
          placeholder="Search courses"
          className="relative inline-flex w-[622px] items-center justify-start gap-2.5 rounded-lg border py-3 pl-10 pr-2 text-[12px] leading-none text-grey-700 placeholder:text-grey-700"
        />
        <Image src={search} alt="search" className="absolute left-2.5 top-2.5" />
      </div>
      <a
        href="#"
        className=" left-[960px] top-[24px] font-['Inter'] text-sm font-medium leading-tight"
      >
        Teach on Byway
      </a>
      <div className="flex gap-5">
        <div className=" inline-flex items-center justify-between gap-5">
          {ICONS.map((icon, index) => (
            <a href="#" key={index}>
              <Image key={index} src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
        <a
          href="#"
          className="flex size-10 items-center justify-center rounded-full bg-grey-logo font-sans text-[16px] text-white"
        >
          J
        </a>
      </div>
    </div>
  );
};
