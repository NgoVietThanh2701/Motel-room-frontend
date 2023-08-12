import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = [{ name: "Trang chủ", path: "home" },
{ name: "Cho thuê phòng trọ", path: "cho-thue-phong-tro" },
{ name: "Nhà cho thuê", path: "nha-cho-thue" },
{ name: "Cho thuê căn hộ", path: "cho-thue-ch" },
{ name: "Cho thuê mặt bằng", path: "cho-thue-mb" }]

const Navigation = () => {
   return (
      <div className='w-screen h-[40px] flex justify-center items-center bg-bg_blue1 text-white'>
         <div className='w-1100 h-full flex items-center text-sm font-medium'>
            {nav?.length > 0 &&
               nav.map((item, index) => (
                  <NavLink
                     to={item.path}
                     key={index}
                     className={({ isActive }) => `px-3 h-full flex items-center hover:bg-bg_red ${isActive && 'bg-bg_red'}`}>
                     {item.name}
                  </NavLink>
               ))}
         </div>
      </div>
   )
}

export default Navigation