import React from "react";
import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  textItems: { text: string; link?: string }[]; // Updated to include optional link
}

const Card: React.FC<CardProps> = ({ icon, title, textItems }) => {
  return (
    <div className="bg-[#ffffff] p-6 rounded-lg transform transition-transform hover:scale-105 hover:shadow-sm duration-1000 ease-in-out max-w-sm flex flex-col h-[400px]">
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

      <div className="relative flex flex-grow mb-4">
        <div className="absolute top-0 left-0 h-[80%] w-[4px] bg-orange-500" />
        <div className="pl-8 text-sm text-left flex flex-col flex-grow overflow-hidden">
          {textItems.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              className="mb-2 flex items-start text-gray-600 hover:text-orange-500 hover:underline transition-colors duration-300"
            >
              <span className="block text-justify">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
