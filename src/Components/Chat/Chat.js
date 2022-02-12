import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import "./Chat.css";

const Chat = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [chat, setChat] = useState([]);
  const [inputChat, setInputChat] = useState({ content: "" });
  useEffect(async () => {
    const reqChat = await axios.get("https://postellar-server.herokuapp.com/chat", {
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

  const submitHandler = () => {
    axios.post("https://postellar-server.herokuapp.com/chat", inputChat, {
      headers: {
        Authorization: `Bearer ${login.accessToken}`,
      },
    });
    setInputChat({content : ""});
  };

  return (
    <div>
      <form >
        <input type="text" onChange={changeHandler} value={inputChat.content}/>
        <button type="button" onClick={submitHandler}>Send</button>
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
