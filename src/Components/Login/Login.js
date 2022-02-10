import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

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
    const res = await axios.post("http://localhost:4000/login", userInfo);
    alert(res.data.message);
    localStorage.setItem("accessToken",res.data.accessToken);
  }
  return (
    <div>
      <h1>Login to your account</h1>
      <form action="#" className="login-form" onSubmit={submitLoginAttempt}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
