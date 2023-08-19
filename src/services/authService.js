import axiosConfig from '../config/axiosConfig'

export const apiRegister = (dataRegistry) => new Promise(async (resolve, reject) => {
   try {
      const response = await axiosConfig({
         method: 'POST',
         url: '/api/v1/auth/register',
         data: dataRegistry
      });
      resolve(response)
   } catch (error) {
      reject(error)
   }
})

export const apiLogin = (dataLogin) => new Promise(async (resolve, reject) => {
   try {
      const response = await axiosConfig({
         method: 'POST',
         url: '/api/v1/auth/login',
         data: dataLogin
      });
      resolve(response)
   } catch (error) {
      reject(error)
   }
})