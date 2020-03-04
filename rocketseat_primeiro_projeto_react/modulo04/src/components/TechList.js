import React, {Component} from 'react'

class TechList extends Component {

  state = {
    techs: ['node', 'react', 'reactnative'],
    newTech: ''
  };

  // toda vez que vc precisar utilizar o this deve criar uma função do tipo Arrow Function
  handleInputChange = e => {
    // como o state é imutável precisamos utilizar a função setState para mudar o estado
    this.setState({newTech: e.target.value})    
  }

  handleSubmit = e => {
    e.preventDefault();

    // como o estado é imutável eu não consigo dar um push no array,
    // eu preciso recriar o array e depois inserir o que eu quero e enviar o array novo para o state
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render(){
    return (
      // esta tag vazia é chamada de fragment é uma tag vazia para poder utilizar mais tags em um componente
      <>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} />
        <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;