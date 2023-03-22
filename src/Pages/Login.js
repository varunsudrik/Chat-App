import React from "react";
import addAvatar from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2 className="logo">Lama Chat</h2>
        <h4>Login</h4>
        <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="file" id="upload" style={{ display: "none" }}></input>
          <button>Login</button>
        </form>
        <p>Dont have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
