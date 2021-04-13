import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostForm />
        <SearchForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
