/* eslint-disable */

import axios from 'axios';

const url = 'http://localhost:5000/posts';

const fetchPosts = () => axios.get(url);

export const api = axios.create({
  baseURL: 'https://api.github.com/'
})
