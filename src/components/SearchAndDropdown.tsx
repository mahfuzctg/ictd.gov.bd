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
    <div className="bg-[#ffffff] ">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Main Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full md:w-1/4"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-2 py-1 bg-[#ffffff] border border-green-700 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-600 flex-grow"
          />
          <button
            type="submit"
            className="px-5 mx-1 py-1 text-sm bg-[#ffffff] border border-green-700 text-green-600 rounded-r-md hover:bg-green-600 hover:text-[#ffffff]"
          >
            Search
          </button>
        </form>

        {/* Title - Centered on large devices, top on small devices */}
        <div className="text-center w-full pb-3 md:w-1/2 order-first md:order-none">
          <span className="text-md md:text-xl font-bold text-gray-600 ">
            <span className="text-green-700 ">BANGLADESH</span> NATIONAL PORTAL
          </span>
        </div>

        {/* Dropdown for Extra Search */}
        <div className="w-full md:w-1/4">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-4 py-1 border border-green-700 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
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
