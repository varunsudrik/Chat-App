import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"></input>
      </div>
      <div className="userChat">
        <img
          className="imgg"
          src="https://images.pexels.com/photos/14028117/pexels-photo-14028117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></img>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Search;
