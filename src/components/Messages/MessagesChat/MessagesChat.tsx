'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import avatar from '@/assets/images/avatar.svg';
import arrow from '@/assets/images/icons/arrow.svg';
import breadcrumbs from '@/assets/images/icons/breadcrumbs.svg';
import { CHAT_HISTORY } from '@/components/Messages/MessagesChat/constants';
import { Button } from '@/ui/Button';

export const MessagesChat = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative flex size-full max-h-[650px] flex-col rounded-2xl border border-grey-200 bg-white font-sans font-normal">
      <div className="inline-flex w-full items-center justify-between border-b border-grey-200 p-4 ">
        <div className="flex items-center justify-start gap-2">
          <button onClick={handleBackClick}>
            <Image className="" src={arrow} alt="arrow" />
          </button>
          <Image className="size-10 rounded-full" src={avatar} alt="avatar" />
          <div className="font-sans text-lg font-semibold leading-[160%]">Ronald Richards</div>
        </div>
        <button>
          <Image className="" src={breadcrumbs} alt="breadcrumbs" />
        </button>
      </div>

      <div className="flex h-full flex-1 flex-col gap-6 overflow-y-auto px-4 pb-7 pt-6">
        {CHAT_HISTORY.map((chat, index) => (
          <div
            key={index}
            className={`flex flex-col items-start ${chat.sender ? 'items-end' : 'justify-end'}`}
          >
            <div className="mb-2 flex gap-2">
              {!chat.sender && <Image src={avatar} alt="avatar" className="size-10" />}
              <div className="self-center text-xs font-semibold text-grey-400">{chat.time}</div>
            </div>
            {chat.text.map((item, index) => (
              <div
                key={index}
                className={`${
                  chat.sender ? 'bg-grey-900 text-white' : 'bg-grey-100 text-black'
                } mb-2 max-w-[75%] rounded-xl p-4 last:mb-0`}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-6 border-t border-grey-200 p-4">
        <input
          placeholder="Type Your Message"
          className="w-full rounded-lg border border-solid border-grey-200 px-4 py-2.5 text-[16px] font-normal "
        />
        <Button variant="primary" type="button" buttonClasses="bg-blue-100">
          Send
        </Button>
      </div>
    </div>
  );
};
