import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import ContactUsAndMap from "./ContactUsAndMap";
import InfoSection from "./InfoSection";
import SingleCardSection from "./singleCardSection";
import VideoSection from "./VideoSection";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* New Section */}
      <section className="w-full mx-auto text-center p-4 md:p-12">
        <div className="flex flex-col md:flex-row md:space-x-4">
          {/* First Div: Title and Text */}
          <div className="w-full md:w-1/2 flex flex-col uppercase justify-center items-start p-4">
            <h1 className="text-xl font-bold mb-4 text-gray-600">
              <span className="text-green-700"> Welcome </span>to the{" "}
              <span className="text-green-700">ICT</span> Division of{" "}
              <span className="text-green-700">Bangladesh!</span>
            </h1>
            <p className="text-gray-700 text-sm">
              We are dedicated to advancing technology and digital
              transformation across the nation. Explore our initiatives and
              projects that aim to enhance governance and public services
              through innovation.
            </p>
          </div>

          {/* Second Div: Animated Images */}
          <div className="w-full md:w-1/2 h-[300px] flex justify-center items-center">
            <div className="relative w-full h-auto flex justify-center items-center">
              {/* Images with bouncing animation */}
              <img
                src="https://i.postimg.cc/FHpRKcRV/Ep-BQZf-CUYAEpmv7.jpg" // Replace with the URL of the podium winner image
                alt="Podium Winner"
                className={`absolute transition-opacity duration-1000 ${
                  currentImage === 0
                    ? "opacity-100 animate-bounce-smooth"
                    : "opacity-0"
                } w-[600px] h-[200px] object-cover bg-gray-600`}
              />
              <img
                src="https://i.postimg.cc/3RgzKjrK/bangladesh-map-flag-national-day-banner-design-flag-theme-art-web-background-vector-illustration-580.avif" // Replace with the URL of the digital trace image
                alt="Digital Trace"
                className={`absolute transition-opacity duration-1000 ${
                  currentImage === 1
                    ? "opacity-100 animate-bounce-smooth"
                    : "opacity-0"
                } w-[600px] h-[200px] object-cover bg-red-600`}
              />
              <img
                src="https://i.postimg.cc/ydbsZy40/1451660587.jpg" // Replace with the URL of the flag circle image
                alt="Flag Circle"
                className={`absolute transition-opacity duration-1000 ${
                  currentImage === 2
                    ? "opacity-100 animate-bounce-smooth"
                    : "opacity-0"
                } w-[600px] h-[200px] object-cover bg-green-800`}
              />
            </div>
          </div>
        </div>

        {/* Third Div: Scrolling Text */}
        <div className="w-full text-gray-700 py-2 mt-4 overflow-hidden relative">
          <div className="whitespace-nowrap absolute inset-0 flex items-center">
            <p className="animate-scroll text-sm sm:text-base md:text-lg">
              Empowering Digital Bangladesh through Innovation and Technology...
              Transforming Governance with Cutting-Edge ICT Solutions... ICTD
              Initiatives for a Smart, Sustainable Future... Collaborating with
              Global Partners to Drive Digital Transformation...
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-smooth {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-smooth {
          animation: bounce-smooth 2s infinite;
        }

        @keyframes scroll-text {
          0% {
            transform: translateX(10%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll-text 30s linear infinite;
        }
      `}</style>

      <SingleCardSection />
      <CardGrid />
      <InfoSection />
      <VideoSection />
      <ContactUsAndMap />
    </div>
  );
};

export default HomePage;
