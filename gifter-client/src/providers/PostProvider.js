import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const { getToken } = useContext(UserProfileContext);
  const [posts, setPosts] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const getAllPosts = () =>
    getToken().then((token) =>
      fetch("/api/post", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setPosts)
    );

  const addPost = (post) => {
    getToken().then((token) =>
      fetch("/api/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      })
    );

    const searchPosts = (searchTerms) => {
      return fetch(`/api/post/search?q=${searchTerms}`)
        .then((res) => res.json())
        .then(setPosts);
    };

    const getPostsWithComments = () =>
      getToken().then((token) =>
        fetch("/api/post/GetWithComments", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((resp) => resp.json())
          .then(setPosts)
      );

    const getPost = (id) =>
      getToken().then((token) =>
        fetch("/api/post/GetPostByIdWithComments${id}", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((resp) => resp.json())
      );

    return (
      <PostContext.Provider
        value={{
          posts,
          getAllPosts,
          getPost,
          addPost,
          searchPosts,
          searchTerms,
          setSearchTerms,
          getPostsWithComments,
        }}
      >
        {props.children}
      </PostContext.Provider>
    );
  };
};
