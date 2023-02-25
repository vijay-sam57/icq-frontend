import React from "react";
import UserAvatar from "./UserAvatar";

const UserBar = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  const handleClick = (e) => {
    e.target.classList.toggle("text-white");
    e.target.classList.toggle("bg-dark");
  };
  return (
    <div className="UserBar w-25">
      <div className="h5 p-3 mb-1 rounded-1 bg-primary text-white">Chat</div>
      {users.map((user) => {
        return (
          <div
            onClick={handleClick}
            className="user d-flex mb-1 border-bottom border-1 border-secondary"
          >
            <UserAvatar user={user} size={34} />
            <h5 className="user-card my-auto">{user}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default UserBar;
