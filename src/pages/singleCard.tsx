import React from "react";
import { HiExternalLink } from "react-icons/hi";
import "../styles/Card.css";

interface CardProps {
  title: string;
  textItems: string[];
}

const SingleCard: React.FC<CardProps> = ({ title, textItems }) => {
  return (
    <div
      className={`bg-[#ffffff] p-4 rounded-lg transform transition-transform duration-300 ease-in-out flex flex-col md:flex-row`}
      style={{ width: "100%" }}
    >
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-end md:justify-start mb-4 md:mb-0">
        <img
          src="https://i.postimg.cc/3rbp1sFH/21dc206bc3eaac6fb73eacff95404872-414021416411-1-26786-28519.jpg"
          alt="Card Icon"
          className="mx-auto h-auto md:w-[350px] md:h-[350px] object-contain "
        />
      </div>

      {/* Content on the right */}
      <div className="w-full md:w-1/2 flex flex-col justify-between pl-0 md:pl-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-center py-4 text-gray-600 uppercase">
          {title}
        </h3>

        {/* Container for the list */}
        <div className="relative flex flex-col flex-grow">
          {/* List items */}
          <div className="">
            {textItems.map((text, index) => (
              <div key={index} className="mb-2 text-justify flex items-start">
                <HiExternalLink className="text-green-700 mr-1 w-5 h-4" />
                <a
                  href={`#link-${index}`}
                  className="block text-lg  hover:text-green-700 transition-colors duration-300 ease-in-out"
                >
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
