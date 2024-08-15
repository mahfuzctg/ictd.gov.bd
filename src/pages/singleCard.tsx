import React, { useState } from "react";
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: string[];
}

const SingleCard: React.FC<CardProps> = ({ icon, title, textItems }) => {
  const [showMore, setShowMore] = useState(false);

  // Toggle function for showing/hiding full text
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className={`bg-[#ffffff] p-4 rounded-lg transform transition-transform  duration-300 ease-in-out flex flex-col md:flex-row`}
      style={{ width: "100%" }}
    >
      {/* Icon on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-end md:justify-start mb-4 md:mb-0">
        <img
          src={icon}
          alt="Icon"
          className="w-[80%] h-auto md:w-[70%] md:h-[70%]  "
        />
      </div>

      {/* Content on the right */}
      <div className="w-full md:w-1/2 flex flex-col justify-between pl-0 md:pl-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-center py-4 text-orange-500 uppercase">
          {title}
        </h3>

        {/* Container for the list */}
        <div className="relative flex flex-col flex-grow">
          {/* Vertical line */}
          <div className="absolute top-0 left-0 h-full w-[4px] bg-orange-500" />

          {/* List items */}
          <div
            className={`pl-8 text-sm text-left flex flex-col flex-grow overflow-hidden transition-all duration-300 ease-in-out ${
              showMore ? "max-h-[1000px]" : "max-h-[150px]"
            }`}
            style={{ transition: "max-height 0.3s ease-in-out" }}
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
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-pink-50 shadow-md transition-colors duration-300 ease-in-out"
            onClick={handleReadMore}
          >
            <span className="text-sm font-roboto font-bold text-gray-500">
              {showMore ? "Show less" : "Read more"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
