import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { PostData } from './postData';

import './signin.css'

const TITLE = 'Daftar';

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
          <title>{ TITLE } </title>
        </Helmet>

          <div className="form">
            <h2>Login</h2>
            <input type="email" name="email" placeholder= "email" onChange={this.onChange} /><br />
            <input type="password" name="password" placeholder="password"conChange={this.onChange} /> <br />
            <button type="submit" value="Login" onClick={this.login} >Login</button>
            <a href="/signup">Registration</a>
          </div>
        </div>
    );
  }
}
export default Login;