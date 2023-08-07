import React from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../../components'

const Header = () => {
   return (
      <div className='w-1100 flex items-center justify-between'>
         <img src={logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
         <div className='flex  gap-1'>
            <Button text='Đăng nhập' textColor='text-white'
               bgColor='bg-btn_blue'/>
            <Button text='Đăng ký' textColor='text-white'
               bgColor='bg-btn_blue'/>
            <Button text='Đăng tin mới' textColor='text-white'
               bgColor='bg-btn_red'/>
         </div>
      </div>
   )
}

export default Header