import React from "react";
import "../styles/video.css";

const HotlineSection: React.FC = () => {
  // Example image URLs - Replace these with your actual image URLs
  const imageUrls = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <section className="p-5">
      {/* {/_ Emergency Hotline Title _/} */}
      <h1 className="text-center font-bold text-orange-600 py-8 text-xl md:text-2xl">
        Emergency Hotline Numbers
      </h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={url}
              alt={`Emergency Hotline ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotlineSection;
