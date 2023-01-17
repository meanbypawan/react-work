import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { updateCart } from "../reduxconfig/CartSlice";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";
const FeaturedProduct = ()=>{
    const {productList, error, isLoading} =  useSelector(state=>state.product.value);
    const {brandList}  = useSelector(state=>state.brand.value);
    const {isLoggedIn, user} = useSelector(state=>state.user.value);
    const {dataMessage} = useSelector(state=>state.message.value);
    const [message, setMessage] = useState("");
    const {cartList} = useSelector(state=>state.cart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const addToCart = async (product)=>{
     if(isLoggedIn){
        let status = true;
        if(cartList.length == 0)
          status = false;
        else
         status = cartList.some(item=> item._id == product._id);   
        
        if(status){
          toast.info("Product is already added");
        }
        else{
        try{ 
          let response = await WebService.postApi(WebApi.ADD_CART_ITEM,{userId: user._id, product: product});
          if(response.data.status){
             dispatch(updateCart(product));
             toast.success("Product added in cart");
          }
        }
        catch(error){
          console.log(error);
          toast.error("Oops! something went wrong..");
        }
      }  
    }
     else
       navigate("/signin");
    }
    return <>
     <ToastContainer/>
     <div id="project" className="project">
         <div className="container">
           {dataMessage && <h2 className="bg-danger text-white">{dataMessage}</h2>} 
           <div className="titlepage">
                     <h2>Popular Brands</h2>
            </div>
            <div className="row">
                {brandList.map((brand,index)=><div key={index} className="col-2 font-weight-bold">{brand.brandName}</div>)}
                
            </div>
            <div className="row mt-5">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Featured Products</h2>
                  </div>
               </div>
            </div>
            <div className="row">
            <div className="product_main">
            {productList.map((product, index) => <div key={index} className="col-md-4 col-lg-4 col-sm-4">
                  <div className="ml-3 mr-3 mt-5">
                     <img style={{ width: '100%', height: '200px' }} src={"/images/" + product.productImage} alt="#" />
                  </div>
                  <h3 className="text-center mt-3 mb-3">{product.productName}</h3>
                  <h3 className="text-center mt-3 mb-3 text-success font-weight-bold">{product.productPrice} Rs.</h3>
                  <h2 style={{ cursor: 'pointer' }} className="mt-2 mb-4 font-weight-bold text-center text-primary">Product Description</h2>
                  <div style={{ height: "40px" }}>
                     <div style={{ width: "50%", height: "100%", float: "left", }} className="btn btn-outline-warning">Favorite</div>
                     <div onClick={()=>addToCart(product)} style={{ width: "50%", height: "100%", float: 'right', backgroundColor: '#183661' }} className="btn text-white">Add To Cart</div>
                  </div>
               </div>)}

              </div>
            </div>
         </div>
      </div></>
}
export default FeaturedProduct;