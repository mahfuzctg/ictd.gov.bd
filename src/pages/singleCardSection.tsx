import React from "react";
import "../styles/Card.css";
import SingleCard from "./singleCard";

const SingleCardSection: React.FC = () => {
  // Sample data for a single card
  const cardData = {
    icon: "https://i.postimg.cc/26V0gh9S/ict-icon-5.png",
    title: "Notice Board",
    textItems: [
      "Notification (Memo-68, Job Confirmation, Programmer and Assistant Programmer, Information & Communication...",
      "Office Order (Duty Allocation)",
      "Notification for the Fiscal Year 2024-2025",
      "e-Tender for Procurement of Food and Refreshment for Aspire to Innovate (a2i) Program...",
      "Office Order (Release of Mr. Mirza Murad Hasan Beg, Deputy Director)",
    ],
  };

  const scrollingText = cardData.textItems.join(" | ");

  return (
    <section className="flex flex-col items-center p-5 space-y-4 relative">
      <div className="w-full lg:w-[80%]">
        <SingleCard
          icon={cardData.icon}
          title={cardData.title}
          textItems={cardData.textItems}
        />
      </div>
      {/* Scrolling Text */}
      <div className="w-full lg:w-[80%] h-[40px] bg-white opacity-80 text-gray-700 absolute bottom-0 flex items-center">
        <div className="whitespace-nowrap overflow-hidden">
          <p className="animate-scroll text-sm md:text-lg px-4">
            {scrollingText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCardSection;
