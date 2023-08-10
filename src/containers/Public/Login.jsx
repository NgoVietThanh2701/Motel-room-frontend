import React, { useEffect, useState } from 'react';
import { Button, InputForm } from '../../components';
import { useLocation } from 'react-router-dom';
import * as action from '../../store/actions';
import { useDispatch } from 'react-redux';

const Login = () => {

   const localtion = useLocation()
   const dispatch = useDispatch()

   const [isRegister, setIsRegister] = useState(localtion.state?.flag)
   const [payload, setPayload] = useState({
      phone: '',
      password: '',
      name: ''
   });

   useEffect(() => {
      setIsRegister(localtion.state?.flag)
   }, [localtion.state?.flag])

   const handleSubmit = async () => {
      dispatch(action.register(payload))
   }

   return (
      <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm'>
         <h3 className='font-bold text-3xl mb-3 text-color_333'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
         <div className='w-full flex flex-col gap-5'>
            {isRegister && <InputForm label='HỌ TÊN' value={payload.name} setValue={setPayload} type='name' />}
            <InputForm label='SỐ ĐIỆN THOẠI' value={payload.phone} setValue={setPayload} type='phone' />
            <InputForm label='MẬT KHẨU' value={payload.password} setValue={setPayload} type='password' />
            <Button
               text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
               textColor='text-white'
               bgColor='bg-bg_blue2'
               fullWidth={true}
               onClick={handleSubmit}
            />
         </div>
         <div className='mt-7 flex items-center justify-between'>
            {isRegister ?
               <small>Bạn đã có tài khoản? <span onClick={() => setIsRegister(false)}
                  className='text-[blue] hover:underline cursor-pointer'>Đăng nhập ngay</span>
               </small> :
               <>
                  <small className='text-[blue] hover:text-[red] cursor-pointer'>Bạn quên mật khẩu</small>
                  <small onClick={() => setIsRegister(true)} className='text-[blue] hover:text-[red] cursor-pointer hover:underline'>
                     Tạo tại khoản mới
                  </small>
               </>
            }
         </div>
      </div>
   )
}

export default Login