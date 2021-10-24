import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile">
          <h3>Profile</h3>
        </div>
      </>
    );
  }
}

export default Profile;
