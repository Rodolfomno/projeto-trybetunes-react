import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      response: false,
    };
  }

  componentDidMount() {
    this.apiAnswer();
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

  render() {
    const { response, musics } = this.state;
    return (
      <>
        <Header />
        <div musics-testid="page-album">

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

          {musics.map((music) => music.kind && <MusicCard
            key={ music.trackId }
            info={ music }
          />)}
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
