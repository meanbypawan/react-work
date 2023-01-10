import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'master',
    initialState:{
        value:{
            totalItem: 100
        }
    },
    reducers:{
        increment: (state,action)=>{
          // action.payload 
          let count = 1; 
          if(action.payload)
            count = action.payload;

          state.value.totalItem = state.value.totalItem+ count*1;       
        },
        decrement: (state,action)=>{
            state.value.totalItem = state.value.totalItem - 5 ;
        }
    }
});

export const { increment, decrement } =  slice.actions;
export default slice.reducer;