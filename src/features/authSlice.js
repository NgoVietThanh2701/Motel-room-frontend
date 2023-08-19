import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { action } from './actionType'
import { apiRegister, apiLogin } from "../services/authService";

const initState = {
   isLoggedIn: false,
   token: null,
   msg: "",
   update: false
}

export const register = createAsyncThunk(action.AUTH_REGISTER, async (dataRegistry, thunkAPI) => {
   try {
      const response = await apiRegister(dataRegistry)
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
})

/*createAsyncThunk(): create async action*/
export const login = createAsyncThunk(action.AUTH_LOGIN, async (dataLogin, thunkAPI) => {
   try {
      const response = await apiLogin(dataLogin)
      return response.data
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
         console.log(action.error.message + ' >> at register auth')
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
         console.log(action.error.message + ' >> at login auth')
      })
   }
})

export const { resetAuth } = authSlice.actions; /* export action */
export default authSlice.reducer;