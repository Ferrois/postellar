import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";
import PostellarIcon from "../PostellarIcon/PostellarIcon";
import axios from "axios";

const Header = () => {
  const [login, setLogin] = useContext(LoginContext);

  useEffect(async () => {
    if (login.accessToken === null) return;
    const res = await axios.get("http://localhost:4000/login", {
      headers: {
        Authorization: `Bearer ${login.accessToken}`,
      },
    });
    setLogin({ ...login, loggedInAs: res.data.username, loggedIn: true });
  }, [login.accessToken]);

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="left-side">
          <PostellarIcon />
          <p>Postellar</p>
        </div>
        <div className="right-side">
          <UserIcon />
        </div>
      </header>
    </div>
  );
};

const UserIcon = () => {
  const [active, setActive] = useState(false);
  const [login, setLogin] = useContext(LoginContext);

  const toggleDB = () => {
    setActive(!active);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-wrapper">
        <div className={active ? "dropdown isActive" : "dropdown"}>
          {login.loggedIn ? (
            <DropdownList />
          ) : (
            <LoginButtons toggleDB={toggleDB} />
          )}
        </div>
      </div>
      <div className="icon-wrapper" onClick={() => setActive(!active)}>
        <FaUserAlt />
      </div>
    </div>
  );
};

const DropdownList = () => {
  const [login, setLogin] = useContext(LoginContext);

  const handleLogout = () => {
    setLogin({
      loggedIn: false,
      loggedInAs: undefined,
      accessToken: undefined,
    });
    localStorage.setItem("accessToken", null);
  };

  return (
    <div className="dropdown-list">
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>Profile</li>
        <li>
          <Link to={"/chat"}>Chat</Link>
        </li>
        <li onClick={handleLogout}>Log out</li>
      </ul>
    </div>
  );
};

const LoginButtons = ({ toggleDB }) => {
  return (
    <div className="login-btn-container">
      <Link to={"/login"} onClick={toggleDB}>
        Login
      </Link>
      <Link to={"/register"} onClick={toggleDB}>
        Register
      </Link>
    </div>
  );
};

export default Header;
