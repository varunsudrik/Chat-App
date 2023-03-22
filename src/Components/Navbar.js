import React from "react";
import add from "../images/add.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <span className="user">
        <img src="https://images.pexels.com/photos/14028117/pexels-photo-14028117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
      </span>
      <span className="username">John</span>
      <span className="logout">
        <button>Logout</button>
      </span>
    </div>
  );
};

export default Navbar;
