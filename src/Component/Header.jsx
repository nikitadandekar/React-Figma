import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between items-center border-b-2 z-50 relative  pt-6 pb-6">
      <div className="text-sky-600 text-[29px] font-bold mt-[9px] ml-[32px]">
        <Link to={"/"}>LOGO</Link>
      </div>
      <div className="flex justify-between items-center text-center">
        <div className="w-[436px] h-6 relative">
          <div className="left-0 top-0 absolute text-sky-600 text-base font-normal">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="left-[120px] top-0 absolute text-black text-base font-normal">
            <Link to={"/about"}> About </Link>
          </div>
          <div className="left-[220px] top-0 absolute text-black text-base font-normal">
            <Link to={"/services"}> Services</Link>
          </div>
          <div className="left-[320px] top-0 absolute text-black text-base font-normal">
            <Link to={"/blog"}>Blog</Link>
          </div>
        </div>
        <div className="w-[125px] h-[41px] bg-sky-600 rounded-md  mr-[32px]  text-white  text-[13px] font-normal">
          <h3 className="text-center mt-[8px]">
            <button type="button " className="w-[100%]">
              <Link to={"/contact"}>Contact us </Link>
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
