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
            error: "",
            totalBillAmount: 0
        }
    },
    reducers:{
        clearCart: (state,action)=>{
             state.value.cartList = [];
             state.value.totalBillAmount = 0;
        },
        updateCart: (state,action)=>{
          let product = JSON.parse(JSON.stringify(action.payload));
          product.qty = 1;
          product.total = product.productPrice;
          state.value.totalBillAmount = state.value.totalBillAmount + product.productPrice*1;
          state.value.cartList.push(product);
        },
        changeQty: (state,action)=>{
           let item = state.value.cartList[action.payload.index];
           item.qty = action.payload.qty;
           item.total = item.productPrice * item.qty;
           state.value.cartList.splice(action.payload.index,1,item);
           state.value.totalBillAmount = 0;
           state.value.cartList.forEach(element=>{
             state.value.totalBillAmount += element.total*1;
           }) 
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.pending,(state,action)=>{
           state.value.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled,(state,action)=>{
            
            let itemList = action.payload;
            itemList.forEach(element => {
                element.qty = 1;
                element.total = element.productPrice;
                state.value.totalBillAmount += element.productPrice*1;    
                state.value.cartList.push(element);
            });

            state.value.isLoading = false
        });
        builder.addCase(fetchCart.rejected,(state,action)=>{
            state.value.cartList = [];
            state.value.isLoading = false;
            state.value.error= "Oops! something went wrong";
        })
    }
})
export const {updateCart, changeQty, clearCart} = slice.actions;
export default slice.reducer;