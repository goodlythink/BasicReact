import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './component/Header'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
