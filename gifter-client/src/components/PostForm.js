import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

export const PostForm = () => {
  const [post, setPosts] = useState({
    title: "",
    caption: "",
    imageUrl: "",
  });

  const handleControlledInputChange = (event) => {
    const newPost = { ...post };
    let selectedVal = event.target.value;
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }

    newPost[event.target.id] = selectedVal;

    setPosts(newPost);
  };

  return (
    <form className="postForm">
      <h2 className="postForm__title">New post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">post title:</label>
          <input
            type="text"
            id="title"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="post title"
            value={post.title}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="caption">post caption:</label>
          <input
            type="text"
            id="caption"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="post caption"
            value={post.caption}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imageUrl">post imageUrl:</label>
          <input
            type="text"
            id="imageUrl"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="post imageUrl"
            value={post.imageUrl}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary">Save post</button>
    </form>
  );
};

export default PostForm;
