import axios from "axios";
import { useEffect, useState } from "react"

export default function App(){
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    loadData();
  },[]);
  
  const loadData = async ()=>{
   try{ 
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
   }
   catch(err){
    console.log(err);
   }
  }
  return <div>
    <table className="table mt-5">
      <thead>
        <tr>
          <th>S.no</th>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post,index)=><tr key={index}>
          <td>{index+1}</td>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}