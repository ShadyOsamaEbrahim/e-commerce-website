import React, { Children } from 'react'

const PrimaryButtons = ({children,className="",onClick,...props}) => {
  return (
     <button 
            onClick={onClick}
            className={`bg-linear-to-r from-mainColor
            to-secondMainColor  dark:from-secondMainColor dark:to-secondMainColor/20 transition-all duration-200
            text-white py-1 px-4 rounded-full flex
            items-center gap-3  cursor-pointer ${className}`}{...props}
            >
                {children}
            </button>
  );
};

export default PrimaryButtons
