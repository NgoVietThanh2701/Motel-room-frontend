import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiGetPosts } from "../services/postService"

const initStatePost = {
   posts: [],
   isLoading: false,
   msg: ''
}

export const getPosts = createAsyncThunk('posts/get', async () => {
   try {
      const response = await apiGetPosts();
      return response.data
   } catch (error) {
      console.log('Error posts slice: ' + error)
   }
})

export const postSlice = createSlice({
   name: 'posts',
   initialState: initStatePost,
   extraReducers: (builder) => {
      builder.addCase(getPosts.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getPosts.fulfilled, (state, action) => {
         if (!action.payload.err) {
            state.posts = action.payload.response
            state.msg = action.payload.msg
         } else {
            state.msg = action.payload.msg
         }
         state.isLoading = false
      })
      builder.addCase(getPosts.rejected, () => {
         console.log('rejected get posts ')
      })
   }
})

export default postSlice.reducer