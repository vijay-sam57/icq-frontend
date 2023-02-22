import React from "react";
import Messages from "./Messages";
import Navbar from "./Navbar";
import UserBar from "./UserBar";

const Chat = () => {
  return (
    <div className="Chat h-100">
      <Navbar user="user" />
      <div className="container-fluid my-2 w-auto mx-3 h-75">
        <div className="border border-2 w-100 h-100 mt-3 rounded-3 d-flex justify-content-center align-content-center">
          <UserBar />
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Chat;
