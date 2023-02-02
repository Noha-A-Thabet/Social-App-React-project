import React from "react";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connect And The World Around You On LamaSocial..
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForget">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create A New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
