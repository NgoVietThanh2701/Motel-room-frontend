import axiosConfig from '../config/axiosConfig'

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

export const apiGetPostsLimit = (query) => new Promise(async (resolve, rejcet) => {
   try {
      const response = await axiosConfig({
         method: 'GET',
         url: `/api/v1/post/limit`,
         params: query
      })
      resolve(response)
   } catch (error) {
      rejcet(error)
   }
})

export const apiGetNewPosts = () => new Promise(async (resolve, rejcet) => {
   try {
      const response = await axiosConfig({
         method: 'GET',
         url: `/api/v1/post/new-post`,
      })
      resolve(response)
   } catch (error) {
      rejcet(error)
   }
})