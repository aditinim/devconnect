import React from "react";
import { Link } from "react-router-dom";
import devConnect_dora from "../assets/DevConnect_dora.png";

const Navbar = () => {
  return (
    <>
      <div className="flex gap-1 w-screen h-14 bg-[#01351b] items-center p-3 justify-between">
        <div className="flex items-center gap-3">
          {/* <img src={devConnect_dora} alt="Logo" className="h-12 w-50" /> */}
          <p className="font-bold text-white">DevConnect</p>
        </div>

        <ul className="flex gap-6 items-center">
          <li className="text-white font-bold">
            <Link to="/playground">Playground</Link>
          </li>
          <li className="text-white font-bold">Messages</li>
          <li className="text-white font-bold">Profile</li>
          <li>
            <button className="flex bg-green-600 pt-2 pb-2 pr-6 pl-6 rounded-2xl text-black font-bold">
              <Link to="/signup">Sign in</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
