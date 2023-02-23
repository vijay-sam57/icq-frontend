import React from "react";
import "./UserBar.css";
import UserAvatar from "./UserAvatar";

const UserBar = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  const handleClick = (e) => {
    e.target.classList.toggle("active");
  };
  return (
    <div className="UserBar w-25">
      <div className="h5 p-3 mb-1 rounded-1 bg-secondary text-black-50">
        Chat
      </div>
      {users.map((user) => {
        return (
          <div
            onClick={handleClick}
            className="user d-flex mb-1 border-bottom border-1 border-secondary"
          >
            <UserAvatar user={user} />
            <h4 className="user-card my-auto">{user}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserBar;
