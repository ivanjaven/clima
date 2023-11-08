import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search_container">
      <input
        className="input_field"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button className="search_button" onClick={handleSearch}>
        <AiOutlineSearch className="search_button-icon" size={"1.8rem"} />
      </button>
    </div>
  );
}

export { SearchBar };
