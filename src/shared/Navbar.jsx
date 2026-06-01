import React from "react";
import { Button } from "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-red-400 text-white flex justify-between items-center px-5 py-3">
        <span>Logo 1</span>
        <ul className="list flex space-x-2.5 items-center ">
          <li className="listItems ">
            <a href="#">Home</a>
          </li>
          <li className="listItems">
            <a href="#">About</a>
          </li>
          <li className="listItems">
            <a href="#">Skill</a>
          </li>
          <li className="listItems">
            <a href="#">Contact</a>
          </li>
          <li className="listItems">
            <Button bgColor="rgb(228, 206, 27);">Hire Me</Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
