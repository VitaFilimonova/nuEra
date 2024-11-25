import React from 'react';

import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  buttonClasses?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, buttonClasses, ...props }) => {
  // Выбираем классы на основе варианта
  const buttonClass = classNames(
    'rounded-lg py-3 px-6 flex items-center font-sans text-sm font-medium leading-[160%]',
    {
      'bg-blue-100 text-white': variant === 'primary',
      'bg-white text-blue-700 border border-grey-900 hover:bg-blue-100': variant === 'secondary',
    },
    buttonClasses,
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
