import React, { useState } from "react";
import { LINKS } from "../constants";
import { a } from "framer-motion/client";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import blue_logo from "../assets/Arnifi-Primary-Logo_Blue.png";
import { MdOutlineAccountBox } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className=" top-0 left-0 w-full z-50 text-black py-8 lg:px-40 md:px-10 px-10">
      <div className="flex justify-between items-center mx-auto">
        <div> <Link to="/home">
          <img src={blue_logo} alt="logo"     className="w-24 h-10 sm:w-20 sm:h-12 lg:w-32 lg:h-12" />
        </Link></div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className=" hover:text-[#2e2ea3] transition duration-300 font-medium text-[#334680] text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className=" focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>

          {/* Profile Icon visible on Laptop */}
          <div className="hidden lg:block md:block">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? " text-3xl  cursor-pointer hover:text-[#2e2ea3] transition duration-300 font-medium text-[#334680]"
              : "text-3xl  hover:text-[#2e2ea3] transition duration-300 font-medium text-[#334680] cursor-pointer"
          }
        ><MdOutlineAccountBox />
        </NavLink></div>
      </div>

      {menuOpen && (
        <div className="md:hidden p-2 pt-3 bg-gray-300/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className=" hover:text-[#2e2ea3] transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

           <NavLink
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
               ? " text-3xl  cursor-pointer hover:text-[#2e2ea3] transition duration-300 font-medium text-[#334680]"
              : "text-3xl hover:text-[#2e2ea3] transition duration-300 font-medium text-[#334680] cursor-pointer"
           }
          ><MdOutlineAccountBox />
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
