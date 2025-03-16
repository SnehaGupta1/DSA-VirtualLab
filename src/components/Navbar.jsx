import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubMenu(null);
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
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-green-400 transition duration-200"
              activeClassName="bg-gray-700 text-green-400"
            >
              Introduction
            </NavLink>
          </li>
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
                        <NavLink
                          to="/arrays/overview"
                          className="block px-4 py-2 hover:text-green-400 transition"
                          activeClassName="text-green-400"
                        >
                          Overview
                        </NavLink>
                        <NavLink
                          to="/arrays/practice"
                          className="block px-4 py-2 hover:text-green-400 transition"
                          activeClassName="text-green-400"
                        >
                          Practice
                        </NavLink>
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
                        <NavLink
                          to="/linkedlists/overview"
                          className="block px-4 py-2 hover:text-green-400 transition"
                          activeClassName="text-green-400"
                        >
                          Overview
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/linkedlists/visualization"
                          className="block px-4 py-2 hover:text-green-400 transition"
                          activeClassName="text-green-400"
                        >
                          Visualization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/linkedlists/practice"
                          className="block px-4 py-2 hover:text-green-400 transition"
                          activeClassName="text-green-400"
                        >
                          Practice
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
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
                  <NavLink
                    to="/sorting"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                    activeClassName="text-green-400"
                  >
                    Sorting Algorithms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/searching"
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-green-400 transition"
                    activeClassName="text-green-400"
                  >
                    Searching Algorithms
                  </NavLink>
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