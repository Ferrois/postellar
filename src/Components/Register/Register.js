import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
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

  const submitLogin = async () => {
    if (userInfo.username.length < 5 || userInfo.username.length > 14) {
      alert("Username must be 5-14 Characters long");
      return;
    }
    if (userInfo.password.length < 6 || userInfo.password.length > 50) {
      alert("Password must be 6-50 Characters long");
      return;
    }
    const res = await axios.post("https://postellar-server.herokuapp.com/register", userInfo);
    if (res.data.type === "error") {
      alert(res.data.message);
      return;
    }
    console.log(res);
  };

  return (
    <div>
      <h1>Join Postellar Now!</h1>
      <form className="register-form">
        <input
          type="text"
          name="username"
          onChange={handleChangeName}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChangePW}
          placeholder="Password"
          required
        />
        <button type="button" onClick={submitLogin}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
