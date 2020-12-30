import axios from "axios";

export const getPosts = async () => {
  const { data: response } = await axios.get("http://localhost:3001/posts");
  return response;
};

export const sendPost = async (post) => {
  const { data: response } = await axios.post("http://localhost:3001/posts", {
    title: post,
  });
  return response;
};
