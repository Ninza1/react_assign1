import React, {useEffect, useState} from 'react'

const Posts = () => {
  const[posts, setPosts] = useState([])


//fetch data from api
useEffect(() => {
  fetch("https://dummyjson.com/posts")
  .then((res)=> {
    return res.json();
  })
  .then((data) => setPosts(data.posts))

},[]) // fetch data once

  return (
    <div className='parent'>
     <h2>All Posts Showing Here.</h2>
     <div className='posts-container'> 
     {posts ? posts.map((elem, id) => {
      return(
        <div className='post-card' key = {id}>
        <h1>userId: {elem.userId}</h1>
          <h3>Title: {elem.title}</h3>
          <h5>Tags: {`${elem.tags}`}</h5>
          <p><strong> Body:</strong> {elem.body}</p>
        </div>  
      )
    }):"Loading..."}

  </div>
</div>
    
  )
}

export default Posts
