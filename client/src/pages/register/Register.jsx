import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    //check if the password are the same
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match; ");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordAgain: passwordAgain.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
                type="text"
              />

              <input
                placeholder="Email"
                type="email"
                ref={email}
                className="loginInput"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <button className="loginRegisterButton">Log into Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
