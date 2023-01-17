import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'message',
    initialState:{
        value:{
            dataMessage: ''
        }
    },
    reducers:{
        changeMessage: (state,action)=>{
            state.value.dataMessage = action.payload;
        }
    }
})
export const {changeMessage} = slice.actions;
export default slice.reducer;