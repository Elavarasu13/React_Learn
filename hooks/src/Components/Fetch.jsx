import React, {useState,useEffect} from 'react';

function Fetch() {
    const [post, setPost] = useState(null);
   useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data  = await response.json();
        setPost(data);
    }
    fetchData();
   }, []); // runs once when component 

return( 
<>
  <h1>{post ? post.title : "Loading..." } </h1>
<h1>{post ? post.body : "Loading..." } </h1>
</>
)
}
export default Fetch;