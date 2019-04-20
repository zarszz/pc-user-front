import React from 'react';
import Helmet from 'react-helmet';

import './landing-page.css';

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
              <a href="/user-dashboard">Tukar botol plastik</a>
              <a href="/how-it-works">Pelajari lebih lanjut</a>
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
