import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="p-5">
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video 1 */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/GT9ShGE_qjg?autoplay=1&mute=1&loop=1&playlist=GT9ShGE_qjg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Your Video Title 1
            </h2>
          </div>
        </div>

        {/* Video 2 */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/GT9ShGE_qjg?autoplay=1&mute=1&loop=1&playlist=GT9ShGE_qjg"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Your Video Title 2
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
