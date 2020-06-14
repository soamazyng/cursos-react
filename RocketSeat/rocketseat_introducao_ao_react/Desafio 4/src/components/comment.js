import React from 'react'

function comment({comment}){
  return(
    <div class="comment-post-container">
      {/* Comment Post Item */}
      <div class="comment-post-item">
        <div class="comment-post-item-avatar">
          <img src={comment.author.avatar} />     
        </div>
        <div class="comment-post-item-content">
          <span>{comment.author.name}</span> 
          {comment.content}
        </div>
      </div>
      {/* /Comment Post Item */}
    </div>
  )
}
export default comment;