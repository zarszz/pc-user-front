import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import {login} from '../../manage-api/_actions/user.actions';

import './signin.css'

const TITLE = 'Sign In';

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(login());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(login(email, password));
      return <Redirect to ="/user-dasrboard"></Redirect>
    }
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>{TITLE} </title>
        </Helmet>

        <div className="login-page">
          <div className="form">
            <div className="login-form">
              <h1><center>Sign In</center></h1>
              <input type="text" name="email" placeholder="email" onchange={this.handleChange} />
              <input type="password" name="password" placeholder="password" onchange={this.handleChange} />
              <div className="form-group">
                <button className="btn btn-primary" onclick={this.handleSubmit}>Login</button>
                <Link to="/register" className="btn btn-link">Register</Link>
              </div>
              <p className="message">Not registered? <p><Link to="/signup">Register</Link></p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;