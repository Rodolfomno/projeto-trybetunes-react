import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class Content extends React.Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" Component={ Login } />
        <Route path="/search" Component={ Search } />
        <Route path="/album" Component={ Album } />
        <Route path="/favorites" Component={ Favorites } />
        <Route path="/profile" Component={ Profile } />
        <Route path="/profile-edit" Component={ ProfileEdit } />
        <Route path="/" Component={ NotFound } />
      </Switch>

    );
  }
}

export default Content;
