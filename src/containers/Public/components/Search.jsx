import React from 'react';
import { SearchItem } from '../../../conponentItems';
import icons from '../../../utils/icons';

const { BsChevronRight, GoLocation, RiMoneyPoundBoxLine,
   IoMdCrop, LiaHouseDamageSolid, FiSearch } = icons

const Search = () => {
   return (
      <div className='w-5/7 mt-[10px] p-[9px] bg-bg_yellow 
      rounded-md flex items-center justify- gap-2'>
         <SearchItem
            IconAfter={<BsChevronRight size='14px'
               color='rgba(156,163,175)'
               className='pt-[3px]' />}
            IconBefore={<LiaHouseDamageSolid
               color='rgba(156,163,175)'
               size='15px' />}
            text='Phòng trọ, nhà trọ'
            fontWeight />
         <SearchItem
            IconAfter={<BsChevronRight size='14px'
               color='rgba(156,163,175)'
               className='pt-[3px]' />}
            text='Toàn quốc'
            IconBefore={<GoLocation size='13px'
               color='rgba(156,163,175)' />}
         />
         <SearchItem
            IconAfter={<BsChevronRight size='14px'
               color='rgba(156,163,175)'
               className='pt-[3px]' />}
            text='Chọn giá'
            IconBefore={<RiMoneyPoundBoxLine size='14px'
               color='rgba(156,163,175)'
               className='pt-[0.8px]' />}
         />
         <SearchItem
            IconAfter={<BsChevronRight size='14px'
               color='rgba(156,163,175)'
               className='pt-[3px]' />}
            text='Chọn diện tích'
            IconBefore={<IoMdCrop size='14px'
               color='rgba(156,163,175)'
               className='pt-[0.8px]' />}
         />
         <button type='button'
            className='outline-none px-3 py-2 w-full text-13 whitespace-nowrap
             bg-bg_blue2 text-sm flex items-center justify-center
               font-medium gap-2 rounded-md text-white'>
            <FiSearch size='14px' />
            Tìm kiếm
         </button>
      </div>
   )
}

export default Search