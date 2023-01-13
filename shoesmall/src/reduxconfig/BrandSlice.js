import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";

export const fetchBrand = createAsyncThunk("brand/fetchBrand",async ()=>{
 let response = await WebService.getApi(WebApi.LOAD_BRAND);
 if(response.data.status)
   return response.data.result;
});
const slice = createSlice({
    name: 'brand',
    initialState:{
        value:{
            brandList: [],
            isLoading: false,
            error: ""
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchBrand.pending,(state,action)=>{
            state.value.isLoading = true;
        });
        builder.addCase(fetchBrand.fulfilled,(state,action)=>{
            state.value.brandList = action.payload;
            state.value.isLoading = false;
        });
        builder.addCase(fetchBrand.rejected,(state,action)=>{
            state.value.error = "Oops! something went wrong";
            state.value.brandList = [];
            state.value.isLoading = false;
        })
    }
});

export default slice.reducer;