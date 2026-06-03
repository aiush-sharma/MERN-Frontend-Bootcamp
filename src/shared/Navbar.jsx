import React from "react";
import { Button } from "./Navbar.css";
import { Link } from "react-router-dom";
import useEffect from "../Components/UseEffect.jsx";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-red-400 text-white flex justify-between items-center px-5 py-3">
        <span>BootCamp</span>
        <ul className="list flex space-x-2.5 items-center ">
          <li className="listItems ">
            <Link to="/">Home</Link>
          </li>
          <li className="listItems">
            <Link to="/about">About</Link>
          </li>
          <li className="listItems">
            <Link to="/Skill">Skill</Link>
          </li>
          <li></li>

          <li className="listItems">
            <Link to="/useEffect" element={useEffect}>
              UseEffect
            </Link>
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
