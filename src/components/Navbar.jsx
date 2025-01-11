import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null); // For top-level menus
  const [openSubMenu, setOpenSubMenu] = useState(null); // For nested sub-menus

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubMenu(null); // Close any open sub-menus when a top-level menu is toggled
  };

  const toggleSubMenu = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0 shadow-lg">
      <h1 className="text-2xl font-bold text-center p-4 border-b border-gray-700">
        DSA Virtual Lab
      </h1>
      <nav className="mt-4">
        <ul className="space-y-2">
          {/* Introduction */}
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-green-400 transition duration-200"
            >
              Introduction
            </Link>
          </li>

          {/* Data Structures */}
          <li>
            <button
              className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-700 transition duration-200"
              onClick={() => toggleMenu("dataStructures")}
            >
              Data Structures
              <span>{openMenu === "dataStructures" ? "▲" : "▼"}</span>
            </button>
            {openMenu === "dataStructures" && (
              <ul className="ml-4 bg-gray-700 space-y-1 p-2 rounded">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                    onClick={() => toggleSubMenu("arrays")}
                  >
                    Arrays
                    <span className="ml-2">
                      {openSubMenu === "arrays" ? "▲" : "▼"}
                    </span>
                  </button>
                  {openSubMenu === "arrays" && (
                    <ul className="ml-4 space-y-1 text-sm bg-gray-600 p-2 rounded">
                      <li>
                        <Link
                          to="/arrays/overview"
                          className="block px-4 py-2 hover:text-green-400 transition"
                        >
                          Overview
                        </Link>
                        <Link
                          to="/arrays/practice"
                          className="block px-4 py-2 hover:text-green-400 transition"
                        >
                          Practice
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                    onClick={() => toggleSubMenu("linkedLists")}
                  >
                    Linked Lists
                    <span className="ml-2">
                      {openSubMenu === "linkedLists" ? "▲" : "▼"}
                    </span>
                  </button>
                  {openSubMenu === "linkedLists" && (
                    <ul className="ml-4 space-y-1 text-sm bg-gray-600 p-2 rounded">
                      <li>
                        <Link
                          to="/linkedlists/overview"
                          className="block px-4 py-2 hover:text-green-400 transition"
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/linkedlists/practice"
                          className="block px-4 py-2 hover:text-green-400 transition"
                        >
                          Practice
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Algorithms */}
          <li>
            <button
              className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-700 transition duration-200"
              onClick={() => toggleMenu("algorithms")}
            >
              Algorithms
              <span>{openMenu === "algorithms" ? "▲" : "▼"}</span>
            </button>
            {openMenu === "algorithms" && (
              <ul className="ml-4 bg-gray-700 space-y-1 p-2 rounded">
                <li>
                  <Link
                    to="/sorting"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                  >
                    Sorting Algorithms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/searching"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                  >
                    Searching Algorithms
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
