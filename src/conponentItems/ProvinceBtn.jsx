import React, { memo } from 'react'

const ProvinceBtn = ({ name, image }) => {
   return (
      <div className='bg-white rounded-lg overflow-hidden shadow-md cursor-pointer
      text-blue-700 hover:text-red-500'>
         <img src={image} alt="" className='w-[190px] h-[110px] object-cover' />
         <div className='font-semibold text-center my-[6px] text-base'>{name}</div>
      </div>
   )
}

export default memo(ProvinceBtn)