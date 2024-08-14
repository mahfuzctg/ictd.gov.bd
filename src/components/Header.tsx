import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(true); // Menu visibility state
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const location = useLocation();
  const navigate = useNavigate(); // Used for programmatic navigation

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Affiliated Offices/Institutions", path: "/affiliated" },
    { name: "Projects/Programme", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Acts/Policy", path: "/acts" },
    { name: "E-Service", path: "/service" },
  ];

  // Toggle function to show/hide the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Handle navigation and menu visibility
  const handleNavigation = (path: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior
    navigate(path);
    setMenuVisible(false); // Close menu when item is clicked
    window.scrollTo(0, 0); // Ensure the scroll position is reset
  };

  useEffect(() => {
    // Ensure that the scroll position is reset when navigating to a new route
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={`bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center md:justify-between relative ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="flex justify-between w-full md:w-auto items-center">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300"
        >
          ICTD
        </Link>

        {/* Show the Bars3Icon when menu is hidden, XIcon when menu is visible */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuVisible ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          menuVisible ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 bg-gray-800 text-white w-1/2 h-full md:static md:flex md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:w-auto md:mt-0 transition-transform duration-300 ease-in-out`}
      >
        {navItems.map((item) => (
          <li key={item.path} className="w-full md:w-auto">
            <button
              className={`block px-4 py-2 rounded transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-orange-500 text-gray-800"
                  : "hover:bg-gray-700"
              }`}
              onClick={(event) => handleNavigation(item.path, event)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <button
        className="text-white focus:outline-none ml-auto md:ml-0"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
