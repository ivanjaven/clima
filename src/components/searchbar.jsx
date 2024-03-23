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
    <div className="flex ml-4 translate-y-4">
      <input
        className="flex rounded-3xl border-solid border-2 border-primary-color h-9 w-80 indent-4 translate-x-7"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button onClick={handleSearch}>
        <AiOutlineSearch
          className=" border border-solid rounded-full h-9 pl-6 p-1.5 w-20 bg-primary-color"
          size={"1.8rem"}
        />
      </button>
    </div>
  );
}

export { SearchBar };
