import { configureStore } from "@reduxjs/toolkit";
import MasterReducer from './MasterSlice';
const store = configureStore({
   reducer:{
      master: MasterReducer
   }
});

export default store;