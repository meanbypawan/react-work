import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState:{
        value:{
            user: {},
            isLoggedIn:  false,
            token: ''
        }
    },
    reducers:{
      setCurrentUser : (state,action)=>{
          state.value.user = action.payload;
          state.value.token = action.payload.token
          state.value.isLoggedIn = true
      },
      logOut: (state,action)=>{
        state.value.user = {};
        state.value.isLoggedIn = false
      }
    }
});
export const {setCurrentUser, logOut} = slice.actions;
export default slice.reducer;