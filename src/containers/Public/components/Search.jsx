import React, { useState } from 'react';
import { Modal, SearchItem } from '../../../conponentItems';
import icons from '../../../utils/icons';
import { useSelector } from 'react-redux';

const { BsChevronRight, GoLocation, RiMoneyPoundBoxLine,
   IoMdCrop, LiaHouseDamageSolid, FiSearch } = icons

const Search = () => {

   const { provinces, areas, prices, categories } = useSelector(state => state.app)
   const [isShowModal, setisShowModal] = useState(false)
   const [content, setcontent] = useState([])
   const [name, setname] = useState('')

   const handleShowModal = (content, name) => {
      setcontent(content)
      setname(name)
      setisShowModal(true)
   }

   return (
      <>
         <div className='w-5/7 mt-[10px] p-[9px] bg-bg_yellow 
      rounded-md flex items-center justify- gap-2'>
            <span onClick={() => handleShowModal(categories, 'category')} className='flex-1 cursor-pointer'>
               <SearchItem
                  IconAfter={<BsChevronRight size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[3px]' />}
                  IconBefore={<LiaHouseDamageSolid
                     color='rgba(156,163,175)'
                     size='15px' />}
                  text='Phòng trọ, nhà trọ'
                  fontWeight />
            </span>
            <span onClick={() => handleShowModal(provinces, 'province')} className='flex-1 cursor-pointer'>
               <SearchItem
                  IconAfter={<BsChevronRight size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[3px]' />}
                  text='Toàn quốc'
                  IconBefore={<GoLocation size='13px'
                     color='rgba(156,163,175)' />}
               />
            </span>
            <span onClick={() => handleShowModal(prices, 'price')} className='flex-1 cursor-pointer'>
               <SearchItem
                  IconAfter={<BsChevronRight size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[3px]' />}
                  text='Chọn giá'
                  IconBefore={<RiMoneyPoundBoxLine size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[0.8px]' />}
               />
            </span>
            <span onClick={() => handleShowModal(areas, 'area')} className='flex-1 cursor-pointer'>
               <SearchItem
                  IconAfter={<BsChevronRight size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[3px]' />}
                  text='Chọn diện tích'
                  IconBefore={<IoMdCrop size='14px'
                     color='rgba(156,163,175)'
                     className='pt-[0.8px]' />}
               />
            </span>
            <button type='button'
               className='flex items-center justify-center flex-1 outline-none
               px-3 py-2 w-full text-13 whitespace-nowrap bg-bg_blue2 text-sm 
               font-medium gap-2 rounded-md text-white'>
               <FiSearch size='14px' />
               Tìm kiếm
            </button>
         </div>
         {isShowModal &&
            <Modal content={content}
               setisShowModal={setisShowModal}
               name={name} />}
      </>
   )
}

export default Search