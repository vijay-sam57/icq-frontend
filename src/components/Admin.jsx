import React, { useState } from "react";
import Navbar from "./Navbar";
import User from "./User";

const Admin = () => {
  let a = localStorage.getItem("users");
  const [users, setUsers] = useState(JSON.parse(a));
  const [userForm, setUserForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const saveUsers = () => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userName);
    setUserForm(false);
    setUserName("");
  };
  const addUser = (user) => {
    const add = users;
    add.push(user);
    console.log(add);
    setUsers(add);
    saveUsers();
  };

  const updateUser = (user, index) => {
    const temp = users;
    temp[index] = user;
    setUsers(temp);
    saveUsers();
  };

  const deleteUser = (u, index) => {
    setUsers(users.filter((user) => user !== u));
    saveUsers();
  };
  return (
    <div className="Admin">
      <Navbar user="Admin" />
      {userForm ? (
        <div className="container-fluid my-4 w-75 border border-2 border-secondary rounded-3 d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="w-50">
            <h4 className="my-4">Add User</h4>
            <div className="form-floating my-4 w-75 mx-auto">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating my-4 w-75 mx-auto">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="w-25 mx-auto my-3">
              <button
                type="submit"
                className="btn btn-outline-dark w-100 mx-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="d-flex flex-column border border-secondary border-2 rounded-3 w-75 mx-auto my-5">
        <div className="d-flex justify-content-between m-2 p-3 border-bottom border-2 border-secondary">
          <h4>Users</h4>
          <div className="btn-group">
            <button
              onClick={() => setUserForm(true)}
              className="btn btn-outline-success btn-sm mx-2 px-3 rounded"
            >
              Add User
            </button>
          </div>
        </div>
        {users.map((user, index) => {
          return (
            <User
              key={index}
              name={user}
              index={index}
              updateUser={updateUser}
              deleteUser={deleteUser}
            ></User>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
