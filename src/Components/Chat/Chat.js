import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import "./Chat.css";

const Chat = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [chat, setChat] = useState([]);
  const [inputChat, setInputChat] = useState({ content: "" });
  useEffect(async () => {
    const reqChat = await axios.get("http://localhost:4000/chat", {
      headers: {
        Authorization: `Bearer ${login.accessToken}`,
      },
    });
    setChat(reqChat.data);
    console.log(reqChat.data);
  }, []);

  const changeHandler = (e) => {
    setInputChat({ content: e.target.value });
  };

  const submitHandler = (e) => {
    axios.post("http://localhost:4000/chat", inputChat, {
      headers: {
        Authorization: `Bearer ${login.accessToken}`,
      },
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} />
        <button type="submit">Send</button>
      </form>
      {chat.map((chat) => {
        return (
          <div className="chat-container">
            <p>
              {chat.username} : {chat.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
