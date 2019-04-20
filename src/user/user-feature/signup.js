import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Helmet from 'react-helmet';

import './sign-up.css'

const TITLE = 'Sign Up';


class UserSignUpPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet><title>{TITLE}</title></Helmet>
        <div className="reg-form">
          <div className="register-form">
            <h1><center>Register</center></h1>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>Sign Up</button>
            <p className="message">Already registered? <span><Link to="/signin">Sign In</Link></span></p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSignUpPage;