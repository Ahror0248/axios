import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetvhing() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)
  const [idFrombuttonClick, setIdFrombuttonClick] = useState(1)
//   const handleClick = ()=>{
//       setIdFrombuttonClick(id)
//   } 
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${idFrombuttonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFrombuttonClick]);
  return (
    <div>
        <input type="text" value={id} onChange={e=> setId(e.target.value)} />
        <button type='button' onClick={()=>(setIdFrombuttonClick(id))} >Fetch post</button>
        <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.userId}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetvhing;
