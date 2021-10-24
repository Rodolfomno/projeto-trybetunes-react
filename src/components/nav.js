import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/login">Login</Link>
        <Link to="/Search">Search</Link>
        <Link to="/Album">Album</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile-edit">Profile-edit</Link>
      </div>
    );
  }
}

export default Nav;
