import React from 'react';
import './how-it-works.css';

class HowItWork extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="title">
            <p>How it works</p>
          </div>

          <div className="tutor1">
            <div className="tutor-image-1">
              <div className="image-1">
              </div>
            </div>
            <div className="tutor-text-1">
              <div className="text-1">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br />
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="tutor2">
            <div className="tutor-image-2">
              <div className="image-2">

              </div>
              <div className="tutor-text-2">
                <div className="text-2">
                  <h1>Lorem ipsum dolor sit amet</h1>
                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
 
          <div className="tutor3">
            <div className="tutor-image-3">
              <div className="image-3">

              </div>
            </div>
            <div className="tutor-text-3">
              <div className="text-3">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <br />
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
              </div>

            </div>
          </div>
                        
        </div>

        <div className="footer">
          <center>
            <div className="footer-box">
              <div className="footer-box-text">
                <p>Siap untuk menjaga dunia</p>
              </div>
              <div className="tukar-box">
                <div className="tukar-text">
                  <a href='/signin'>Tukar botol plastik</a>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default HowItWork;