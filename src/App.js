import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Reward from './user/reward';

import Header from './common/header';
import HowItWork from './common/how-it-works';
import LandingPage from './landing-page';

import UserDashboard from './user/user-dashboard';
import Login from './user/user-feature/signin';
import UserSignUpPage from './user/user-feature/signup';



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route path ="/signin" component={Login} />
          <Route path ="/how-it-works" component={HowItWork} />
          <Route path ="/reward" component={Reward} />
          <Route path ="/user-dashboard" component={UserDashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
