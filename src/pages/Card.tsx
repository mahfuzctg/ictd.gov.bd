import React, { useState } from "react";
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: string[];
}

const Card: React.FC<CardProps> = ({ icon, title, textItems }) => {
  const [showMore, setShowMore] = useState(false);

  // Toggle function for showing/hiding full text
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`bg-[#ffffff] p-6 rounded-lg transform transition-transform hover:scale-105 hover:shadow-sm duration-1000 ease-in-out max-w-sm mx-auto flex flex-col ${
        showMore ? "h-auto" : "h-[400px]"
      }`}
    >
      {/* Icon and title on the same line */}
      <div className="flex items-center mb-4">
        <img
          src={icon}
          alt="Icon"
          className="w-16 h-16 rounded-full shadow-md"
        />
        <h3 className="text-md font-semibold text-orange-500 ml-4 uppercase">
          {title}
        </h3>
      </div>

      {/* Container for the list and vertical line */}
      <div className="relative flex flex-grow mb-4">
        {/* Vertical line */}
        <div className="absolute top-0 left-0 h-[80%] w-[4px] bg-orange-500" />

        {/* List items */}
        <div
          className={`pl-8 text-sm text-left flex flex-col flex-grow overflow-hidden transition-all duration-300 ${
            showMore ? "max-h-[1000px]" : "max-h-[200px]"
          }`}
        >
          {textItems
            .slice(0, showMore ? textItems.length : 3)
            .map((text, index) => (
              <div key={index} className="mb-2 flex items-start">
                <span className="block text-justify">{text}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Read More button */}
      <div className="flex justify-start mt-auto">
        <button
          className="px-4 py-2 mx-auto bg-white text-gray-800 rounded-md hover:bg-pink-50 shadow-md transition-colors duration-700"
          onClick={handleReadMore}
        >
          <span className="text-sm font-roboto font-bold text-gray-500">
            {showMore ? "Show less" : "Read more"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
