import React, { Component } from 'react';
import { PostData } from './postData';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.login.bind(this);
  };

  login() {
    if(this.state.email && this.state.password){
      PostData('login', this.state).then((result) => {
        let responseJson  = result;
        if(responseJson.userData){
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({redirectToReferrer: true});
        }
      });
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

render() {

  if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
    return (<Redirect to={'/user-dashboard'}/>)
  }
  
  return (
    <div className="row">
      <div className="medium-5 columns left">
        <h4>SignIn</h4>
        <label>Email</label>
        <input type="email" name="email" placeholder="email" onChange={this.onChange} />
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login} />
        <a href="/signup">Registration</a>
      </div>
    </div>
  );
}
}

export default SignIn;