import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function LandingPage() {
  return (
    <div className="landing-page-container">
        <div className="logo">
          <h1>Your Home. <span className="logo-span">Greener.</span></h1>
          <h3 className="logo-description">Enjoy The Experience</h3>
        </div>
        <div className="app-img">
          <img src="https://i.imgur.com/Ojn2Mzs.png" alt="plant app"/>
        </div>
        <div className="login">
          <button className="login-btn">
            <Link to="/login"> Login </Link>
          </button>
        </div>
        <div className="signup">
          <button className="signup-btn">
            <Link to="/signup"> Signup </Link>
          </button>
        </div>
      </div>
  )
};

