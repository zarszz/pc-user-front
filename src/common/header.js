import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="topnav">
        <div className="sign">
          <p><Link to="/signin">Sign In / Sign Up</Link></p>
        </div>
        <div className="left">
          <a href="/">Ini Logo</a>
        </div>
        <div className="right">
        <p><Link to="/how-it-works">How It Works</Link></p>
        <p><Link to="/reward">Reward</Link></p>        
        </div>
      </div>
    );
  }

}

export default Header;