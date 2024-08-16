import React from "react";
import Card from "./Card";

// Existing card data (left section)
const cardData = [
  {
    icon: "https://i.postimg.cc/3N0dDp2k/aboutus2.png",
    title: "About Us",
    textItems: [
      { text: "Vision & Mission", link: "https://example.com/vision" },
      { text: "Organogram", link: "https://example.com/organogram" },
      { text: "Officers/Staff", link: "https://example.com/officers" },
      {
        text: "Work Distribution",
        link: "https://example.com/work-distribution",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/BvhTTTPp/0.png",
    title: "Notices/Orders/Circulars",
    textItems: [
      {
        text: "Notification/Circular",
        link: "https://example.com/notification",
      },
      {
        text: "Office orders/ Government Orders (GO)/ No Objection Certificate (NOC)",
        link: "https://example.com/go",
      },
      { text: "News Notifications", link: "https://example.com/news" },
      { text: "Tender/Recruitment Notice", link: "https://example.com/tender" },
    ],
  },
  {
    icon: "https://i.postimg.cc/50YC8ZV9/POLICY-PUBLICATION-New-1.png",
    title: "Policies & Publications",
    textItems: [
      { text: "Policy", link: "https://example.com/policy" },
      {
        text: "Laws & Regulations/Guidelines & Strategies",
        link: "https://example.com/laws",
      },
      {
        text: "Procurement requirements",
        link: "https://example.com/procurement",
      },
      { text: "Others Report", link: "https://example.com/report" },
    ],
  },
  {
    icon: "https://i.postimg.cc/FsQLJWnm/5-0.png",
    title: "Citizen E-Services",
    textItems: [
      {
        text: "Office order regarding the release of Mr. Mirza Murad Hasan Beg, Deputy Director.",
        link: "https://example.com/release",
      },
      { text: "Release notice", link: "https://example.com/release-notice" },
      {
        text: "Staff release details",
        link: "https://example.com/staff-release",
      },
      { text: "Office orders", link: "https://example.com/office-orders" },
      {
        text: "Directorate changes",
        link: "https://example.com/directorate-changes",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/dtm47T6H/Citizen-Charter.png",
    title: "Service Delivery Commitment (Citizens' Charter)",
    textItems: [
      {
        text: "Notification from the Ministry of Science and Technology.",
        link: "https://example.com/science-tech",
      },
      {
        text: "Science and technology updates",
        link: "https://example.com/science-updates",
      },
      {
        text: "Government notifications",
        link: "https://example.com/gov-notifications",
      },
      { text: "Research announcements", link: "https://example.com/research" },
      {
        text: "Technological developments",
        link: "https://example.com/tech-developments",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/QMVbnY3w/apa.png",
    title: "Annual Performance Agreement",
    textItems: [
      {
        text: "Job regularization and salary increase information.",
        link: "https://example.com/job-regularization",
      },
      {
        text: "Employment regularization",
        link: "https://example.com/employment-regularization",
      },
      { text: "Salary updates", link: "https://example.com/salary-updates" },
      { text: "Job stability", link: "https://example.com/job-stability" },
      {
        text: "Staff compensation",
        link: "https://example.com/staff-compensation",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/HxytTJjt/nis-logo3.png",
    title: "National Integrity Strategy",
    textItems: [
      {
        text: "Office order for staff duties and responsibilities.",
        link: "https://example.com/staff-duties",
      },
      {
        text: "Staff responsibilities",
        link: "https://example.com/staff-responsibilities",
      },
      { text: "Office tasks", link: "https://example.com/office-tasks" },
      {
        text: "Duty assignments",
        link: "https://example.com/duty-assignments",
      },
      {
        text: "Work obligations",
        link: "https://example.com/work-obligations",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/bY1RM27y/complain-1-1.png",
    title: "Complaint Redress Mechanism",
    textItems: [
      {
        text: "Budget details for the fiscal year 2024-2025.",
        link: "https://example.com/budget",
      },
      { text: "Fiscal planning", link: "https://example.com/fiscal-planning" },
      {
        text: "Economic forecast",
        link: "https://example.com/economic-forecast",
      },
      {
        text: "Budget allocations",
        link: "https://example.com/budget-allocations",
      },
      {
        text: "Financial strategies",
        link: "https://example.com/financial-strategies",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/CLY4Vx0j/infocom.png",
    title: "Right to Information",
    textItems: [
      {
        text: "Decisions from the executive committee meeting.",
        link: "https://example.com/executive-decisions",
      },
      {
        text: "Meeting outcomes",
        link: "https://example.com/meeting-outcomes",
      },
      {
        text: "Committee decisions",
        link: "https://example.com/committee-decisions",
      },
      {
        text: "Executive resolutions",
        link: "https://example.com/executive-resolutions",
      },
      {
        text: "Strategic choices",
        link: "https://example.com/strategic-choices",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/k4KWkkh1/INNOVATION-1.png",
    title: "Innovative Activities",
    textItems: [
      {
        text: "Office order regarding new programs and initiatives.",
        link: "https://example.com/new-programs",
      },
      {
        text: "New programs",
        link: "https://example.com/new-programs-details",
      },
      {
        text: "Initiative details",
        link: "https://example.com/initiative-details",
      },
      { text: "Program updates", link: "https://example.com/program-updates" },
      {
        text: "Office directives",
        link: "https://example.com/office-directives",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/kMNxwPSD/SPS-3.png",
    title: "Service Simplification",
    textItems: [
      {
        text: "Economic planning and development strategies.",
        link: "https://example.com/economic-planning",
      },
      {
        text: "Development strategies",
        link: "https://example.com/development-strategies",
      },
      { text: "Economic goals", link: "https://example.com/economic-goals" },
      {
        text: "Planning documents",
        link: "https://example.com/planning-documents",
      },
      { text: "Fiscal policies", link: "https://example.com/fiscal-policies" },
    ],
  },
  {
    icon: "https://i.postimg.cc/NfgRzC8D/Final-Logo-SDG.png",
    title: "SDGs & Development Action Plan",
    textItems: [
      {
        text: "Office order for employee development and training.",
        link: "https://example.com/employee-development",
      },
      {
        text: "Training programs",
        link: "https://example.com/training-programs",
      },
      { text: "Employee skills", link: "https://example.com/employee-skills" },
      {
        text: "Development initiatives",
        link: "https://example.com/development-initiatives",
      },
      { text: "Career growth", link: "https://example.com/career-growth" },
    ],
  },
  {
    icon: "https://i.postimg.cc/NjFmgyzr/budget2-1.png",
    title: "Budget & Projects",
    textItems: [
      {
        text: "Budget details for the fiscal year 2024-2025.",
        link: "https://example.com/budget",
      },
      { text: "Fiscal planning", link: "https://example.com/fiscal-planning" },
      {
        text: "Economic forecast",
        link: "https://example.com/economic-forecast",
      },
      {
        text: "Budget allocations",
        link: "https://example.com/budget-allocations",
      },
      {
        text: "Financial strategies",
        link: "https://example.com/financial-strategies",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/9fq976Vm/Capture-1.jpg",
    title: "National ICT Policy 2018",
    textItems: [
      {
        text: "Office order for new programs and initiatives.",
        link: "https://example.com/new-programs",
      },
      {
        text: "New programs",
        link: "https://example.com/new-programs-details",
      },
      {
        text: "Initiative details",
        link: "https://example.com/initiative-details",
      },
      { text: "Program updates", link: "https://example.com/program-updates" },
      {
        text: "Office directives",
        link: "https://example.com/office-directives",
      },
    ],
  },
  {
    icon: "https://i.postimg.cc/wM9Rn3NM/1-0.png",
    title: "Miscellaneous",
    textItems: [
      {
        text: "Office order regarding employee development and training.",
        link: "https://example.com/employee-development",
      },
      {
        text: "Training programs",
        link: "https://example.com/training-programs",
      },
      { text: "Employee skills", link: "https://example.com/employee-skills" },
      {
        text: "Development initiatives",
        link: "https://example.com/development-initiatives",
      },
      { text: "Career growth", link: "https://example.com/career-growth" },
    ],
  },
];

// Data for the new right section (2 cards)
const rightSectionData = [
  {
    icon: "https://i.postimg.cc/k42hF11M/Honorable-Adviser-1.jpg",
    title: "Md. Nahid Islam",
    text: "Honorable Adviser",
  },
  {
    icon: "https://i.postimg.cc/vZGqSHqN/Honorable-Secretary-Sir.jpg",
    title: "Md. Shamsul Arefin",
    text: "Secretary",
  },
];

// Hotline section data
const hotlineData = [
  { icon: "https://i.postimg.cc/Qx1R74Ck/333.png" },
  { icon: "https://i.postimg.cc/3xZVSkgk/999.png" },
  { icon: "https://i.postimg.cc/3J5q3X1y/download.png" },
  { icon: "https://i.postimg.cc/3J5q3X1y/download.png" },
  { icon: "https://i.postimg.cc/sg30h3ts/download.png" },
  { icon: "https://i.postimg.cc/8C0y9Msz/download.png" },
  { icon: "https://i.postimg.cc/fy48Tsc4/download.png" },
  { icon: "https://i.postimg.cc/mZMdpc4T/download.png" },
  { icon: "https://i.postimg.cc/ncG3Z6M5/download.png" },
  { icon: "https://i.postimg.cc/QdN0M0TM/download.png" },
  { icon: "https://i.postimg.cc/mgdV1CYy/download.png" },
  { icon: "https://i.postimg.cc/YShR608K/download.png" },
  { icon: "https://i.postimg.cc/zf6j0NPL/download.png" },
  { icon: "https://i.postimg.cc/1XcrmqR6/download.png" },
  { icon: "https://i.postimg.cc/tCkN8WMG/download.png" },
  { icon: "https://i.postimg.cc/YCSz705G/download.png" },
  { icon: "https://i.postimg.cc/52kq21JP/download.png" },
  // More hotline data...
];

const CardGrid: React.FC = () => {
  return (
    <div className="mx-auto  flex flex-col lg:flex-row">
      {/* Left section - Card grid (70% width) */}
      <div className="w-full lg:w-[80%] h-[100%] mx-auto  grid grid-cols-1 md:grid-cols-3 text-sm gap-2">
        {cardData.map((data, index) => (
          <Card
            key={index}
            icon={data.icon}
            title={data.title}
            textItems={data.textItems}
          />
        ))}
      </div>

      {/* Right section and Hotline Section - 30% width */}
      <div className="w-full p-4 mx-auto lg:w-[20%]  flex flex-col space-y-4">
        {/* Right Section */}
        <div className="w-full h-96 overflow-hidden relative">
          <div className="w-full h-full flex flex-col animate-scrollBottomToTop">
            {rightSectionData.map((data, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md mb-4 flex-none"
              >
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-[50%] h-[50%] mx-auto mb-4 bg-green-500 p-1 rounded-full"
                />
                <h3 className="text-lg text-center font-semibold mb-2">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">{data.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hotline Section */}
        <div className="w-full h-[95%] overflow-hidden bg-[#faf5f9] p-2 rounded-lg">
          <h2 className="text-center font-bold text-gray-700 py-10 uppercase ">
            Emergency Hotline
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            {hotlineData.map((data, index) => (
              <div key={index} className="  rounded-lg  ">
                <img
                  src={data.icon}
                  alt={`Hotline ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
