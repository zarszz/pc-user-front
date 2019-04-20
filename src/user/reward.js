import React from 'react';
import './reward.css';

import Helmet from 'react-helmet';

const title = 'Rewards';

class Reward extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{ title }</title>
        </Helmet>
        <div className="container">
          <div className="col1">
            <div className="head">
              <h1><strong>Tukar <br />
                Sampahmu</strong></h1>
              <p>
                Kumpulkan sampah<br />
                botol plastik kamu<br />
                lalu tukarkan dengan<br />
                kebutuhanmu<br /><br />
              </p>
            </div>
            <div className="tukar">
              <div className="tukar-box">
                <div className="tukar-box-text">
                  <a href="signin">Tukar botol plastik</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="table">
              <div className="t1">
                <div className="t1-box">
                </div>
                <div className="t1-description">
                  <p>Pulsa</p>
                </div>
              </div>
              <div className="t2">
                <div className="t2-box">
                </div>
                <div className="t2-description">
                  <p>Kuota</p>
                </div>
              </div>
              <br />
              <div className="t3">
                <div className="t3-box">
                </div>
                <div className="t3-description">
                  <p>Makanan</p>
                </div>
              </div>
              <div className="t4">
                <div className="t4-box">
                </div>
                <div className="t4-description">
                  <p>Tupperware</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reward;