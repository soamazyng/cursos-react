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
            avatar: "http://www.randomkittengenerator.com/cats/rotator.php"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "http://blog.esaba.com/projects/catphotos/images/1111054.jpg"
              },
              content: "Conteúdo do comentário"
            },
            {
              id: 2,
              author: {
                name: "Diego Fernandes11",
                avatar: "http://blog.esaba.com/projects/catphotos/images/485449.jpg"
              },
              content: "Conteúdo do comentário2"
            }
          ]
        },        
        {
          id: 2,
          author: {
            name: "Julio Alcantara",
            avatar: "http://www.randomkittengenerator.com/cats/rotator.php"
          },
          date: "04 Jun 2019",
          content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
          comments: [
            {
              id: 1,
              author: {
                name: "Diego Fernandes",
                avatar: "http://blog.esaba.com/projects/catphotos/images/1111054.jpg"
              },
              content: "Conteúdo do comentário"
            },
            {
              id: 2,
              author: {
                name: "Diego Fernandes11",
                avatar: "http://blog.esaba.com/projects/catphotos/images/485449.jpg"
              },
              content: "Conteúdo do comentário2"
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
        {
          this.state.posts.map(post => 
            <Post key={post.id} data={post} />          
          )
        }
        </div>
      </>
    )
  }

}
export default PostList;