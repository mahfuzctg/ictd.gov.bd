import React, { useState } from "react";

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
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-white duration-700 ease-in-out">
      {/* Icon and title on the same line */}
      <div className="flex items-center mb-4">
        <img
          src={icon}
          alt="Icon"
          className="w-16 h-16 mr-4 rounded-full shadow-md"
        />
        <h3 className="text-xl font-semibold text-orange-500">{title}</h3>{" "}
        {/* Title color changed to orange */}
      </div>

      {/* Container for the list and vertical line */}
      <div className="relative flex">
        {/* Vertical line */}
        <div className="absolute top-0 left-0 h-full w-[3px] bg-orange-500" />

        {/* List items */}
        <div className="pl-8 text-sm text-left flex flex-col">
          {textItems
            .slice(0, showMore ? textItems.length : 3)
            .map((text, index) => (
              <div key={index} className="mb-2 flex items-center">
                <span className="text-justify">{text}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Read More button */}
      <div className="flex justify-start">
        <button
          className="mt-4 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-pink-50 shadow-lg transition-colors duration-300"
          onClick={handleReadMore}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
