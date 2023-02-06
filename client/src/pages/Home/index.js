import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api/index";
import { Form } from "../../components/Form";
import { PersonInfo } from "./PersonInfo";
import { PostCard } from "./PostCard";
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from "./styles";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  _id: string;
}

export function Home() {
  const [posts, setPosts] = useState([]);
  const [postsCounter, setPostsCounter] = useState(0);

  async function fetch() {
    const response = await fetchPosts();
    console.log(response.data);
    setPosts(response.data);
    setPostsCounter(response.data.total_count);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <HomeContent>
        <SearchSection>
          <div>
            <span>Posts</span>
            <small>{postsCounter} posts</small>
          </div>
          <input
            type="text"
            onBlur={() => fetch()}
            placeholder="Search a Post"
          />
        </SearchSection>
        <ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.number}`}
                post={post}
              ></PostCard>
            ))}
        </ListSection>
        <Form />
      </HomeContent>
    </HomeContainer>
  );
}
