import "./login.css";

const Login = () => {
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
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
