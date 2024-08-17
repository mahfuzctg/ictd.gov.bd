import React from "react";
import "../styles/Card.css";
import SingleCard from "./singleCard";

const SingleCardSection: React.FC = () => {
  // Sample data for a single card
  const cardData = {
    icon: "https://i.postimg.cc/26V0gh9S/ict-icon-5.png",
    title: "Notice Board",
    textItems: [
      "Notice of Upcoming Staff Meeting - September 2024",
      "Announcement for New Software Development Guidelines",
      "Circular on the Revised Working Hours for the Fiscal Year 2024-2025",
      "Invitation to the Annual ICT Conference - Registration Open",
      "Memo on Updated Remote Work Policies and Procedures",
      "Notification Regarding the Launch of New IT Support Services",
    ],
  };

  const scrollingText = cardData.textItems.join(" | ");

  return (
    <section className="flex flex-col items-center text-gray-800 p-5 space-y-4 relative">
      <div className="w-full lg:w-[80%]">
        <SingleCard title={cardData.title} textItems={cardData.textItems} />
      </div>
      {/* Scrolling Text */}
      <div className="w-full lg:w-[80%] h-[40px] bg-white opacity-80 text-gray-800 absolute bottom-0 flex items-center">
        <div className="whitespace-nowrap overflow-hidden">
          <p className="animate-scroll text-gray-800 text-md md:text-xl px-4">
            {scrollingText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCardSection;
