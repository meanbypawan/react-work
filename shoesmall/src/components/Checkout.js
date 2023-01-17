import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { changeMessage } from "../reduxconfig/MessageSlice";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";

const Checkout = ()=>{
    const {user} = useSelector(state=>state.user.value);
    const {cartList,totalBillAmount} = useSelector(state=>state.cart.value);
    const navigate = useNavigate();
    const [contact,setContact] = useState();
    const [address,setAddress] = useState();
    const [payment,setPayment] = useState();
    const dispatch = useDispatch();
    const placeOrder = async (event)=>{
        let date = new Date();
        let orderDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        event.preventDefault();
        let response = await WebService.postApi(WebApi.PLACE_ORDER,{
            userId: user._id,
            email: user.email,
            deliveryAddress: address,
            paymentMode: payment,
            contact: contact,
            billAmount: totalBillAmount,
            date: orderDate,
            itemList: cartList
        });
        if(response.data.status){
           dispatch(changeMessage("Order placed successfully"));          
           navigate("/products");
        }
        else{
           toast.error("Oops! something went wrong..");
            event.target.reset();    
        }
     }
    return <>
     <ToastContainer/>
      <div className="project" id="project">
        <div className="container">
            <div className="row">
               <div className="col-6 m-auto"> 
              <form onSubmit={placeOrder}>
                <div className="form-group">
                    <label>Email</label>
                    <h2>{user.email}</h2>
                </div>
                <div className="form-group">
                    <label>Contact number</label>
                    <input onChange={(event)=>setContact(event.target.value)} type="text"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Delivery Address</label>
                    <textarea onChange={(event)=>setAddress(event.target.value)} rows="3" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Payment mode</label>
                    <select className="form-control" onChange={(event)=>setPayment(event.target.value)}>
                        <option>Select payament</option>
                        <option value="COD">Cash on delivery</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Place order</button>
                </div>
              </form>
              </div>
            </div>
        </div>
      </div>
    </>
}

export default Checkout;