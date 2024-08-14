import React from "react";
import { MdSpellcheck } from "react-icons/md";

interface CardProps {
  icon: string;
  title: string;
  textItems: string[];
}

const Card: React.FC<CardProps> = ({ icon, title, textItems }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <ul className="list-none p-0 text-sm text-center">
        {textItems.map((text, index) => (
          <li key={index} className="flex items-center justify-center mb-2">
            <MdSpellcheck className="text-blue-500 mr-2" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
