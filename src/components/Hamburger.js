import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import "./Hamburger.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (submenu) => {
    setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
  };

  return (
    <div className="mobile-menu">
      <button
        onClick={toggleMenu}
        style={{ color: "black", border: "none", background: "transparent" }}
      >
        <CgMenuGridO size={50} />
      </button>
      {isOpen && (
        <div className="dropdown-mobile">
          <div className="dropdown-block">
            <button
              className="dropdown-options"
              onClick={() => toggleSubmenu("services")}
            >
              Services
            </button>
            {activeSubmenu === "services" && (
              <div className="submenu">
                <div href="#">Guided Tour</div>
                <div href="#">Travel Packages</div>
                <div href="#">Festival Guide</div>
              </div>
            )}
          </div>
          <div className="dropdown-block">
            <button
              className="dropdown-options"
              onClick={() => toggleSubmenu("bookings")}
            >
              Booking
            </button>
            {activeSubmenu === "bookings" && (
              <div className="submenu">
                <div>Manage Booking</div>
                <div>Booking Inquiries</div>
              </div>
            )}
          </div>
          <div className="dropdown-blocks">
            <button
              className="dropdown-options"
              onClick={() => toggleSubmenu("landmarks")}
            >
              Landmarks
            </button>
            {activeSubmenu === "landmarks" && (
              <div className="submenu">
                <div>Taksang</div>
                <div>Jumolhari</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
