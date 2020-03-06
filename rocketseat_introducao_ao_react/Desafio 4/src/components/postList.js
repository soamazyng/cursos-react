import React, {Component} from 'react';

import HeaderPage from './headerPage';
import Post from './post';

class PostList extends Component{

  state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Julio Alcantara",
            avatar: "http://url-da-imagem.com/imagem.jpg"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "http://url-da-imagem.com/imagem.jpg"
              },
              content: "Conteúdo do comentário"
            }
          ]
        },        
      ]
    };

  render(){
    return(
      <>
        <HeaderPage />
        <div class="post">
          <Post />
          <Post />
        </div>
      </>
    )
  }

}
export default PostList;