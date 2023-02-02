import React from "react";
import "./register.css";
export default function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="email" className="loginInput" />
            <input
              placeholder="password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="reapt password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>

            <button className="loginRegisterButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
