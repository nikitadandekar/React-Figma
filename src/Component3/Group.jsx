import React from "react";
import images12 from "../Images/Beil.png";
import images13 from "../Images/angle.png";
import Project from "./Project";
// import images14 from "../Images/vector1.png";

// import images15 from "../Images/vactor2.png";

function Group() {
  return (
    <div className="w-[1440px] h-[566px]">
      {/* <img srcc={images14} alt="" /> */}
      <img className="relative left-[1000px] top-20" src={images12} alt="" />
      {/* <img srcc={images15} alt="" /> */}
      <div className="w-[1440px] h-[388px] bg-[rgba(16,144,203,1)] relative top-10">
        <div className="w-[1084px] h-[124px]  relative top-28 left-40 ">
          <div className="flex gap-28 pl-20 pt-12">
            <h2 className="w-[114px] h-[70px]  text-[65px] font-medium leading-10 text-center text-[rgba(255,255,255,1)]  ">
              6
            </h2>

            <h2 className="w-[114px] h-[70px]  text-[65px] font-medium leading-10 text-center  text-[rgba(255,255,255,1)]">
              11
            </h2>

            <h2 className="w-[114px] h-[70px]  text-[65px] font-medium leading-10 text-center text-[rgba(255,255,255,1)]">
              7M
            </h2>

            <h2 className="w-[114px] h-[70px]  text-[65px] font-medium leading-10 text-center  text-[rgba(255,255,255,1)]">
              6000+
            </h2>
          </div>
          <div className="flex gap-28 pl-20">
            <span className="font-normal text-[16px]  text-center  text-[rgba(255,255,255,1)]">
              Happy Clients
            </span>
            <span className="font-normal text-[16px]  text-center  text-[rgba(255,255,255,1)]">
              Completed Projects
            </span>
            <span className="font-normal text-[16px]  text-center  text-[rgba(255,255,255,1)]">
              Transsactions
            </span>
            <span className="font-normal text-[16px]  text-left pl-11  text-[rgba(255,255,255,1)]">
              Customers
            </span>
          </div>
          <img className="relative top-14 left-44" src={images13} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Group;
