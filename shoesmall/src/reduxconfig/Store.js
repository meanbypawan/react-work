import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';
import BrandReducer from './BrandSlice';
import UserReducer from './UserSlice';
import CartReducer from './CartSlice';
const store = configureStore({
    reducer:{
        product: ProductReducer,
        brand: BrandReducer,
        user: UserReducer,
        cart: CartReducer
    }
});

export default store;