import React from 'react';
import MapComponent from './MapComponent';

const Notepad = () => {
  return (
    <div className='notes'>
      <div className="window" style={{ "position": "absolute", "width": "45vw" }}>
        <div className="title-bar">
          <div className="title-bar-text stoop-sale">Notepad</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body" style={{ "margin": "0px" }}>
          <ul className="menubar">
            <li><u>F</u>ile</li>
            <li><u>E</u>dit</li>
            <li><u>S</u>earch</li>
            <li><u>H</u>elp</li>
          </ul>
          <div className="card-body" style={{ "maxHeight": "80vh", "overflowY": "scroll", "paddingRight": "10px" }}>
            <h3 className="stoop-sale">STOOP SALE in BROOKLYN!!</h3>
            <h4>Saturday 27th June 20204 11am - 4pm</h4>
            <h5>Find us here: (2nd Pl. and Court St)</h5>
            <MapComponent /> 
            <ul>
              <li>Good vibes ✔️</li>
              <li>Awsome stuff ✔️</li>
              <li>Fun times ✔️</li>
            </ul>
            <p>Check out the docs folder for some ideas of what will be selling, and then come on down!</p>
            <p>Can't wait to see you :)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;