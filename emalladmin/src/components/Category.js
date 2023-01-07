import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react"
import AddCategory from "./AddCategory";
import MasterContext from "./MasterContext";

export default function Category({setCategoryList}) {
    const categoryField = useRef();
    const {categoryList} = useContext(MasterContext);
    const saveCategory = async (event)=>{
        event.preventDefault();
        let catName = categoryField.current.value;
        let response = await axios.post("http://localhost:3000/category/save",{categoryName: catName});
        if(response.data.status){
            setCategoryList([...categoryList,response.data.data]);
        }
    }
    const deleteCategory = async (cid,index)=>{
       if(window.confirm("Are you sure ?")){ 
            let response = await axios.get("http://localhost:3000/category/delete",
            {
                params:{id: cid}
            });
            if(response.data.status){
              categoryList.splice(index,1);
              setCategoryList([...categoryList]);
            }
       }
    }
    return <>
        <h1>Categories</h1>
          <AddCategory categoryList={categoryList} setCategoryList={setCategoryList}/>
        <hr />
        {categoryList.length==0 ?
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
                    <td>Category name</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {categoryList.map((category, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{category.categoryName}</td>
                    <td>
                        <button className="btn btn-outline-primary">Edit</button>
                    </td>
                    <td>
                        <button onClick={()=>{deleteCategory(category._id,index)}} className="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>
}