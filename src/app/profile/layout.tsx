import React from 'react';

import ProfileCard from '@/components/ProfileCard';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-10 px-20 pb-[118px] pt-10 md:flex-row md:overflow-hidden">
      <div className="">
        <ProfileCard />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ProfileLayout;
