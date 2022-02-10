import React from 'react'
import "./Post.css"

const Post = (props) => {
  return (
    <div className='post-container'>
        <h3 className='post-title'>{props.title}</h3>
        <p className='post-desc'>{props.description}</p>
        <p className='post-username'>By {props.username}</p>
    </div>
  )
}

export default Post