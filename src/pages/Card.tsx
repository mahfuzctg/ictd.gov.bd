import React from "react";
import { MdSpellcheck } from "react-icons/md";
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: { text: string; link?: string }[]; // Optional link
}

const Card: React.FC<CardProps> = ({ icon, title, textItems }) => {
  return (
    <div className="bg-[#ffffff]   p-6 rounded-lg transform transition-transform hover:scale-105 hover:shadow-sm duration-1000 ease-in-out max-w-sm flex flex-col h-[100%]">
      <div className="flex items-center pb-2">
        <img
          src={icon}
          alt="Icon"
          className="w-16 h-16 rounded-full shadow-md"
        />
        <h3 className="text-md font-semibold text-orange-500 ml-4 uppercase">
          {title}
        </h3>
      </div>

      <div className="relative flex flex-grow">
        <div className="pl-2 text-sm text-left flex flex-col flex-grow overflow-hidden">
          {textItems.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              className="mb-2 flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <MdSpellcheck className="text-green-700 mr-2" /> {/* Read icon */}
              <span className="block">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
