import React from 'react'

import Comment from './comment';

function post({data}){  
  return(    
    <div class="post-item">
      <div class="post-item-container">

        {/* Header Post */}
        <div class="header-post">
            <div class="avatar">
                <img src={data.author.avatar} />                               
            </div>
            <div class="name-post">
              {data.author.name} <br />
              <span>
              {data.date}</span>
            </div>  
          </div> 
          {/* /Header Post */} 

          {/* content post */}
          <div class="content-post">        
          {data.content}
          </div>
          {/* /content post */}

          {data.comments.map(comment => 
            <Comment key={comment.id} comment={comment} />
          )}
          
      </div>
    </div>
  )
}
export default post;