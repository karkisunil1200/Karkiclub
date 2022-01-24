import { useRef } from "react";

import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Karkiclub</h3>
            <span className="loginDesc">
              Connect with friends and world around you on Karkiclub
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                ref={email}
                className="loginInput"
                required
              />
              <input
                placeholder="Password"
                type="password"
                minLength="6"
                className="loginInput"
                ref={password}
                required
              />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
