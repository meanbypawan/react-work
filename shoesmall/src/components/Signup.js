import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WebApi from "../services/WebApi";
import WebService from "../services/WebService";

const Signup = ()=>{
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const signup = async (event)=>{
     event.preventDefault();
     let response = await WebService.postApi(WebApi.USER_SIGNUP,{email: email, password: password});
     if(response.data.status)
       navigate("/signin");
     else
       window.alert("Signup Failed...");   
   }
   return <>
      <div className="project" id="project">
        <div className="container">
          <div className="row">
            <div  className="col-6 m-auto">
            <form onSubmit={signup}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="Email" onChange={(event)=>setEmail(event.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control"/>
                </div>
                <div className="form-group">
                  <button type="submit" disabled={(email=="" || password=="") ? true : false }  style={{backgroundColor:"#183661"}} className="btn btn text-white font-weight-white">Signup</button>
                </div>
            </form>
            </div>
            </div> 
        </div>
      </div>
   </>  
}

export default Signup;