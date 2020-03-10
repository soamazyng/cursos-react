import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loadingButton: false,
  };

  // carregar os dados do localStorage
  componentDidMount(_, prevState){
    const repositories = localStorage.getItem('repositories');

    if(repositories){
      this.setState({repositories: JSON.parse(repositories)})
    }
  }

  // salvar os dados no localStorage
  componentDidUpdate(_, prevState){

    const {repositories} = this.state;

    if(prevState.repositories !== repositories){
      localStorage.setItem('repositories', JSON.stringify(repositories))
    }

  }


  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { newRepo, repositories } = this.state;

    this.setState({ loadingButton: true });

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loadingButton: false,
    });
  };

  render() {
    const { newRepo, repositories, loadingButton } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={newRepo}
              onChange={this.handleInputChange}
            />
            <SubmitButton loadingButton={loadingButton}>
              {loadingButton ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                <FaPlus color="#fff" size={14} />
              )}
            </SubmitButton>
          </Form>

          <List>
              {repositories.map(rep => (
                <li key={rep.name} >
                  <span>{rep.name}</span>
                  <a href="">Detalhes</a>
                </li>
              ))}
          </List>

        </Container>
      </>
    );
  }
}

export default Main;
