import React, { useCallback } from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../../components'
import icons from '../../utils/icons.js'
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant.js'
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from '../../features/authSlice';

const { PiPlusCircle } = icons

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch()
   const { isLoggedIn } = useSelector(state => state.auth)

   /* */
   const goLogin = useCallback((flag) => {
      navigate(path.LOGIN, { state: { flag } })
   }, [navigate])

   const goLogout = useCallback(() => {
      dispatch(resetAuth())
   }, [dispatch])


   return (
      <div className='w-1100 flex items-center justify-between'>
         <Link to={'/'}>
            <img src={logo} alt='logo' className='w-[240px] h-[70px] object-contain' />
         </Link>
         <div>
            {!isLoggedIn ?
               <div className='flex items-center gap-1'>
                  <small>Phongtro123.com xin chào!</small>
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
               </div> :
               <div className='flex items-center gap-1'>
                  <small>Phongtro123.com xin chào!</small>
                  <Button text='Đăng xuất'
                     textColor='text-white'
                     bgColor='bg-bg_blue2'
                     onClick={goLogout}
                  />
                  <Button text='Đăng tin mới'
                     textColor='text-white'
                     bgColor='bg-bg_red'
                     IcAfter={PiPlusCircle}
                  />
               </div>
            }
         </div>
      </div>
   )
}

export default Header