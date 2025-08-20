import { useState } from "react";
import googleIcon from "./Assets/google.svg"; 
import appleIcon from "./Assets/apple.svg";
import FbIcon from "./Assets/facebook.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
  const isValidPassword = password.length >= 5;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert("Please enter a valid email address (e.g., name@gmail.com).");
      return;
    }

    if (!isValidPassword) {
      alert("Password must be at least 5 characters long.");
      return;
    }

    alert(`Logging in with Email: ${email}`);
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleAppleLogin = () => {
    window.location.href = "https://appleid.apple.com/auth/authorize";
  };

  const handleFacebookLogin = () => {
    window.location.href = "https://www.facebook.com/login.php";
  };

  return (
    <div className="loginBox">
      <h1 className="formTitle">Welcome Back!</h1>
      <form action="#" className="loginFORM" onSubmit={handleLogin}>
        <div className="infoWrapper">
          <label htmlFor="email" className="inputLabel">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="inputArea"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {!isValidEmail && email.length > 0 && (
            <p className="errorText">Please enter a valid email (e.g., name@gmail.com).</p>
          )}
        </div>

        <div className="infoWrapper">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="inputArea"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isValidPassword && password.length > 0 && (
            <p className="errorText">Password must be at least 5 characters.</p>
          )}

           <a href="#" className="forgotPassword">Forgot password?</a>

        </div>

        <button 
          type="submit" 
          className="loginButton" 
          disabled={!isValidEmail || !isValidPassword}
        >
          Login
        </button>
      </form>

      <p className="ORseparator"><span>or</span></p>
      

      <div className="socMedLogIn">
        <a className="socmedButton" onClick={handleGoogleLogin}>
          <img src={googleIcon} alt="Google" className="socmedIcon" />
        </a>

        <button className="socmedButton" onClick={handleAppleLogin}>
          <img src={appleIcon} alt="Apple" className="socmedIcon" />
        </button>

        <button className="socmedButton" onClick={handleFacebookLogin}>
          <img src={FbIcon} alt="Facebook" className="socmedIcon" />
        </button>
      </div>
          
      <p className="registerPhrase">Don't have an account?<a href="" className="registerText"> Register</a></p>
    </div>
  );
};

export default App;
