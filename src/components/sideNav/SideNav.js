// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

const Sidebar = ({ categories }) => {
  return (
    <nav className="sidebar sidebar-sticky bg-light">
      <div className="p-4">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="me-2 mb-4"
          style={{ width: "140px", height: "60px", marginLeft: "-1.5rem" }}
        />
        <h2>Categories</h2>
        <ul className="nav flex-column">
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={`/category/${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
