import axiosConfig from '../axiosConfig'

export const apiGetPosts = () => new Promise(async (resolve, rejcet) => {
   try {
      const response = await axiosConfig({
         method: 'GET',
         url: '/api/v1/post/all'
      })
      resolve(response)
   } catch (error) {
      rejcet(error)
   }
})