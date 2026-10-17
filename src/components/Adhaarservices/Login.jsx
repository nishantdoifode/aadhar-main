import React from 'react';
import './Login.css';

export const Login = () => {
  return (
    <div className="uidai-login-page">

      {/* ===== TOP HEADER ===== */}
      <header className="uidai-header">
        <div className="uidai-header-left">
          <img src="/imgs/uidai.svg" alt="Emblem" className="emblem-img" />
          <div className="uidai-header-text">
            <h3>Unique Identification Authority of India</h3>
            <p>Government of India</p>
          </div>
        </div>
        <div className="uidai-header-right">
          <img src="/imgs/adharlogo.gif" alt="Aadhaar" className="aadhaar-logo-img" />
        </div>
      </header>

      {/* ===== LOGIN CARD ===== */}
      <main className="uidai-main">
        <h2 className="uidai-login-heading">Login to Aadhaar via OTP</h2>

        <div className="uidai-login-card">
          <div className="uidai-card-topbar"></div>

          <form className="uidai-login-form" onSubmit={(e) => e.preventDefault()}>

            {/* Aadhaar Input */}
            <div className="uidai-input-group">
              <input
                type="text"
                className="uidai-input"
                placeholder="Enter Aadhaar Number"
                maxLength={12}
              />
            </div>

            {/* Captcha Row */}
            <div className="uidai-captcha-row">
              <div className="uidai-input-group uidai-captcha-input">
                <input
                  type="text"
                  className="uidai-input"
                  placeholder="Enter Captcha"
                />
              </div>

              <div className="uidai-captcha-box">
                <span className="captcha-text">dehm</span>
                <button type="button" className="captcha-icon" title="Refresh Captcha">
                  ⟳
                </button>
                <button type="button" className="captcha-icon" title="Audio Captcha">
                  🔊
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="uidai-submit-btn">
              Login With OTP
            </button>
          </form>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="uidai-footer">
        <p>Copyright © 2024 Unique Identification Authority of India All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Login;