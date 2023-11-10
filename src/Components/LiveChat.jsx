import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { generateRandomName, makeRandomMessage } from "./utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "./reduxcomponents/chatSlice";
import appstore from "./reduxcomponents/appstore";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((appstore) => appstore.chat.messages);
  //let [messages, setmessages] = useState([]);
  useEffect(() => {
    const i = setInterval(() => {
      /*const array = messages;
      array.push({
        name: generateRandomName(),
        message: makeRandomMessage(20),
      });

      setmessages(array);*/

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 200);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {messages.length
        ? messages.map((message, index) => (
            <ChatMessages key={index} message={message} />
          ))
        : null}
    </div>
  );
};

export default LiveChat;
