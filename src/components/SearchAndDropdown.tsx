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
    <div className="bg-[#ffffff] p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Main Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center flex-grow mb-4 md:mb-0 md:mr-2 w-full md:w-1/4"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-2 py-1 bg-[#ffffff] border border-orange-500 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500 flex-grow"
          />
          <button
            type="submit"
            className="px-5 mx-1 py-1 text-sm bg-[#ffffff] border border-orange-500  text-orange-500 rounded-r-md hover:bg-orange-600 hover:text-[#ffffff]"
          >
            Search
          </button>
        </form>

        {/* Title - Centered */}
        <div className="w-full text-center mb-4 md:mb-0">
          <span className="text-xl font-semibold text-gray-600">
            <span className="text-orange-600"> BANGLADESH</span> NATIONAL PORTAL
          </span>
        </div>

        {/* Dropdown for Extra Search */}
        <div className="relative w-full md:w-1/4 mb-4 md:mb-0">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="px-4 py-1 border border-orange-500 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 w-[100%]"
          >
            <option value="Option 1">E-Governance</option>
            <option value="Option 2">Innovation</option>
            <option value="Option 3">Training</option>
            <option value="Option 4">Infrastructure</option>
            <option value="Option 5">Partnerships</option>
            <option value="Option 6">Cybersecurity</option>
            <option value="Option 7">Sustainability</option>
            <option value="Option 8">Green Technology</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndDropdown;
