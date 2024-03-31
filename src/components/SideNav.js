import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const links = [
    {
      name: "Population",
      to: "/population",
    },
    {
      name: "Crypto Currency",
      to: "/crypto",
    },
    {
      name: "Connect Wallet",
      to: "/wallet",
    },
  ];

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const checkActive = (nav) => {
    return location.pathname === nav ? "text-[#2AB42A]" : "";
  };

  return (
    <div className="min-h-screen w-64 pt-4 text-white bg-[#1A1E1C]">
      <div className="px-2">
        <img src={Logo} alt="logo" />
      </div>
      <div className={`${isOpen || !isSmallScreen ? "block" : "hidden"} sm:block`}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={toggleMenu}
            className={`block px-2 py-3 my-4 font-semibold cursor-pointer hover:text-[#2AB42A] ${checkActive(
              link.to
            )}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {isSmallScreen && (
        <button
          className="block px-4 py-2 my-4 mx-auto bg-[#2AB42A] text-white rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      )}
    </div>
  );
}

export default SideNav;
