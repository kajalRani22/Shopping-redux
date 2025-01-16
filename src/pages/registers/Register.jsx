import React from "react";
import './Register.css'
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form action="">
          <h1>Create your account</h1>
          <div className="input-box">
            <input type="text" placeholder="username" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="email" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="phone-number" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="country" />
          </div>
          <div className="register-agreement">
            <label>
              <input type="checkbox" />I agree to the<b>Terms</b> and{" "}
              <b>Privacy policy</b>
            </label>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
