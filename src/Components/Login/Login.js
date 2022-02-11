import React, { useState, useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context/LoginContext";

const Login = () => {
  const [login, setLogin] = useContext(LoginContext);
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChangeName = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };

  const handleChangePW = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
  };
  const submitLoginAttempt = async () => {
    console.log(userInfo);
    const res = await axios.post(
      "https://postellar-server.herokuapp.com/login",
      userInfo
    );
    alert(res.data.message);
    setLogin({...login,accessToken: res.data.accessToken})
    localStorage.setItem("accessToken", res.data.accessToken);
    if (res.data.accessToken === null) return;
    navigate("/home");
  };
  return (
    <div>
      <h1>Login to your account</h1>
      <form className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChangeName}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChangePW}
        />
        <button type="button"  onClick={submitLoginAttempt}>Login</button>
      </form>
    </div>
  );
};

export default Login;
