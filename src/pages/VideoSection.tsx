import React from "react";
import "../styles/video.css";

const VideoSection: React.FC = () => {
  return (
    <section className="p-5">
      {/* Container for Title and Audio Section */}
      <div className="flex items-center justify-between my-4">
        {/* Audio Section */}

        <div className="text-center mx-auto">
          <h1 className=" text-center font-bold text-gray-700 text-xl md:text-2xl flex-1">
            Exclusive Videos And National Anthem
          </h1>

          <h2 className="text-lg  font-bold text-gray-800 mb-4"></h2>
          <audio controls className="mx-auto">
            <source
              src="https://ictd.gov.bd/sites/default/files/files/ictd.portal.gov.bd/npfblock//bd_national_anthem.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      {/* Video Grid */}
      <div className="scroll-container">
        <div className="scrolling-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>

          {/* Video 2 */}
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/fXuQNttSyJ4?autoplay=1&mute=1&loop=1&playlist=fXuQNttSyJ4"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video 2"
            />
          </div>

          {/* Video 3 */}
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/LbOxr7Z3BrI?autoplay=1&mute=1&loop=1&playlist=LbOxr7Z3BrI"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video 3"
            />
          </div>

          {/* Video 4 */}
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/msZPEriDAdQ?autoplay=1&mute=1&loop=1&playlist=msZPEriDAdQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
