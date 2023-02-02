import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="fixed-header">
          <li className="header-item">
            <NavLink
              to="/tasks"
              className={({ isActive }) => (isActive ? "blue" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "blue" : "")}
            >
              Login
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "blue" : "")}
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
