import React from "react";
import addAvatar from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2 className="logo">Lama Chat</h2>
        <h4>Register</h4>
        <form>
          <input type="text" placeholder="User Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="file" id="upload" style={{ display: "none" }}></input>
          <label for="upload">
            <img className="avatar" src={addAvatar}></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? LOGIN</p>
      </div>
    </div>
  );
};

export default Register;
