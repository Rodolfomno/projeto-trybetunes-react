import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleButton = () => {
    this.setState({
      name: '',
    });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <form>
            <label htmlFor="search-artis-input">
              <input
                type="text"
                name="name"
                data-testid="search-artist-input"
                onChange={ this.handleChange }
                value={ name }
              />
              <button
                type="button"
                data-testid="search-artist-button"
                onClick={ this.handleButton }
                disabled={ name.length <= 1 }
              >
                Pesquisar
              </button>
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
