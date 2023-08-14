import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from '../axiosConfig'

const initState = {
   isLoggedIn: false,
   token: null,
   msg: "",
   update: false
}

export const register = createAsyncThunk("auth/register", async (dataRegistry, thunkAPI) => {
   try {
      const response = await axiosConfig({
         method: 'POST',
         url: '/api/v1/auth/register',
         data: dataRegistry
      });
      return response.data
   } catch (error) {
      if (error.response) {
         const message = error.response.data.msg;
         return thunkAPI.rejectWithValue(message);
      }
   }
})

/*createAsyncThunk(): create async action*/
export const login = createAsyncThunk("auth/login", async (dataLogin, thunkAPI) => {
   try {
      const response = await axiosConfig({
         method: 'POST',
         url: '/api/v1/auth/login',
         data: dataLogin
      });
      return response.data
   } catch (error) {
      if (error.response) {
         const message = error.response.data.msg;
         return thunkAPI.rejectWithValue(message);
      }
   }
})

export const authSlice = createSlice({
   name: 'auth',
   initialState: initState,
   /* sync action */
   reducers: {
      resetAuth: (state) => initState
   },
   /* async action */
   extraReducers: (builder) => {
      /* register */
      builder.addCase(register.fulfilled, (state, action) => { /*current state and action receiver*/
         if (action.payload?.err) {
            state.isLoggedIn = false;
            state.msg = action.payload.msg;
            state.update = !state.update
         } else {
            state.isLoggedIn = true;
            state.token = action.payload.token
         }
      });
      builder.addCase(register.rejected, (state, action) => {
         console.log('rejected register auth')
      })
      /* login */
      builder.addCase(login.fulfilled, (state, action) => {
         if (action.payload?.err) {
            state.isLoggedIn = false;
            state.msg = action.payload.msg;
            state.update = !state.update
         } else {
            state.isLoggedIn = true;
            state.token = action.payload.token
         }
      })
      builder.addCase(login.rejected, (state, action) => {
         console.log('rejected login auth')
      })
   }
})

export const { resetAuth } = authSlice.actions; /* export action */
export default authSlice.reducer;