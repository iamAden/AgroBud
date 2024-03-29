import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar-before-login/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div class="login">
      <Navbar/>
        <div class="logincontainer">
        <h1 class="login-header">LOGIN</h1>
        <p id="login-desc">Welcome Back! Ready to continue your journey with us.</p>
      <div class="credential-container">

        <form action="">

        <div className="Input-Container">
          <label htmlFor="" >Email Address: </label>
          <br></br>
          <input type="email" placeholder="--Enter your email address--" className="input-Box"/>
        </div>

       <div className="Input-Container">
        <label htmlFor="" >Password: </label>
        <br></br>
        <input type="password" placeholder="--Enter your password--" className="input-Box"/>
       </div>

       <div className="Input-Container">
        <div >
          <input type="checkbox" name=""if="" />
          <label htmlFor="Remember Me"> Remember Me</label>
        </div>
        <span id="forget">Forgot Password?</span>
      </div>

            <Link to="/home">
              <button className="btn">Log In</button>
            </Link>

        <div className="Input-Container">
          <span><Link to="/register">New Here ? Create an Account</Link></span>
        </div>
      </form>
      </div>
      </div>     
      <Footer/>
    </div>
  );
};

export default Login;
