import React from "react";

const MessageBody = (props) => {
  return (
    <div className="w-auto overflow-auto">
      {props.messages.map((message) => {
        return (
          <div className="clearfix">
            <div
              style={
                message.sent === "You" ? { float: "right" } : { float: "left" }
              }
              className="card Msg m-2 border-0 shadow card-bg"
            >
              <p className="card-header text-primary h6 border-0">
                {message.sent}
              </p>
              <p className="card-body small p-2 ms-3 m-2 rounded-3">
                {message.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBody;
