import React, { useState, useContext, useEffect } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";
import PostellarIcon from "../PostellarIcon/PostellarIcon";
import axios from "axios";


const Header = () => {
  const [login, setLogin] = useContext(LoginContext);

  useEffect(async () => {
    if (login.accessToken === null) return;
    const res = await axios.get(
      "https://postellar-server.herokuapp.com/login",
      {
        headers: {
          Authorization: `Bearer ${login.accessToken}`,
        },
      }
    );
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
        <GiHamburgerMenu />
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
          <Link to={"/home"} className="navItem">
            Home
          </Link>
        </li>
        <li>Profile(WIP)</li>
        <li>
          <Link to={"/chat"} className="navItem">
            Chat
          </Link>
        </li>
        <li onClick={handleLogout}>Log out</li>
      </ul>
    </div>
  );
};

const LoginButtons = ({ toggleDB }) => {
  return (
    <div className="login-btn-container">
      <ul>
        <li>
          <Link to={"/login"} onClick={toggleDB} className="navItem">
            Login
          </Link>
        </li>
        <li>
          <Link to={"/register"} onClick={toggleDB} className="navItem">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
