import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  {
    title: "About us",
    links: [
      { href: "/", label: "History & Activities" },
      { href: "/", label: "Vision & Mission" },
      { href: "/", label: "Honorable Adviser" },
      { href: "/", label: "List of Ex-Ministers" },
      { href: "/", label: "Secretary" },
      { href: "/", label: "List of Ex-Secretaries" },
      { href: "/", label: "Organogram" },
      { href: "/", label: "Allocation of Business" },
      { href: "/", label: "Principal Function" },
      { href: "/", label: "Work Distribution" },
      { href: "/", label: "Member Nomination" },
    ],
  },
  {
    title: "Institutions",
    links: [{ href: "/", label: "List of Offices/Institutions" }],
  },
  {
    title: "Gallery",
    links: [
      { href: "/", label: "Photo Gallery" },
      { href: "/", label: "Video Gallery" },
    ],
  },
  {
    title: "Projects",
    links: [
      { href: "/", label: "Ongoing Projects" },
      { href: "/", label: "Completed Projects" },
    ],
  },
  {
    title: "Contact & Comment",
    links: [
      { href: "/", label: "Office Address" },
      { href: "/", label: "Your Comment" },
    ],
  },
  {
    title: "Policy",
    links: [
      { href: "/", label: "Acts" },
      { href: "/", label: "Policy" },
    ],
  },
  {
    title: "e-Services",
    links: [
      { href: "/", label: "Smart Dashboard" },
      { href: "/", label: "Freelancer ID" },
      { href: "/", label: "Online Recruitment" },
    ],
  },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isEnglish, setIsEnglish] = useState(true);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the submenu when the route changes
    setOpenMenuIndex(null);
  }, [location]);

  useEffect(() => {
    // Close the submenu when clicking outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="h-[30px] flex items-center justify-between bg-green-800 text-white px-5">
        <div className="flex items-center gap-x-3">
          <RiFacebookCircleLine className="text-[20px] hover:text-gray-300" />
          <TiSocialTwitterCircular className="text-[23px] hover:text-gray-300" />
          <FaYoutube className="text-[20px] hover:text-gray-300" />
          <FaInstagram className="text-[20px] hover:text-gray-300" />
          <FaLinkedinIn className="text-[20px] hover:text-gray-300" />
        </div>
        <div className="flex items-center gap-x-4">
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer"
          >
            {darkMode ? (
              <MdOutlineLightMode className="text-[20px] hover:text-gray-300" />
            ) : (
              <MdOutlineDarkMode className="text-[20px] hover:text-gray-300" />
            )}
          </div>
          <div
            onClick={() => setIsEnglish(!isEnglish)}
            className="cursor-pointer hover:text-gray-400"
          >
            {isEnglish ? "বাংলা" : "English"}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="w-full h-[70px] text-gray-700 flex items-center justify-between px-5 md:px-[70px]"
        ref={menuRef}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://i.postimg.cc/nrf8NcJs/ict-division-bangladesh-3.jpg"
            alt="ICTD Logo"
            className="h-[50px] w-[50px] mr-3 rounded-full"
          />
        </Link>

        {/* Menu for Large Screens */}
        <ul className="hidden lg:flex gap-x-6">
          {menuLinks.map((menu, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => handleMenuClick(index)}
                className="font-semibold hover:text-green-800"
              >
                {menu.title}
              </button>
              {openMenuIndex === index && (
                <div className="absolute top-full left-0 mt-2 w-[200px] bg-white shadow-lg rounded-md transition-all">
                  <ul>
                    {menu.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="block py-2 px-4 hover:bg-gray-200 text-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Menu Button for Small Screens */}
        <div className="lg:hidden block">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <AiOutlineCloseSquare className="text-2xl text-green-800" />
            ) : (
              <IoMenu className="text-2xl text-green-800" />
            )}
          </button>
        </div>
      </div>

      {/* Drawer for Small Screens */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <div className="w-[250px] bg-white h-full p-5 shadow-lg">
            <button
              className="text-gray-800 font-semibold text-lg mb-5"
              onClick={() => setMenuOpen(false)}
            >
              X
            </button>
            <ul className="space-y-4">
              {menuLinks.map((menu, index) => (
                <li key={index}>
                  <button
                    className="font-semibold"
                    onClick={() => handleMenuClick(index)}
                  >
                    {menu.title}
                  </button>
                  {openMenuIndex === index && (
                    <ul className="pl-4 space-y-2">
                      {menu.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.href}
                            className="block py-1 hover:text-green-800"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
