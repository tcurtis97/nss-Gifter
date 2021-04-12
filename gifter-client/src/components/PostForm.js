import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

export const PostForm = () => {
  const { addPost } = useContext(PostContext);

  const [posts, setPosts] = useState({});
  title = "",
  caption = "",
  
};
