import React from "react";

const MessageForm = (props) => {
  return (
    <div className="MessageForm bg-white text-dark">
      <form className="d-flex" onSubmit={props.handleSubmit}>
        <input
          className="form-control border rounded-2 border-1 border-secondary me-1"
          type="text"
          name="message"
          id="message"
          placeholder="Type your message..."
          value={props.msg}
          onChange={(e) => props.setMsg(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
