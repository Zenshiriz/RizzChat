import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Rizzchat</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Rizzchat.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input type="email" placeholder="username" id="" className="login-input" />
            <input type="email" placeholder="email" id="" className="login-input" />
            <input type="password" placeholder="password" id="" className="login-input" />
            <input type="password" placeholder="confirm password" id="" className="login-input" />
            <button className="login-button">Sign Up</button>
            <button className="login-register-button">Login into your Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
