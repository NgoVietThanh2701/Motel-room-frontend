import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiGetCategories } from '../../../services/categorieServices'
import { convertStringtoURL } from '../../../utils/Common/formatStringtoURL'

const Navigation = () => {

   const [categories, setCategories] = useState([])

   /* fetch category */
   async function fetchCategories() {
      const response = await apiGetCategories()
      if (!response?.data.err) {
         setCategories(response.data.response)
      }
   }

   useEffect(() => {
      fetchCategories()
   }, [])

   return (
      <div className='w-full h-[40px] flex justify-center items-center bg-bg_blue1 text-white'>
         <div className='w-5/7 h-full flex items-center text-sm font-medium'>
            <NavLink
               to='/'
               className={({ isActive }) => `px-3 h-full flex items-center hover:bg-bg_red ${isActive && 'bg-bg_red'}`}>
               Trang chủ
            </NavLink>
            {categories?.length > 0 &&
               categories.map((item, index) => (
                  <NavLink
                     to={`${convertStringtoURL(item.value)}`}
                     key={index}
                     className={({ isActive }) => `px-3 h-full text-13 leading-[18px] flex items-center hover:bg-bg_red ${isActive && 'bg-bg_red'}`}>
                     {item.value}
                  </NavLink>
               ))}
         </div>
      </div>
   )
}

export default Navigation