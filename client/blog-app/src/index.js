import React, { useState } from "react";
import ReactDOM from "react-dom";
import Posts from "./components/posts";
import CreatePost from "./components/inputs/create-post";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleList = (posts) => {
    setPosts(posts);
  };

  return (
    <div className="ui container">
      <CreatePost posts={handleList} />
      <Posts posts={posts} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
