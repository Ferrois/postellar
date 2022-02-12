import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import PostellarIcon from "../PostellarIcon/PostellarIcon";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper full-height-grow">
      <div className="main-container">
        <div className="main-left"><PostellarIcon/></div>
        <div className="main-right">
          <h2>Post to your heart's content</h2>
          <p>
            Postellar is a new and modern web application for you to post your
            adventures and experiences for many others to see!
          </p>
          
        <button onClick={()=>navigate("/register")} style={{cursor:"pointer"}}>Join Now!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
