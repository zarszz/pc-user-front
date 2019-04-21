import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PostData } from './postData';

import './signin.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const TITLE = 'Sign In';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  login() {
    if (this.state.email && this.state.password) {
      PostData(this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/user-dashboard'} />)
    }

    return (
      <div>
        <Helmet>
          <title>{TITLE} </title>
        </Helmet>

        <div className="login-page">
          <div className="form">
            <div className="login-form">
              <h1><center>Sign In</center></h1>
              <input type="text" placeholder="email" onchange={this.Onchange} />
              <input type="password" placeholder="password" onchange={this.Onchange} />
              <button onClick={this.login}>login</button>
              <p className="message">Not registered? <p><Link to="/signup">Register</Link></p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;