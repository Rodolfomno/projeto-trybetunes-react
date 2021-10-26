import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorite: false,
    };
  }

  componentDidMount() {
    this.checkFavoritesSongs();
  }

  handleFavorite = ({ target }) => {
    const { info } = this.props;

    this.setState({ loading: true });
    if (target.checked) {
      addSong(info).then(() => { this.setState({ loading: false, favorite: true }); });
    }
    if (!target.checked) {
      removeSong(info).then(() => {
        this.setState({ favorite: false, loading: false,
        });
      });
    }
  }

  checkFavoritesSongs() {
    const { favorite } = this.props;
    if (favorite) this.setState({ favorite: true });
  }

  render() {
    const { info } = this.props;
    const { previewUrl } = info;
    const { trackName } = info;
    const { trackId } = info;
    const { loading, favorite } = this.state;
    return (
      <div>
        <h2>
          { trackName }
        </h2>

        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >

          <track kind="captions" />
          O seu navegador não suporta o elemento de áudio.
        </audio>
        <label htmlFor={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleFavorite }
            checked={ favorite }
          />
        </label>
        { (loading) && <Loading /> }
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  info: PropTypes.shape().isRequired,
  favorite: PropTypes.bool.isRequired,
};
