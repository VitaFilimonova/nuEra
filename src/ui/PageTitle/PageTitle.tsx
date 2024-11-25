import React from 'react';

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="font-sans text-xl font-semibold leading-[150%] text-grey-900">{children}</h5>
  );
};
