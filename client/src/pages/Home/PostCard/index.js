import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { IPost } from "..";
import { formatText } from "../../../utils/formatText";
import { PostCardContainer } from "./styles";

interface IPostCard {
  post: IPost;
}

export function PostCard({ post }: IPostCard) {
  const { createdAt, creator, language, message, source, tags, title, _id } = post;
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    locale: enUS,
    addSuffix: true,
  });
  return (
    <PostCardContainer to={`/${_id}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{formatText(message, 80)}</p>
      </main>
    </PostCardContainer>
  );
}
