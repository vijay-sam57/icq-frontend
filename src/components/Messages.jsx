import React, { useState } from "react";
import MessageBody from "./MessageBody";
import MessageForm from "./MessageForm";
import UserAvatar from "./UserAvatar";

const Messages = () => {
  const [messages, setMessages] = useState([
    { sent: "You", content: "good morning" },
    { sent: "Vijay", content: "gm" },
    { sent: "You", content: "you want the notes?" },
    { sent: "Vijay", content: "yesss where r u?" },
    { sent: "You", content: "in dept right now " },
  ]);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = messages;
    temp.push({ sent: "You", content: msg });
    setMessages(temp);
    setMsg("");
    console.log(messages);
  };
  return (
    <div className="d-flex flex-column w-75 h-100 border-0 border-start">
      <div className="d-flex text-primary MessageHead">
        <UserAvatar user={"Vijay"} />
        <h4 className="my-auto"> Vijay</h4>
      </div>
      <MessageBody messages={messages} />
      <MessageForm msg={msg} setMsg={setMsg} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Messages;
