import CardGrid from "./CardGrid";
import ContactUsAndMap from "./ContactUsAndMap";
import InfoSection from "./InfoSection";
import SingleCardSection from "./singleCardSection";
import VideoSection from "./VideoSection";

const HomePage = () => {
  return (
    <>
      <div
        className="relative w-full sm:w-auto  h-[60vh] bg-[#ffffff] flex items-center justify-center bg-cover bg-no-repeat bg-center p-4 sm:p-8 md:p-12"
        style={{
          backgroundImage: `url('https://i.postimg.cc/Zq5VL77B/bd-skill-logo.png')`,
        }}
      >
        {/* Banner Content */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          {/* <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-shadow-md text-gray-800">
            <span className="text-orange-600"> ICT</span> Division <br />
          </h1> */}
          {/* <span className="text-gray-800">
            Government of the People's Republic of Bangladesh
          </span> */}
        </div>
        {/* Scrolling Text */}
        <div className="absolute bottom-0 w-full   text-gray-700 py-2">
          <div className="overflow-hidden whitespace-nowrap">
            <p className="animate-scroll text-sm sm:text-base md:text-lg">
              Empowering Digital Bangladesh through Innovation and Technology...
              Transforming Governance with Cutting-Edge ICT Solutions... ICTD
              Initiatives for a Smart, Sustainable Future... Collaborating with
              Global Partners to Drive Digital Transformation...
            </p>
          </div>
        </div>
      </div>
      <SingleCardSection></SingleCardSection>
      <>
        <CardGrid></CardGrid>
      </>
      <InfoSection></InfoSection>
      <VideoSection></VideoSection>

      <ContactUsAndMap></ContactUsAndMap>
    </>
  );
};

export default HomePage;
