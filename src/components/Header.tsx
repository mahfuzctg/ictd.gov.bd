import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/banner/ictd-logo.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // Track which dropdown is open for mobile

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(""); // Close all dropdowns when the menu closes
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown); // Toggle specific dropdown
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-600 text-white p-2 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1">
          <img
            src={logo}
            alt="ICTD Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <span className="text-xl font-bold text-white">ICTD</span>
        </Link>

        {/* Desktop menu links */}
        <div className="hidden md:flex space-x-4">
          {/* Dropdown for About Us */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/about-us")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              About Us
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/about-us/team"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Our Team
              </Link>
              <Link
                to="/about-us/mission"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Our Mission
              </Link>
            </div>
          </div>

          {/* Dropdown for Affiliated Offices/Institutions */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/affiliated")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              Affiliated Offices/Institutions
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/affiliated/office1"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Office 1
              </Link>
              <Link
                to="/affiliated/office2"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Office 2
              </Link>
            </div>
          </div>

          {/* Dropdown for Projects/Programme */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/projects")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              Projects/Programme
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/projects/programme1"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Programme 1
              </Link>
              <Link
                to="/projects/programme2"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Programme 2
              </Link>
            </div>
          </div>

          {/* Dropdown for Gallery */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/gallery")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              Gallery
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/gallery/photos"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Photos
              </Link>
              <Link
                to="/gallery/videos"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Videos
              </Link>
            </div>
          </div>

          {/* Dropdown for Acts/Policy */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/acts-policy")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              Acts/Policy
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/acts-policy/law1"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Law 1
              </Link>
              <Link
                to="/acts-policy/law2"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Law 2
              </Link>
            </div>
          </div>

          {/* Dropdown for E-Services */}
          <div className="relative group">
            <button
              className={`px-3 py-2 rounded-xl text-sm font-medium ${
                isActive("/e-services")
                  ? "bg-white text-orange-600"
                  : "text-white hover:bg-orange-500"
              }`}
            >
              E-Services
            </button>
            <div className="absolute hidden group-hover:block bg-white text-orange-600 shadow-lg rounded-lg">
              <Link
                to="/e-services/service1"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Service 1
              </Link>
              <Link
                to="/e-services/service2"
                className="block px-4 py-2 text-sm hover:bg-orange-500 hover:text-white"
              >
                Service 2
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      <div
        className={`fixed top-0 left-0 h-full bg-orange-500 text-white bg-opacity-100 p-4 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "60%" }}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={closeMenu}
        >
          &times;
        </button>

        <div className="flex flex-col space-y-4 mt-12">
          {/* Mobile Dropdowns for each section */}
          {[
            {
              label: "About Us",
              links: ["/about-us/team", "/about-us/mission"],
            },
            {
              label: "Affiliated Offices/Institutions",
              links: ["/affiliated/office1", "/affiliated/office2"],
            },
            {
              label: "Projects/Programme",
              links: ["/projects/programme1", "/projects/programme2"],
            },
            { label: "Gallery", links: ["/gallery/photos", "/gallery/videos"] },
            {
              label: "Acts/Policy",
              links: ["/acts-policy/law1", "/acts-policy/law2"],
            },
            {
              label: "E-Services",
              links: ["/e-services/service1", "/e-services/service2"],
            },
          ].map((item, index) => (
            <div key={index}>
              <button
                className={`px-3 py-2 rounded-xl text-sm font-medium ${
                  openDropdown ===
                    item.label.toLowerCase().replace(/\s/g, "-") ||
                  isActive(item.links[0])
                    ? "bg-white text-orange-600"
                    : "text-white hover:bg-orange-500"
                }`}
                onClick={() =>
                  toggleDropdown(item.label.toLowerCase().replace(/\s/g, "-"))
                }
              >
                {item.label}
              </button>
              {openDropdown ===
                item.label.toLowerCase().replace(/\s/g, "-") && (
                <div className="ml-4">
                  {item.links.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link}
                      className="block px-4 py-2 text-sm text-white hover:bg-orange-600"
                      onClick={closeMenu}
                    >
                      {link.split("/").pop()?.replace("-", " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
