import React from "react";
import Card from "./Card";

const cardData = [
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "About Us",
    textItems: [
      "Vision & Mission",
      "Organogram",
      "Officers/Staff",
      "Work Distribution",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "Notice/Order/Circular",
    textItems: [
      "Notification/Circular",
      "Office orders/ Government Orders (GO)/ No Objection Certificate (NOC)",
      "News Notifications",
      "Tender/Recruitment Notice",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "Policies & Publications",
    textItems: [
      "Policy.",
      "Laws & Regulations/Guidelines & Strategies",
      "Procurement requirements",
      "Others Report",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "অফিস আদেশ (অবমুক্তি)",
    textItems: [
      "Office order regarding the release of Mr. Mirza Murad Hasan Beg, Deputy Director.",
      "Release notice",
      "Staff release details",
      "Office orders",
      "Directorate changes",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "বিজ্ঞান ও প্রযুক্তি বিভাগের প্রজ্ঞাপন",
    textItems: [
      "Notification from the Ministry of Science and Technology.",
      "Science and technology updates",
      "Government notifications",
      "Research announcements",
      "Technological developments",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "চাকরি স্থায়ীকরণ ও বেতন বৃদ্ধি",
    textItems: [
      "Job regularization and salary increase information.",
      "Employment regularization",
      "Salary updates",
      "Job stability",
      "Staff compensation",
    ],
  },
  {
    icon: "https://i.postimg.cc/wMHjZGtH/bangladesh-independence-day-soldier-illustration-vector.jpg",
    title: "অফিস আদেশ (স্টাফ কর্তব্য)",
    textItems: [
      "Office order for staff duties and responsibilities.",
      "Staff responsibilities",
      "Office tasks",
      "Duty assignments",
      "Work obligations",
    ],
  },
  {
    icon: "https://via.placeholder.com/64",
    title: "২০২৪-২০২৫ অর্থবছরের বাজেট",
    textItems: [
      "Budget details for the fiscal year 2024-2025.",
      "Fiscal planning",
      "Economic forecast",
      "Budget allocations",
      "Financial strategies",
    ],
  },
  {
    icon: "https://via.placeholder.com/64",
    title: "নির্বাহী কমিটির সভার সিদ্ধান্ত",
    textItems: [
      "Decisions from the executive committee meeting.",
      "Meeting outcomes",
      "Committee decisions",
      "Executive resolutions",
      "Strategic choices",
    ],
  },
  {
    icon: "https://via.placeholder.com/64",
    title: "অফিস আদেশ (নতুন কর্মসূচি)",
    textItems: [
      "Office order regarding new programs and initiatives.",
      "New programs",
      "Initiative details",
      "Program updates",
      "Office directives",
    ],
  },
  {
    icon: "https://via.placeholder.com/64",
    title: "অর্থনৈতিক পরিকল্পনা",
    textItems: [
      "Economic planning and strategy details.",
      "Economic strategy",
      "Planning details",
      "Financial projections",
      "Strategic planning",
    ],
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="container p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {cardData.map((data, index) => (
          <div key={index} className={`${index === 0 ? "" : ""}`}>
            <Card
              icon={data.icon}
              title={data.title}
              textItems={data.textItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
