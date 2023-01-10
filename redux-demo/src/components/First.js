import { useSelector } from "react-redux";
import Second from "./Second";

const First = ()=>{

    //let data = useSelector(state=>state.master.data);
    //let categoryList=  useSelector(state=>state.master.categoryList);
    const {data,categoryList} = useSelector(state=> state.master);

    return <>
      <h2>First Component</h2>
      <p>{data}</p>
      <select>
        {categoryList.map((category)=><option>{category.categoryName}</option>)}
      </select>
      <hr/>
      <Second/>
    </>
}

export default First;