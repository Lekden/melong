import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Hamburger.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (submenu) => {
    setActiveSubmenu((prev) => (prev === submenu ? "" : submenu));
  };


  const menuItems = [
    {
      name: "Services",
      submenu: [
        { label: "Trek", path: "/treks" },
        { label: "Guided Tour", path: "/guided-tour" },
        { label: "Travel Packages", path: "/travel-packages" },
        { label: "Festival Guide", path: "/festival-guide" },
      ],
    },
    {
      name: "Booking",
      submenu: [
        { label: "Manage Booking", path: "/manage-booking" },
        { label: "Booking Inquiries", path: "/booking-inquiries" },
      ],
    },
    {
      name: "Landmarks",
      submenu: [
        { label: "Taksang", path: "/landmarks/taksang" },
        { label: "Jumolhari", path: "/landmarks/jumolhari" },
      ],
    },
  ];

  return (
    <div className="mobile-menu">
      <button
        onClick={toggleMenu}
        style={{ border: "none", background: "transparent" }}
        aria-label="Toggle Menu"
      >
        <CgMenuGridO size={50} />
      </button>

      {isOpen && (
        <div className="dropdown-mobile">
          {menuItems.map(({ name, submenu }) => (
            <div className="dropdown-block" key={name}>
              <button
                className="dropdown-options"
                onClick={() => toggleSubmenu(name.toLowerCase())}
                aria-expanded={activeSubmenu === name.toLowerCase()}
              >
                {name}
              </button>
              {activeSubmenu === name.toLowerCase() && (
                <div className="submenu">
                  {submenu.map(({ label, path }) => (
                    <Link to={path} key={label} onClick={() => setIsOpen(false)}>
                      <div>{label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
