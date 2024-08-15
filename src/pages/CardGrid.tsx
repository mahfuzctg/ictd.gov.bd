import React from "react";
import Card from "./Card";

// Existing card data (left section)
const cardData = [
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "Notice/Order/Circular",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "অফিস আদেশ (অবমুক্তি)",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "বিজ্ঞান ও প্রযুক্তি বিভাগের প্রজ্ঞাপন",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "চাকরি স্থায়ীকরণ ও বেতন বৃদ্ধি",
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
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "অফিস আদেশ (স্টাফ কর্তব্য)",
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
    icon: "https://via.placeholder.com/64",
    title: "২০২৪-২০২৫ অর্থবছরের বাজেট",
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
    icon: "https://via.placeholder.com/64",
    title: "নির্বাহী কমিটির সভার সিদ্ধান্ত",
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
    icon: "https://via.placeholder.com/64",
    title: "অফিস আদেশ (নতুন কর্মসূচি)",
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
    icon: "https://via.placeholder.com/64",
    title: "অর্থনৈতিক পরিকল্পনা",
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
    icon: "https://via.placeholder.com/64",
    title: "অফিস আদেশ (কর্মী উন্নয়ন)",
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
];

// Data for the new right section (3 cards)
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
  {
    icon: "https://via.placeholder.com/64",
    title: "Right Section Card 3",
    text: "This is the content of the third card in the right section.",
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="mx-auto p-8 flex flex-col lg:flex-row">
      {/* Left section - Card grid (70% width) */}
      <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            icon={data.icon}
            title={data.title}
            textItems={data.textItems}
          />
        ))}
      </div>

      {/* Right section - 30% width with animated scrolling */}
      <div className="w-full lg:w-[20%] h-96 overflow-hidden relative">
        <div className="w-full h-full flex flex-col animate-scrollBottomToTop">
          {rightSectionData.map((data, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 flex-none"
            >
              <img
                src={data.icon}
                alt={data.title}
                className="w-[50%] h-[50%] mx-auto  mb-4 bg-green-500 p-1 rounded-full"
              />
              <h3 className="text-lg text-center font-semibold mb-2">
                {data.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
