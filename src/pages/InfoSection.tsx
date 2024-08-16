import { MdSpellcheck } from "react-icons/md"; // Read icon from react-icons

const InfoSection = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:gap-4 p-4">
      {/* First Column */}
      <div className="lg:w-[40%]">
        <div className="p-4 shadow-lg rounded-lg h-full">
          <h6 className="text-sm py-2 text-center font-bold">
            ICT Division ranked first in the 2020-2021 APA final evaluation.
          </h6>
          <img
            src="https://i.postimg.cc/VvgLt62y/ICT-Division-Result.png"
            alt="First Card Image"
            className="w-full h-[95%] py-4 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="lg:w-[60%] flex flex-col space-y-6 lg:space-y-0 lg:gap-4">
        {/* First Card in Second Column */}
        <div className="bg-white p-4 shadow-lg rounded-lg h-[50%]">
          <div className="space-x-2 my-4 flex w-full justify-center">
            {/* Four Images in Top */}
            <img
              src="https://i.postimg.cc/bJ3wDrK7/download.jpg"
              alt="Image 1"
              className="w-[30%] h-[50px] object-cover"
            />
            <img
              src="https://i.postimg.cc/GpRM9mPJ/images.jpg"
              alt="Image 2"
              className="w-[30%] h-[50px] object-cover"
            />
            <img
              src="https://i.postimg.cc/65YRC5Nf/6663f661db41e356340984.jpg"
              alt="Image 3"
              className="w-[30%] h-[50px] object-cover"
            />
          </div>

          {/* Six List Texts with Read Icon */}
          <ul className="list-disc pl-5 space-y-2">
            <h6 className="text-center font-bold">Internal E-Services</h6>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              Web Mail
            </li>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              Scholarships & ICT Grants
            </li>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              National Enterprise Architecture
            </li>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              CIRT
            </li>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              Online Recruitment System
            </li>
            <li className="flex items-center">
              <MdSpellcheck className="mr-2 text-gray-600" />
              One Stop Service (Bangladesh Hi-Tech Park)
            </li>
          </ul>
        </div>

        {/* Second and Third Cards */}
        <div className="flex h-[50%] space-x-4">
          {/* Second Card */}
          <div className="w-1/2 bg-white p-4 shadow-lg rounded-lg flex flex-col justify-between">
            <h6 className="font-bold">Important Links</h6>
            {/* Six List Texts */}
            <ul className="list-disc pl-5 space-y-2">
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 1
              </li>
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 2
              </li>
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 3
              </li>
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 4
              </li>
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 5
              </li>
              <li className="flex items-center">
                <MdSpellcheck className="mr-2 text-gray-600" />
                List Item 6
              </li>
            </ul>
          </div>

          {/* Third Card */}
          <div className="w-1/2 bg-white p-4 shadow-lg rounded-lg">
            <h6 className="font-bold">
              Website Visitors [Effective from 06.11.2019]
            </h6>
            <img
              src="https://i.postimg.cc/q79Z0xbq/journal-pone-0245491-g002.png"
              alt="Visitors Image"
              className="w-full h-[300px] object-cover mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
