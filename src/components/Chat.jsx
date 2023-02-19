import React from "react";
import Navbar from "./Navbar";

const Chat = () => {
  return (
    <div>
      <Navbar user="user"/>
    <div className="container-fluid my-2 w-75 h-75">
      <div className="row border border-2 h-100 mt-3 rounded-3">
        Chat
      </div>
    </div>
    </div>
  );
}

export default Chat;
