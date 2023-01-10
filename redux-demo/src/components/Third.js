import { useSelector } from "react-redux";

const Third = ()=>{
    let data = useSelector((state)=>state.master.data);
    return <>
      <h2>Third Component</h2>
      <p>{data}</p>
      <hr/>
      
    </>
}

export default Third;