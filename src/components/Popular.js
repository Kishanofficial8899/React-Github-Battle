import React, { Component } from 'react';
import { fetchPopulrRepos } from '../utils/api';
import Loading from './Shared/Loading';
import LanguageNav from './LanguageNav';
import ReposGrid from './ReposGrid';

export default class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: {},
    error: null,
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopulrRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch((err) => {
          console.warn('Error fetching repos: ', err);
          this.setState({
            error: 'There was an Error to Fetching Popular repositories',
          });
        });
    }
  };
  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null;
  };
  render() {
    const { selectedLanguage, error, repos } = this.state;
    return (
      <>
        <LanguageNav
          selectedLanguage={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <Loading text='Fetching Repos' />}
        {error && <p className='center-text error'>{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </>
    );
  }
}
