import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeQty } from "../reduxconfig/CartSlice";
const ViewCart = ()=>{
  const {cartList,totalBillAmount} = useSelector(state=>state.cart.value);
  const [totalPrice,setTotalPrice] = useState();
  const navigate  = useNavigate();  
  const dispatch = useDispatch();
  const changeProductQty = (index,qty,productPrice)=>{
    dispatch(changeQty({qty: qty, index: index}));
    setTotalPrice(productPrice*qty);
  } 
  return <>
    <div className="project" id="project">
        <div className="container">
           <div className="row">
            <div className="col-8">
              <div className="row p-2 text-white font-weight-bold" style={{backgroundColor:"#183661"}}>
                <div className="col-2">S.No</div>
                <div className="col-2">Product</div>
                <div className="col-2">Name</div>
                <div className="col-2">Price</div>
                <div className="col-2">Qty</div>
                <div className="col-2">Total</div>
              </div>
              {cartList.map((item,index)=><div key={index} className="row p-2">
                <div className="col-2">{index+1}</div>
                <div className="col-2"><img src={"/images/"+item.productImage} style={{width:"100px", height:"80px"}}/></div>
                <div className="col-2">{item.productName}</div>
                <div className="col-2">{item.productPrice}</div>
                <div className="col-2">
                  <input onChange={(event)=>dispatch(changeQty({qty: event.target.value, index:index}))} type="number" style={{width:'40px'}} defaultValue={item.qty} min={1}/>
                </div>
                <div className="col-2">{item.total}</div>
              </div>)}
            </div>
            <div style={{height:'300px'}} className="p-3 col-3 border offset-1">
                <p style={{fontSize: "20px"}}>Number Of Item : 20</p>
                <h2 className="mt-3">Bill Amount : <span className="text-success">{totalBillAmount} Rs.</span></h2>
                <div className="text-center">
                  <button onClick={()=>navigate("/checkout")} className="btn btn-outline-danger mt-5">Checkout</button>
                </div>
            </div>
           </div>
        </div>
    </div>
  </>
}

export default ViewCart;