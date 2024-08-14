import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // Default menu is open

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Affiliated Offices/Institutions", path: "/affiliated" },
    { name: "Projects/Programme", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Acts/Policy", path: "/acts" },
    { name: "E-Service", path: "/service" },
    { name: "Others", path: "/others" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center md:justify-between relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300"
        >
          ICTD
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <ul
        className={`fixed inset-0 bg-gray-800 md:bg-transparent flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 md:relative md:flex md:items-center md:w-auto md:top-auto top-16 left-0 md:overflow-visible overflow-hidden`}
      >
        {navItems.map((item) => (
          <li key={item.path} className="w-full md:w-auto">
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-orange-500 text-gray-800"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setIsOpen(false)} // Close menu when item is clicked
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Show Menu Button */}
      {!isOpen && (
        <button
          className="md:hidden text-white absolute top-4 right-4"
          onClick={() => setIsOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
