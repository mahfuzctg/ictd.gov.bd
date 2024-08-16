import React from "react";
import { HiExternalLink } from "react-icons/hi"; // Import HiExternalLink
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: { text: string; link?: string }[]; // Optional link
}

const Card: React.FC<CardProps> = ({ icon, title, textItems }) => {
  return (
    <div className="bg-[#ffffff] p-6 rounded-lg max-w-sm flex flex-col h-[100%] border border-transparent transition-all duration-1000 ease-in-out hover:border-2 hover:border-green-600 hover:opacity-80">
      <div className="flex items-center pb-2">
        <img
          src={icon}
          alt="Icon"
          className="w-16 h-16 rounded-full shadow-md"
        />
        <h3 className="text-md font-semibold text-gray-600 ml-4 uppercase">
          {title}
        </h3>
      </div>

      <div className="relative flex flex-grow">
        <div className="pl-2 text-sm text-left flex flex-col flex-grow overflow-hidden">
          {textItems.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              className="mb-2 flex items-center text-gray-600"
            >
              <HiExternalLink className="text-green-600 mr-1 w-4 h-4" />{" "}
              {/* Fixed size icon */}
              <span className="block">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
