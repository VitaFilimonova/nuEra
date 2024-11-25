'use client';

import React, { useRef, useState, useEffect } from 'react';

import MessagesCard from '../../../components/Messages/MessagesCard';
import MessagesFilters from '../../../components/Messages/MessagesFilters';

import { PageTitle } from '@/ui/PageTitle';

const USERS = [
  {
    id: 1,
    name: 'Ronald Richards',
    date: '18th March, 2024',
    message:
      'Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have problems you are If you have problems you are If you have problems you are If you have problems you are',
  },
  {
    id: 2,
    name: 'Ronald Rich',
    date: '15th March, 2024',
    message: 'Thank you for asking your doubt',
  },
];

export default function MessagePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null); // Start with `null` to show spinner

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <PageTitle>Messages</PageTitle>
      <MessagesFilters />
      <div ref={containerRef} className="flex max-h-[555px] w-full flex-col gap-4 overflow-auto">
        {containerWidth === null ? (
          <div className="flex items-center justify-center py-8">
            <div className="size-8 animate-spin rounded-full border-4" />
          </div>
        ) : (
          USERS.map((user) => <MessagesCard key={user.id} user={user} maxWidth={containerWidth} />)
        )}
      </div>
    </div>
  );
}
