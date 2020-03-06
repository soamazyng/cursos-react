import React from 'react'

import Comment from './comment';

function post(){
  return(
    <div class="post-item">
      <div class="post-item-container">

        {/* Header Post */}
        <div class="header-post">
            <div class="avatar">
                <img src="http://www.randomkittengenerator.com/cats/rotator.php" />                               
            </div>
            <div class="name-post">
              Júlio Alcantara <br />
              <span>
              04 Jun 2019</span>
            </div>  
          </div> 
          {/* /Header Post */} 

          {/* content post */}
          <div class="content-post">        
            Pessoal, alguém sabe se a Rocketseat está contratando?
          </div>
          {/* /content post */}

          <Comment avatar="http://blog.esaba.com/projects/catphotos/images/1111054.jpg" />
          <Comment avatar="http://blog.esaba.com/projects/catphotos/images/485449.jpg" />
          
      </div>
    </div>
  )
}
export default post;