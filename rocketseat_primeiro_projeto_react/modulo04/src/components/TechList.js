import React, {Component} from 'react';

import TechItem from './TechItem';

class TechList extends Component {

  // define as defaultsProps do componente de classe
  static defaultProps = {

  };

  // define as propTypes do componente de classe
  static propTypes = {

  };

  state = {
    techs: [],
    newTech: ''
  };

  // Executado assim que o componente aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({techs: JSON.parse(techs)})
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState){
    if (prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount(){
    
  }

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

  handleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
  }

  render(){
    return (
      // esta tag vazia é chamada de fragment é uma tag vazia para poder utilizar mais tags em um componente
      <>
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} />)
          }
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