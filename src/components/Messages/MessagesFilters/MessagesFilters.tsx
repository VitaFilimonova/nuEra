import React from 'react';

import Image from 'next/image';

import filter from '@/assets/images/icons/filter.svg';
import search from '@/assets/images/icons/search.svg';
import arrow from '@/assets/images/icons/short-arrow.svg';
import { Button } from '@/ui/Button';

export const MessagesFilters = () => {
  return (
    <div className="mr-5 flex w-full items-center justify-between">
      <div className="relative">
        <input
          placeholder="Search user"
          className="relative inline-flex w-[300px] items-center justify-start gap-2.5 rounded-lg border py-3 pl-2.5 pr-10 text-sm leading-none text-grey-700 placeholder:text-grey-700"
        />
        <Image src={search} alt="search" className="absolute right-2.5 top-2.5 size-6" />
      </div>

      <div className="flex h-full gap-6">
        <div className="flex h-full items-center gap-[15px]">
          <span>Sort By</span>
          <Button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            type="button"
            variant="secondary"
          >
            <span className="mr-1.5">Relevance</span>
            <Image src={arrow} alt="arrow" />
          </Button>
        </div>

        <Button type="button" variant="secondary">
          <Image src={filter} alt="filter" className="mr-1.5" />
          <span>Filter</span>
        </Button>
      </div>
    </div>
  );
};
