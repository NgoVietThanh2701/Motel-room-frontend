import React from 'react'
import { text } from '../../../utils/constant'
import { Province, ListPost } from '../index'

const HomePage = () => {
   return (
      <div className='border border-green-500 flex flex-col'>
         <div>
            <h1 className='text-[28px] leading-normal font-bold text-color_333'>{text.HOME_TITLE}</h1>
            <p className='text-sm text-gray_1'>{text.HOME_DESCRIPTION}</p>
         </div>
         <Province />
         <div className='flex gap-2 mt-3'>
            <div className='w-[70%]'>
               <ListPost />
            </div>
            <div className='w-[30%] border border-yellow-500'>
               Sidebar
            </div>
         </div>
      </div>
   )
}

export default HomePage