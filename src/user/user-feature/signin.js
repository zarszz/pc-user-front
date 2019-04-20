import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './postData';

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
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Login</h4>
          <label>email</label>
          <input type="email" name="email" onChange={this.onChange} />
          <label>Password</label>
          <input type="password" name="password" onChange={this.onChange} />
          <input type="submit" value="Login" onClick={this.login} />
          <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}
export default Login;