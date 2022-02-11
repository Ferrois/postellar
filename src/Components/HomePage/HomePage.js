import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post.js";
import { LoginContext } from "../../Context/LoginContext";
import "./HomePage.css"

const HomePage = () => {
  const [posts, setPosts] = useState(["1", "2"]);
  useEffect(async () => {
    const postsRequest = await axios.get("https://postellar-server.herokuapp.com/posts");
    setPosts(postsRequest.data);
    console.log(postsRequest.data);
  }, []);

  const renderPosts = async () => {
    const postsRequest = await axios.get("https://postellar-server.herokuapp.com/posts");
    return postsRequest.data;
  };

  const [login, setLogin] = useContext(LoginContext);
  return (
    <div>
      <h1>
        Welcome, {login.loggedInAs}. <br />
        Here is your feed
      </h1>
      <div className="posts-container">
        {posts.map((number) => {
          console.log(number);
          return (
            <Post
              title={number.title}
              description={number.description}
              username={number.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
