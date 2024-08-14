import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAndDropdown: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("Option 1"); // Default value
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery(""); // Clear the search field
    }
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Main Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center flex-grow mb-4 md:mb-0 md:mr-2 w-full md:w-1/2"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
          >
            Search
          </button>
        </form>

        {/* Dropdown for Extra Search */}
        <div className="relative w-full md:w-1/2">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
            <option value="Option 6">Option 6</option>
            <option value="Option 7">Option 7</option>
            <option value="Option 8">Option 8</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndDropdown;
