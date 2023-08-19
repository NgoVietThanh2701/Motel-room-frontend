import React, { memo } from 'react';

const Button = ({ text, fontSize, textColor, bgColor, px, IcAfter, onClick, fullWidth }) => {
   return (
      <button type='button' className={`py-2 ${px ? px : 'px-[10px]'} ${textColor} ${bgColor} outline-none
         rounded-md hover:underline flex items-center justify-center gap-1 
         ${fullWidth && 'w-full'}`}
         onClick={onClick}
      >
         <span className={`${fontSize}`}>{text}</span>
         {IcAfter && <IcAfter />}
      </button>
   )
}

export default memo(Button)