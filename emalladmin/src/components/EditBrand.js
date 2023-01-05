import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
export default function EditBrand(){
    const location = useLocation();
    const [categoryList,setCategoryList] = useState([]);
    const categoryField = useRef();
    const brandField = useRef();
    const navigate = useNavigate();
    useEffect(()=>{
        loadCategories();
    },[]);

    const loadCategories = async () => {
        try {
            let response = await axios.get("http://localhost:3000/category/list");
            if (response.data.status)
                setCategoryList(response.data.result);
        }
        catch (err) {
            console.log(err);
        }
    }
    const updateBrand = async (event)=>{
      event.preventDefault();  
      let brandObject = {
        brandName : brandField.current.value,
        categoryId: categoryField.current.value,
        _id: location.state.brandObject._id
      }
     let response =  await axios.post("http://localhost:3000/brand/update",brandObject);
     if(response.data.status){
        window.alert("Update Successfully");
        navigate("/brand"); 
     }
    }
    return<>
      <h1>Edit Brand</h1>
      <form onSubmit={updateBrand} className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <select ref={categoryField} className="form-control">
               <option value={location.state.brandObject.categoryId._id} selected>{location.state.brandObject.categoryId.categoryName}</option> 
               {categoryList.filter(category=>category._id != location.state.brandObject.categoryId._id).map((category,index)=>
                  <option value={category._id}>
                {category.categoryName}
              </option>)}
            </select>
            <small className="text-danger"></small>
          </div>
          <div className="col-md-5">
            <input ref={brandField} defaultValue={location.state.brandObject.brandName} type="text" className="form-control" placeholder="Enter Brand Name"/>
            <small className="text-danger"></small>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-info">Update</button>
          </div>
        </div>
      </form>
    </>
}