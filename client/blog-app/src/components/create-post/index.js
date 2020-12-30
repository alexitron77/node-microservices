import React, { useEffect, useState } from 'react';
import { getPosts, sendPost } from "../../../services/posts";

const CreatePost = (props) => {

  const [title, setTitle] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.posts(posts);
  }, [posts, props]);

  useEffect(
    () => {
      const callAPI = async() => {
      setPosts(await getPosts());
    }
    callAPI();
    }
    , []
  );

  const onClickSubmit = async (e) => {
    e.preventDefault();
    const res = await sendPost(title);
    const post  = {
      id: res.id,
      title: res.title,
    };
    setPosts([...posts, post]);
  };

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="ui form">
        <div className="field">
          <label>Create a new post</label>
          <input
            type="text"
            name="first-name"
            onChange={onInputChange}
            placeholder="Enter your post"
          ></input>
        </div>
        <button className="ui button" onClick={onClickSubmit}>
          Submit
        </button>
      </form>
  )
}

export default CreatePost;