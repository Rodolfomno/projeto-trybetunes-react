import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  handleFavorite = ({ target }) => {
    const { info } = this.props;

    if (target.checked) {
      this.setState({ loading: true });
      addSong(info).then(() => { this.setState({ loading: false }); });
    }
  }

  render() {
    const { info } = this.props;
    const { previewUrl } = info;
    const { trackName } = info;
    const { trackId } = info;
    const { loading } = this.state;
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
};
