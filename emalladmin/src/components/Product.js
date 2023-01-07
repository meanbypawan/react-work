import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react"
import MasterContext from "./MasterContext";

export default function Product(){
    const {categoryList} = useContext(MasterContext);

    const [brandList,setBrandList] = useState([]);
    const categoryField = useRef();
    const brandField = useRef();
    const productNameField = useRef();
    const productPriceField = useRef();
    const productDescriptionField = useRef();
    let filename = useRef("");
    
    const getCategoryId = async (event)=>{
      let categoryId = event.target.value;
      let response = await axios.get("http://localhost:3000/brand/brandbycategory",{params:{id: categoryId}});
      if(response.data.status)
        setBrandList(response.data.brandList);       
    }
    const onFileChange = (event)=>{
      filename = event.target.files[0];
    }
    const saveProduct = async (event)=>{
       event.preventDefault();
       let formData = new FormData();
       formData.append("productImage",filename);
       formData.set("categoryId", categoryField.current.value);
       formData.set("brandId",brandField.current.value);
       formData.set("productName",productNameField.current.value);
       formData.set("productPrice",productPriceField.current.value);
       formData.set("productDescription",productDescriptionField.current.value);

       let response = await axios.post("http://localhost:3000/product/save",formData);
       if(response.data.status){
        window.alert("Product Saved");
        console.log(response.data.result);
       }
       event.target.reset();
    }
    return <>
      <h1>Product Component</h1>
      <hr/>
      <div classnName="container">
        <form onSubmit={saveProduct}>
          <div className="form-group">
            <label>Category</label>
            <select ref={categoryField} onChange={getCategoryId} className="form-control">
              <option value="0">Select category</option>
              {categoryList.map((category,index)=><option value={category._id}>
                {category.categoryName}
              </option>)}
            </select>
          </div>
          <div className="form-group">
            <lable>Select Brand</lable>
            <select ref={brandField} className="form-control">
              {brandList.map((brand,index)=><option value={brand._id}>
                {brand.brandName}
              </option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Product name</label>
            <input ref={productNameField} type="text" className="form-control" required/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input ref={productPriceField} type="text" className="form-control" required/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea ref={productDescriptionField} className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input onChange={onFileChange} type="file" className="form-control" required/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-info">Save</button>
          </div>
        </form>
      </div>
    </>
}