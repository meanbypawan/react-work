import { useSelector } from "react-redux";
import Third from "./Third";

const Second = ()=>{
    const {data,categoryList} = useSelector(state=> state.master);

    return <>
      <h2>Second Component</h2>
      <p>{data}</p>
      <select>
        {categoryList.map((category)=><option>{category.categoryName}</option>)}
      </select>
      <hr/>
      <Third/>
    </>
}

export default Second;