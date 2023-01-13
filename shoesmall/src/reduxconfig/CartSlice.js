import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";

export const fetchCart = createAsyncThunk("cart/fetchCart",async(userId)=>{
  let response = await WebService.postApi(WebApi.LOAD_CART,{userId: userId});
  return response.data.result[0].cartItems;
});
const slice = createSlice({
    name: 'cart',
    initialState:{
        value:{
            cartList: [],
            isLoading: false,
            error: ""
        }
    },
    reducers:{
        updateCart: (state,action)=>{
          //state.value.cartList = [...state.value.cartList, action.payload];
          state.value.cartList.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.pending,(state,action)=>{
           state.value.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            state.value.cartList = action.payload;
            state.value.isLoading = false
        });
        builder.addCase(fetchCart.rejected,(state,action)=>{
            state.value.cartList = [];
            state.value.isLoading = false;
            state.value.error= "Oops! something went wrong";
        })
    }
})
export const {updateCart} = slice.actions;
export default slice.reducer;