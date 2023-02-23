import React from "react";
import MessageBody from "./MessageBody";
import MessageForm from "./MessageForm";
import UserAvatar from "./UserAvatar";

const Messages = () => {
  return (
    <div className="d-flex flex-column w-75 h-100 border-0 border-start">
      <div className="d-flex bg-secondary">
        <UserAvatar user={"User"} />
        <h4 className="my-auto text-white-50"> User</h4>
      </div>
      <MessageBody />
      <MessageForm />
    </div>
  );
};

export default Messages;
