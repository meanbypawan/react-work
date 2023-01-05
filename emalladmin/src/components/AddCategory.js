import { useRef, useState } from "react";
import axios from "axios";
export default function AddCategory(props){
    const [buttonStatus,setButtonStatus] = useState(true);
    let categoryField = useRef();
    const saveCategory = async (event)=>{
        event.preventDefault();
        let catName = categoryField.current.value;
        let response = await axios.post("http://localhost:3000/category/save",{categoryName: catName});
        if(response.data.status){
            props.setCategoryList([...props.categoryList,response.data.data]);
        }
    }
    const check = (event)=>{
        if(event.target.value.length!=0)
          setButtonStatus(false);
        else
          setButtonStatus(true);  
    }
    return <>
      <form onSubmit={saveCategory} className="mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <input onChange={check} ref={categoryField} type="text" className="form-control" placeholder="Enter category name"/>
                </div>
                <div className="col-md-1 col-lg-1">
                  <button disabled={buttonStatus} type="submit" className="btn btn-success">Save</button>
                </div>
            </div>
        </form>
    </>
}