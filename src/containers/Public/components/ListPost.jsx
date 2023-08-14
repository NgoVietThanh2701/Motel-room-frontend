import React, { useEffect } from 'react'
import { Button, Item } from '../../../conponentItems'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../features/postSlice'

const ListPost = () => {

   const dispatch = useDispatch()
   const { posts } = useSelector(state => state.post)

   useEffect(() => {
      dispatch(getPosts())
   }, [dispatch])

   return (
      <div className='rounded-md py-3 bg-white shadow-md flex flex-col gap-3'>
         <h4 className='text-[20px] px-4 font-semibold text-color_333'>
            Danh sách tin đăng
         </h4>
         <div className='px-4 flex items-center gap-[5px]'>
            <span className='text-[14px]'>Sắp xếp:</span>
            <Button fontSize='text-[12.5px]' bgColor='bg-gray-200' text='Sắp Mặc định' />
            <Button fontSize='text-[12.5px]' bgColor='bg-gray-200' text='Mới nhất' />
            <Button fontSize='text-[12.5px]' bgColor='bg-gray-200' text='Có video' />
         </div>
         <div className='items'>
            {posts?.length > 0 && posts.map((item, index) => (
               <Item
                  key={index}
                  address={item?.address}
                  attributes={item?.attributes}
                  description={JSON.parse(item?.description)}
                  image={JSON.parse(item?.images.image)[0]}
                  star={item?.star}
                  title={item?.title}
                  user={item?.user}
                  countImage={JSON.parse(item?.images.image).length}
               />

            ))}
         </div>
      </div>
   )
}

export default ListPost