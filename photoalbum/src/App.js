import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './component/Header'
import Home from './pages/Home'
import User from './pages/User'
import Album from './pages/Album'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/album/:id" component={Album} />
            <Route path="/signin" component={Signin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
