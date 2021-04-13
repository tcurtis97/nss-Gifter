import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";

export const SearchBar = () => {
  const { searchTerm, setSearchTerms } = useContext(PostContext);

  const handleChange = (event) => {
    setSearchTerms(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        id="searchbar"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBar;
