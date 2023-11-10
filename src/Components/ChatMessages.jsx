import React from "react";

const ChatMessages = ({ message }) => {
  console.log(message);
  return (
    <div className="flex pb-4">
      <img
        className="h-8 "
        src="https://cdn-icons-png.flaticon.com/512/5569/5569626.png"
        alt=""
      />
      <h1 className="font-bold">{message.name}</h1>
      <p className="pl-2">{message.message}</p>
    </div>
  );
};

export default ChatMessages;
