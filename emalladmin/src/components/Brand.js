import { useContext, useEffect, useRef, useState } from "react"
import axios from "axios";
import EditBrand from "./EditBrand";
import { useNavigate } from "react-router-dom";
import MasterContext from "./MasterContext";
export default function Brand(){
   const [brandList,setBrandList] = useState([]);
   const {categoryList} = useContext(MasterContext);   
   const [categoryErrorMessage, setCategoryErrorMessage] = useState(false);
   const [brandErrorMessage,setBrandErrorMessage] = useState(false);
   const [categoryStatus,setCategoryStatus]=useState(false);
   const [brandStatus,setBrandStatus] = useState(false);
  
   const categoryField = useRef();
   const brandField = useRef();
   const navigate = useNavigate();
    useEffect(()=>{
      loadBrands();
    },[]);

    const loadBrands = async ()=>{
      let response =  await axios.get("http://localhost:3000/brand/all-brand");
      if(response.data.status)
        setBrandList(response.data.brandList);
    }
    const checkForCategory = (event)=>{
       if(event.target.value == "0"){
         setCategoryErrorMessage("please select category");
         setCategoryStatus(false);
       }
       else{
         setCategoryErrorMessage("");
         setCategoryStatus(true);  
       }
    }
    const checkForBrand = (event)=>{
      if(event.target.value.length==0){
        setBrandErrorMessage("please enter brand name");
        setBrandStatus(false);
      }  
      else{
        setBrandErrorMessage("");
        setBrandStatus(true);
      }
    }
    const saveBrand = async (event)=>{
      event.preventDefault();

      let brandObject = {
        brandName: brandField.current.value,
        categoryId: categoryField.current.value
      }
     
      let response = await axios.post("http://localhost:3000/brand/save",brandObject);
      if(response.data.status)
        setBrandList([...brandList,response.data.result]);
      event.target.reset();
    }
    const editBrand = (brand)=>{
       navigate("/edit-brand",{state:{brandObject: brand}}); 
    }
    return <>
      <h1>Brand Component</h1>
      <hr/>
      <form onSubmit={saveBrand} className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <select ref={categoryField} onChange={checkForCategory} className="form-control">
              <option value="0">Select category</option>
              {categoryList.map((category,index)=><option value={category._id}>
                 {category.categoryName}
              </option>)}
            </select>
            <small className="text-danger">{categoryErrorMessage}</small>
          </div>
          <div className="col-md-5">
            <input ref={brandField} onChange={checkForBrand} type="text" className="form-control" placeholder="Enter Brand Name"/>
            <small className="text-danger">{brandErrorMessage}</small>
          </div>
          <div className="col-md-2">
            <button type="submit" disabled={brandStatus && categoryStatus? false: true} className="btn btn-success">Save</button>
          </div>
        </div>
      </form>
      {brandList.length==0 ?
        <div className="text-center">
            <div class="spinner-grow text-muted"></div>
            <div class="spinner-grow text-primary"></div>
            <div class="spinner-grow text-success"></div>
            <div class="spinner-grow text-info"></div>
            <div class="spinner-grow text-warning"></div>
            <div class="spinner-grow text-danger"></div>
            <div class="spinner-grow text-secondary"></div>
            <div class="spinner-grow text-dark"></div>
            <div class="spinner-grow text-light"></div>
        </div>
        :"" 
       }
      <table className="table mt-5">
        <thead>
          <tr>
            <td>S.no</td>
            <td>Brand name</td>
            <td>Category</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {brandList.map((brand,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{brand.brandName}</td>
            <td>{brand.categoryId.categoryName}</td>
            <td>
              <button onClick={()=>{editBrand(brand)}} className="btn btn-outline-primary">Edit</button>
            </td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </>
}