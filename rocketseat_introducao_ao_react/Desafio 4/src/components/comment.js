import React from 'react'

function comment({avatar}){
  return(
    <div class="comment-post-container">
      {/* Comment Post Item */}
      <div class="comment-post-item">
        <div class="comment-post-item-avatar">
          <img src={avatar} />     
        </div>
        <div class="comment-post-item-content">
          <span>Diego Fernandes</span> A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)
        </div>
      </div>
      {/* /Comment Post Item */}
    </div>
  )
}
export default comment;