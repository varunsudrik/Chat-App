import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import style_home from "../style_home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
export default Home;
