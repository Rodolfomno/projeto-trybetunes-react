import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      albums: [],
      name2: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleButton = () => {
    const { name } = this.state;
    this.setState({
      name2: name,
      name: '',
      loading: true,
    });
    searchAlbumsAPIs(name)
      .then((data) => {
        this.setState({
          loading: false,
          albums: data,
        });
      });
  }

  render() {
    const { name, loading, albums, name2 } = this.state;
    return (
      <>
        <Header />
        { loading ? <Loading /> : (
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
            <h3>
              Resultado de álbuns de:
              {' '}
              { name2 }
            </h3>
            { albums.length === 0 && <p>Nenhum álbum foi encontrado</p> }
            <ul>
              {albums.map((album) => (
                <li key={ album.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `/album/${album.collectionId}` }
                  >
                    {album.collectionName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Search;
