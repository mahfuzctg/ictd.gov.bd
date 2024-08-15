import React from "react";
import "../styles/Card.css";
import SingleCard from "./singleCard";

const SingleCardSection: React.FC = () => {
  // Sample data for a single card
  const cardData = {
    icon: "https://i.postimg.cc/26V0gh9S/ict-icon-5.png",
    title: "Notice Board",
    textItems: [
      "প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী প্রোগ্রামার, তথ্য ও যোগায...",
      "অফিস আদেশ (দায়িত্ব বণ্টন)",
      "২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি",
      "e-Tender For “Procurement of Food and Refreshment for Aspire to Innovate (a2i) Progr...",
      "অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক))",
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
      <div className="w-[80%] rounded-full  bg-white opacity-80 text-orange-600  absolute bottom-0">
        <div className="overflow-hidden whitespace-nowrap">
          <p className="animate-scroll text-sm  md:text-lg px-4">
            {scrollingText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCardSection;
