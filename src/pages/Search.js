import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h3>Search</h3>
        </div>
      </>
    );
  }
}

export default Search;
