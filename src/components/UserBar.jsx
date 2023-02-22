import React, { useState } from "react";
import { AvatarComponent } from "avatar-initials";
const UserBar = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  return (
    <div className="w-25">
      <div className="h5 p-3 mb-1 rounded-1 bg-dark text-info">Chat</div>
      {users.map((user) => {
        return (
          <div className="d-flex mb-1 border-bottom border-1 border-secondary   ">
            <AvatarComponent
              useGravatar={false}
              initials={user[0]}
              size={36}
              classes="rounded-circle mx-2 my-3"
              background="#6f42c1"
              color="#ffffff"
              offsetY={20}
            ></AvatarComponent>
            <h4 className="user-card my-auto">{user}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserBar;
