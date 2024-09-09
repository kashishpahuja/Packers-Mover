import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookSquare, FaPinterestP, FaInstagram } from "react-icons/fa";
import logo from "../images/bondorLogo.png";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (page) => {
    setActive(page);
    setIsMenuOpen(false); // Close the menu after a link is clicked
    setIsDropdownOpen(false); // Close the dropdown if it's open
  };

  return (
    <div className="sticky top-0 flex items-center justify-between px-4 lg:px-16 z-50 bg-white shadow-md h-auto">
      {/* Logo */}
      <div className="relative block mr-[30px] z-[1] before:absolute before:top-0 before:left-[-10000000px] before:right-full before:bottom-0 before:bg-[#ca1f26]">
        <a
          href="/"
          className="relative block py-2 pr-2 lg:py-[27px] lg:pr-[150px] bg-[#ca1f26]"
          style={{ clipPath: "polygon(0 0, 100% 0%, 76% 100%, 0% 100%)" }}
        >
          <img src={logo} alt="Logo" className="w-[70%] lg:w-full h-auto" />
        </a>
      </div>

      {/* Main Menu */}
      <div className="hidden lg:flex items-center">
        <ul className="flex space-x-16 text-xl font-semibold text-gray-800">
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Home"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "About"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("About")}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`relative cursor-pointer  hover:text-red-700 ${
              active === "Services"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onMouseEnter={() => setIsDropdownOpen(true)}
          >
            <div className="flex items-center uppercase">
              <Link to="/services" className="hover:border-b-2 hover:border-red-700">Services</Link>
              <FaAngleDown className="ml-2" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-8 w-80 bg-white shadow-lg px-4 py-2 " 
              onMouseLeave={() => setIsDropdownOpen(false)}>
                <li className="border-b py-2">
                  <Link
                    to="/packers-movers"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Packers & Movers")}
                  >
                    Packers & Movers
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/office-shifting"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Office Shifting")}
                  >
                    Office Shifting
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/home-shifting"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Home Shifting")}
                  >
                    Home Shifting
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/storage-facilities"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Storage Facilities")}
                  >
                    Storage Facilities
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/bike-car-shifting"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("Bike & Car Shifting")}
                  >
                    Bike & Car Shifting
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    to="/international-shifting"
                    className="block px-4 py-2 text-gray-800 hover:text-red-700"
                    onClick={() => handleClick("International Shifting")}
                  >
                    International Shifting
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Blog"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Blog")}
          >
            <Link to="/blog">Blog</Link>
          </li>
          <li
            className={`relative uppercase cursor-pointer hover:border-b-2 hover:border-red-700 hover:text-red-700 ${
              active === "Contact"
                ? "border-red-700 border-b-2 text-red-700 pb-[2px]"
                : ""
            }`}
            onClick={() => handleClick("Contact")}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <Link
          to="/contact"
          className="text-lg bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hidden lg:block"
        >
          GET A QUOTE
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button onClick={handleMenuToggle} className="text-2xl text-red-600">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 w-64 bg-black text-white lg:hidden z-20 h-full border-r border-gray-800">
          {/* Close button */}
          <div className="flex justify-between items-center">
            <div className="p-4">
              <Link to="/" aria-label="logo image">
                <img src={logo} width="150" alt="Logo" />
              </Link>
            </div>
            <span className="p-4 cursor-pointer" onClick={handleMenuToggle}>
              <FaTimes />
            </span>
          </div>

          {/* Mobile nav container */}
          <div>
            <ul className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-white hover:text-red-600 text-lg border-b py-2 border-[#767676]"
                onClick={() => handleClick("Home")}
              >
                <li>Home</li>
              </Link>

              <Link
                to="/about"
                className="text-white hover:text-red-600 text-lg border-b py-2 border-[#767676]"
                onClick={() => handleClick("About")}
              >
                <li>About</li>
              </Link>

              <Link
                to="/contact"
                className="text-white hover:text-red-600 text-lg border-b py-2 border-[#767676]"
                onClick={() => handleClick("Contact")}
              >
                <li>Contact</li>
              </Link>

              {/* Services Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center text-white border-b py-2 border-[#767676]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <Link to="/services" className="text-lg">Services</Link>
                  <FaAngleDown className="text-base bg-red-600 rounded-sm" />
                </div>
                {isDropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <Link to="/packers-movers" className="text-white hover:text-red-600" onClick={() => handleClick("Packers & Movers")}>
                      <li className="border-b py-2 border-[#767676]">Packers & Movers</li>
                    </Link>
                    <Link to="/office-shifting" className="text-white hover:text-red-600" onClick={() => handleClick("Office Shifting")}>
                      <li className="border-b py-2 border-[#767676]">Office Shifting</li>
                    </Link>
                    <Link to="/home-shifting" className="text-white hover:text-red-600" onClick={() => handleClick("Home Shifting")}>
                      <li className="border-b py-2 border-[#767676]">Home Shifting</li>
                    </Link>
                    <Link to="/storage-facilities" className="text-white hover:text-red-600" onClick={() => handleClick("Storage Facilities")}>
                      <li className="border-b py-2 border-[#767676]">Storage Facilities</li>
                    </Link>
                    <Link to="/bike-car-shifting" className="text-white hover:text-red-600" onClick={() => handleClick("Bike & Car Shifting")}>
                      <li className="border-b py-2 border-[#767676]">Bike & Car Shifting</li>
                    </Link>
                    <Link to="/international-shifting" className="text-white hover:text-red-600" onClick={() => handleClick("International Shifting")}>
                      <li className="border-b py-2 border-[#767676]">International Shifting</li>
                    </Link>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Contact and social links */}
          <ul className="list-unstyled p-4">
            <li className="flex gap-2 items-center">
              <FaEnvelope />
              <a href="mailto:needhelp@bondor.com" className="hover:text-red-600">
                needhelp@bondor.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt />
              <a href="tel:666-888-0000" className="hover:text-red-600">
                666 888 0000
              </a>
            </li>
            <li className="flex gap-2 items-center mt-4">
              <a href="https://twitter.com" className="text-xl hover:text-red-600">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" className="text-xl hover:text-red-600">
                <FaFacebookSquare />
              </a>
              <a href="https://pinterest.com" className="text-xl hover:text-red-600">
                <FaPinterestP />
              </a>
              <a href="https://instagram.com" className="text-xl hover:text-red-600">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
