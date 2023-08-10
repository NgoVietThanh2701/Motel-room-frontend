import React, { useCallback } from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../../components'
import icons from '../../utils/icons.js'
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant.js'

const { PiPlusCircle } = icons

const Header = () => {
   const navigate = useNavigate();

   const goLogin = useCallback((flag) => {
      navigate(path.LOGIN, { state: { flag } })
   }, [navigate])

   return (
      <div className='w-1100 flex items-center justify-between'>
         {/* use Link for no reload page in router nested */}
         <Link to={'/'}>
            <img src={logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
         </Link>
         <div className='flex gap-1'>
            <Button text='Đăng nhập'
               textColor='text-white'
               bgColor='bg-bg_blue2'
               onClick={() => goLogin(false)}
            />
            <Button text='Đăng ký'
               textColor='text-white'
               bgColor='bg-bg_blue2'
               onClick={() => goLogin(true)}
            />
            <Button text='Đăng tin mới'
               textColor='text-white'
               bgColor='bg-bg_red'
               IcAfter={PiPlusCircle}
            />
         </div>
      </div>
   )
}

export default Header