import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-googleFont  text-[#fff]">
      <div className=" font-bold text-[18px]">
        <header className="absolute pt-[50px] pl-[150px]">
          <NavLink to="/">Coffee house</NavLink>
          <NavLink to="/our-coffee" className="pl-[15px]">
            Our coffee
          </NavLink>
          <NavLink to="/for-your-pleasure" className=" pl-[15px]">
            For your pleasure
          </NavLink>
          <NavLink to="/about-coffee" className=" pl-[15px]">
            About Coffee
          </NavLink>
        </header>
      </div>
      <Outlet />
      <footer className="h-[180px] flex justify-center flex-col  bg-black">
        <div className="ml-[75px] text-[18px] font-medium ">
          <h3>Coffee House</h3>
          <ul className="pl-[35px] flex cursor-wait">
            <li className="pl-[10px]">Terms of Use</li>
            <li className="pl-[10px]">Privacy Policy</li>
            <li className="pl-[10px]">Contact Us</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
