import { Link } from 'react-router-dom'
import React, {Component} from 'react';

import PropTypes from 'prop-types';

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

import Container from '../../components/Container';
import api from '../../services/api';

import {Loading, Owner, IssuesList, FilterList, ButtonFilter, Pagination, PageButton} from './styles.js';

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
    loading: true,
    filterSel: '',
    page: 1
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

  handleFilter = async (filter) => {

    const issues = await api.get(`/repos/${this.state.repo.full_name}/issues`, {
      params: {
        state: filter,
        per_page: 5
      }
    })

    this.setState({
      filterSel: filter,
      issues: issues.data,
      page: 1
    })
  }

  handlePage = async (actionType) => {

    const currentPage = this.state.page;

    const page = actionType === 'plus' ? currentPage + 1 : currentPage - 1;

    const issues = await api.get(`/repos/${this.state.repo.full_name}/issues`, {
      params: {
        state: this.state.filter,
        per_page: 5,
        page
      }
    })

    this.setState({
      page,
      issues: issues.data
    })
  }

  render() {

    const {repo, issues, loading, page} = this.state;

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
          <ButtonFilter
            onClick={ () => this.handleFilter('all') }
            actived={this.state.filterSel === 'all'}>
              Todas</ButtonFilter>
          <ButtonFilter
            onClick={ () => this.handleFilter('open') }
            actived={this.state.filterSel === 'open' || this.state.filterSel === ''}>
              Abertas</ButtonFilter>
          <ButtonFilter
          onClick={ () => this.handleFilter('closed') }
          actived={this.state.filterSel === 'closed'}>Fechadas</ButtonFilter>
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

          <Pagination>
            <PageButton
              loadingButton={this.state.page === 1}
              onClick={() => this.handlePage()}>
              <FaRegArrowAltCircleLeft />
            </PageButton>
            <PageButton onClick={() => this.handlePage('plus')}>
            <FaRegArrowAltCircleRight />
            </PageButton>
          </Pagination>

      </Container>
    )}
}

export default Repository;
