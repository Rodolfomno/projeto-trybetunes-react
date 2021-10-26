import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      response: false,
      favoritesSongs: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.apiAnswer();
    this.getFavorite();
  }

  apiAnswer = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    getMusics(id).then((info) => {
      this.setState({
        musics: info,
        response: true,
      });
    });
  }

  getFavorite = () => {
    getFavoriteSongs().then((favorites) => {
      this.setState({
        favoritesSongs: favorites,
        loading: false,
      });
    });
  }

  checkSong(checkSong) {
    const { favoritesSongs } = this.state;
    const { trackId } = checkSong;
    return favoritesSongs.some((song) => song.trackId === trackId);
  }

  render() {
    const { response, musics, loading } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">

          { response && (
            <h2 data-testid="artist-name">
              {musics[0].artistName}
            </h2>
          )}

          { response && (
            <h2 data-testid="album-name">
              {musics[0].collectionName}
            </h2>
          )}

          {loading ? <Loading /> : (musics.map((music) => music.kind && <MusicCard
            key={ music.trackId }
            info={ music }
            favorite={ this.checkSong(music) }
          />))}
        </div>
      </>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
