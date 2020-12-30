import axios from 'axios';

export const addComment = async (postId, comment) => {
  const date = new Date();
  const res = await axios.post(`http://localhost:3002/posts/${postId}/comments`, {postId, content: comment, date: date.toLocaleString()});
  return res.data;
}

export const getComments = async () => {
  const res = await axios.get(`http://localhost:3002/comments`);
  return res.data;
}