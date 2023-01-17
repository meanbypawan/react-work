import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';
import BrandReducer from './BrandSlice';
import UserReducer from './UserSlice';
import CartReducer from './CartSlice';
import MessageReducer from './MessageSlice';
const store = configureStore({
    reducer:{
        product: ProductReducer,
        brand: BrandReducer,
        user: UserReducer,
        cart: CartReducer,
        message: MessageReducer
    }
});

export default store;