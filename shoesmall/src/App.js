import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import WebService from "./services/WebService";
import Api from './services/WebApi';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./reduxconfig/ProductSlice";
import { fetchBrand } from "./reduxconfig/BrandSlice";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import 'react-toastify/dist/ReactToastify.css';
import ViewCart from "./components/ViewCart";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./components/Checkout";
const axiosApiInstance = axios.create();
const App = ()=>{
  const {token} = useSelector(state=>state.user.value);
  const dispatch = useDispatch();
  axiosApiInstance.interceptors.request.use(function (config) {
    console.log("interceptor called.......................");
    config.headers = { 
      'Authorization': ''+token,
    }
    return config;
  }, function (error) {
    console.log("error.......................");
    return Promise.reject(error);
  });
  useEffect(()=>{
    dispatch(fetchProduct());
    dispatch(fetchBrand());
  },[]);  
  return <>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="products" element={<FeaturedProduct/>}/>
         <Route path="signin" element={<Signin/>}/>
         <Route path="signup" element={<Signup/>}/>
         <Route path="view-cart" element={<ProtectedRoute><ViewCart/></ProtectedRoute>}/>
         <Route path="checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>}></Route>
       </Routes>
     <Footer/>
  </>
}
export default App;