import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchPosts } from "../../api/index";
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

export function PostDetail() {
  const [post, setPost] = useState({});

  async function fetch() {
    const response = await fetchPosts();
    const { title, comments, createdAt, creator, html_url, message } = response.data[0];
    console.log(response.data);
    const newPostObj = {
      title,
      comments,
      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: enUS,
        addSuffix: true,
      }),
      creator: creator,
      url: html_url,
      message: message,
    };
    setPost(newPostObj);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </NavButton>
          <a href={post.url} target="_blank" rel="noreferrer">
            See on Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {post.creator}
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {post.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            {post.comments} Comments
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.message}</ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  );
}
