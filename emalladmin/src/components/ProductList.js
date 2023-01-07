import axios from "axios";
import { useEffect, useState } from "react";

const ProductList = ()=>{
  const [productList,setProductList] = useState([]);  
  useEffect(()=>{
    loadProducts();
  },[]);
  const loadProducts = async ()=>{
    let response = await axios.get("http://localhost:3000/product/list");
    if(response.data.status)
      setProductList(response.data.result);
  }
  return <>
    {productList.length==0 ?
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
    <table className="table">
        <thead>
            <tr>
                <td>S.no</td>
                <td>Image</td>
                <td>Product</td>
                <td>Brand</td>
                <td>Category</td>
                <td>Description</td>
                <td>Price</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
          {productList.map((product,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>
                <img src={"http://localhost:3000/images/"+product.productImage} style={{width: "100px", height: "100px"}}/>
            </td>
            <td>{product.productName}</td>
            <td>{product.brandId.brandName}</td>
            <td>{product.categoryId.categoryName}</td>
            <td>{product.productDescription}</td>
            <td>{product.productPrice}</td>
            <td>
                <button className="btn btn-outline-primary">Edit</button>
            </td>
            <td>
                <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>)}
        </tbody>
    </table>
  </>
}
export default ProductList;