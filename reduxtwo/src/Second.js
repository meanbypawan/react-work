import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./MasterSlice";


const Second = ()=>{
    const [data, setData] = useState(0);

    let { totalItem } = useSelector(state=> state.master.value);
    
    const dispatch = useDispatch();
    
    const incrementTotal = ()=>{
        dispatch(increment(data));
    }
    return <>
      <h1>Second Component</h1>
      <h2>Total : {totalItem}</h2>
      <br/>
      <input type="text" onChange={(event)=>setData(event.target.value)}/>
      <button onClick={incrementTotal}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
 }
 export default Second;