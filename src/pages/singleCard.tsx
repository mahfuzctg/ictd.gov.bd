import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { MdOutlineEditNotifications } from "react-icons/md";
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SingleCard: React.FC<CardProps> = ({ icon, title, textItems }) => {
  return (
    <div
      className={`bg-[#ffffff] p-4 rounded-lg transform transition-transform duration-300 ease-in-out flex flex-col md:flex-row`}
      style={{ width: "100%" }}
    >
      {/* Icon on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-end md:justify-start mb-4 md:mb-0">
        <MdOutlineEditNotifications className="w-[80%] h-auto md:w-[70%] md:h-[70%] text-gray-600" />
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
          <div className="pl-8 text-sm text-left flex flex-col flex-grow">
            {textItems.map((text, index) => (
              <div key={index} className="mb-2 flex items-start">
                <HiExternalLink className="text-green-600 mr-2" />
                <a
                  href={`#link-${index}`}
                  className="block text-justify hover:text-green-700 transition-colors duration-300 ease-in-out"
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
