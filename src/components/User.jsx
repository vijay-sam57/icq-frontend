import React, { useState } from "react";
import UserAvatar from "./UserAvatar";

const User = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [user, SetUser] = useState(props.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    props.updateUser(user, props.index);
  };

  return (
    <div className="User d-flex justify-content-between px-5 py-1">
      <div className="d-flex">
        <UserAvatar user={props.name} />
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="username"
              className="form-control my-2"
              value={user}
              onChange={(e) => SetUser(e.target.value)}
            />
          </form>
        ) : (
          <h4 className="my-auto">{user}</h4>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-outline-warning m-2"
        >
          Edit
        </button>
        <button
          onClick={() => props.deleteUser(user)}
          className="btn btn-outline-danger m-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
