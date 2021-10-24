import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <h3>Album</h3>
        </div>
      </>
    );
  }
}

export default Album;
