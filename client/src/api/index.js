/* eslint-disable */

import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

export const api = axios.create({
  baseURL: 'https://api.github.com/'
});
