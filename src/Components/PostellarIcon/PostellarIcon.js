import React from "react";
import { useNavigate } from "react-router-dom";

const PostellarIcon = () => {
  const navigate = useNavigate();
  return (
    <div style={{ transform: "scale(0.7)", cursor: "pointer"}}>
      <img
        src="./assets/svg/postellaricon.svg"
        alt="PostellarLogo"
        onClick={() => navigate("/")}
      ></img>
    </div>
  );
};

export default PostellarIcon;
