import { useSelector } from "react-redux";

const First = ()=>{
    let { totalItem } = useSelector(state=> state.master.value);
   return <>
     <h1>First Component</h1>
     <h2>Total : {totalItem}</h2>
   </>
}
export default First;