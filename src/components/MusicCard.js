import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { info } = this.props;
    const { previewUrl } = info;
    const { trackName } = info;
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

      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  info: PropTypes.shape().isRequired,
};
