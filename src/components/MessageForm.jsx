import React from "react";

const MessageForm = () => {
  return (
    <div className="bg-white text-dark">
      <form className="d-flex">
        <input
          className="form-control"
          type="text"
          name="message"
          id="message"
          placeholder="Type your message..."
        />
        <button className="btn btn-outline-success" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
