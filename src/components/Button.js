import clsx from 'clsx';
import React from 'react';

const Button = ({ children, size = false, varient = 'solid', className = '', click = null }) => {
  return (
    <button
      onClick={click && click}
      className={clsx(
        'text-sm rounded focus:outline-none focus:ring focus:ring-green-200',
        {
          'py-2.5 px-5': size === 'sm',
          'py-3 px-6': size === 'md',
          'py-3.5 px-7': size === 'lg',
          'bg-green-500 text-white hover:bg-green-600 active:bg-green-700': varient === 'solid',
          'bg-white border border-gray-400 text-black hover:bg-green-500 hover:text-white focus:ring-0':
            varient === 'outline',
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
