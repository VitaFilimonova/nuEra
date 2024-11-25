import React from 'react';

import Image from 'next/image';

import logo from '@/assets/images/logo-light.svg';
import socialMediaLogos from '@/assets/images/social-media-logos.svg';
import { SITEMAP } from '@/components/Footer/constants';

export const Footer = () => {
  return (
    <footer className="bg-grey-900 px-20 py-16 font-sans text-grey-300">
      <div className="flex w-full justify-between">
        <div className="mr-12 max-w-[416px] flex-1">
          <Image src={logo} alt="logo" />
          <p className="mt-6 text-sm font-normal leading-[150%]">
            Empowering learners through accessible and engaging online education. Byway is a leading
            online learning platform dedicated to providing high-quality, flexible, and affordable
            educational experiences.
          </p>
        </div>

        <div className="flex max-w-[1000px] flex-[2] justify-between">
          {SITEMAP.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col">
              <span className="mb-2 text-[18px] font-semibold leading-[160%] text-grey-100">
                {title}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map((link, idx) => (
                  <li key={idx} className="text-sm font-normal leading-[160%]">
                    <a href="#" className="inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {index === SITEMAP.length - 1 && (
                <div className="mt-6 flex gap-4">
                  <Image src={socialMediaLogos} alt="social-media" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
