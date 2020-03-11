import { Link } from 'react-router-dom'
import React, {Component} from 'react';

import PropTypes from 'prop-types';

import Container from '../../components/Container';
import api from '../../services/api';

import {Loading, Owner, IssuesList, FilterList, ButtonFilter} from './styles.js';

class Repository extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repo: PropTypes.string,
      })
    }).isRequired,
  }

  state = {
    repo: {},
    issues: [],
    loading: true
  }

  async componentDidMount(){
    const {match} = this.props;

    const repoName = decodeURIComponent(match.params.repo);

    // desta forma eu consigo executar duas requisições ao mesmo tempo
    const [repo, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5
        }
      }),
    ]);

    this.setState({
      repo: repo.data,
      issues: issues.data,
      loading: false
    })

  }

  render() {

    const {repo, issues, loading} = this.state;

    if(loading){
      return <Loading>Carregando</Loading>
    }

    return (
      <Container>

        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repo.owner.avatar_url} alt={repo.owner.login} />
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
        </Owner>

        <FilterList>
          <ButtonFilter>Todas</ButtonFilter>
          <ButtonFilter>Abertas</ButtonFilter>
          <ButtonFilter>Fechadas</ButtonFilter>
        </FilterList>

        <IssuesList>
          {issues.map(issue =>(
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>

                  {issue.labels.map(label => (
                    <span key={String(label.id)}> {label.name} </span>
                  ))}

                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>

      </Container>
    )}
}

export default Repository;
