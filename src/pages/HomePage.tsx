import CardGrid from "./CardGrid";
import ContactUsAndMap from "./ContactUsAndMap";
import SingleCardSection from "./singleCardSection";

const HomePage = () => {
  return (
    <>
      <div
        className="relative w-full sm:w-auto  h-[50vh] bg-gray-900 text-white flex items-center justify-center bg-cover bg-no-repeat bg-center p-4 sm:p-8 md:p-12"
        style={{
          backgroundImage: `url('https://i.postimg.cc/Z5djbNGD/ictd-banner.png')`,
        }}
      >
        {/* Banner Content */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-shadow-md text-gray-800">
            <span className="text-orange-600"> ICT</span> Division <br />
          </h1>
          <span className="text-gray-800">
            {" "}
            Government of the People's Republic of Bangladesh
          </span>
        </div>
        {/* Scrolling Text */}
        <div className="absolute bottom-0 w-full opacity-80 bg-gray-800 text-white py-2">
          <div className="overflow-hidden whitespace-nowrap">
            <p className="animate-scroll text-sm sm:text-base md:text-lg">
              This is your scrolling text with smooth transitions. Make sure
              it’s visible and engaging!
            </p>
          </div>
        </div>
      </div>
      <SingleCardSection></SingleCardSection>
      <CardGrid></CardGrid>
      <ContactUsAndMap></ContactUsAndMap>
    </>
  );
};

export default HomePage;
