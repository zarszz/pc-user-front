import React from 'react';
import Helmet from 'react-helmet';

import './landing-page.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const title = 'Dikumpul - Sampahmu Menjadi Hal Menarik';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="col1">
          <div className="headline">
            <h1>Headline</h1>
          </div>
          <div className="description">
            <p>
              Ubah sampah botol plastik<br />
              Jadi hadiah yang menarik<br />
            </p>
            <br />
          </div>
          <div className="option">
            <div className="border-option">
              <span><Link to ="/signin">Tukar botol plastik</Link></span>
              <span> </span>
              <span><Link to ="how-it-works">Pelajari lebih lanjut</Link></span>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="product-image">
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
