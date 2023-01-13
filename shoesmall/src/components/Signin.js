import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";
import { ToastContainer, toast } from "react-toastify";
import { setCurrentUser } from "../reduxconfig/UserSlice";
import { useDispatch } from "react-redux";
import { fetchCart } from "../reduxconfig/CartSlice";
const Signin = ()=>{
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const signin = async (event)=>{
    event.preventDefault();
    try{
     let response = await WebService.postApi(WebApi.USER_SIGNIN,{email: email, password: password});
     if(response.data.status){
        dispatch(setCurrentUser(response.data.result));
        dispatch(fetchCart(response.data.result._id))
        navigate("/products");
     }  
    }
    catch(error){
        toast.error("Invalid email or password");
    }  
   }
   return <>
   <ToastContainer/>
   <div className="project" id="project">
     <div className="container">
       <div className="row">
         <div  className="col-6 m-auto">
         <form onSubmit={signin}>
             <div className="form-group">
               <label>Email</label>
               <input type="Email" onChange={(event)=>setEmail(event.target.value)} className="form-control"/>
             </div>
             <div className="form-group">
               <label>Password</label>
               <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control"/>
             </div>
             <div className="form-group">
               <button type="submit" disabled={(email=="" || password=="") ? true : false }   className="btn btn-success">Sign in</button>
             </div>
         </form>
         </div>
         </div> 
     </div>
   </div>
</>  
}

export default Signin;