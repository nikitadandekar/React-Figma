import React from "react";
import images31 from "../Images/Group.png";
import images32 from "../Images/Phone.png";
import images33 from "../Images/gps.png";

function Location() {
  return (
    <div className="w-[1188px] h-[102px] flex gap-12 ml-36 mt-12">
      <div className="w-[184px] h-[82px] border-r-2 border-[rgba(194,194,194,1)] pr-12 ">
        <h2 className="text-[16px] font-normal text-[rgba(0,0,0,1)] w-[73px] h-[30px] ">
          Follow Us
        </h2>
        <img className="" src={images31} alt="" />
      </div>
      <div className="flex border-r-2 w-[221px] h-[82px]  border-[rgba(194,194,194,1)] pl-4 gap-6 ">
        <img className="w-10 h-10" src={images32} alt="" />
        <p className="text-[20px] font-light text-[rgba(51,51,51,1)]">
          +91444455556
        </p>
      </div>
      <div className="flex border-r-2 w-[373px] h-[82px]  gap-6">
        <img className="w-10 h-10" src={images33} alt="" />
        <p className="text-[20px] font-light text-[rgba(51,51,51,1)]">
          but also the leap into electronic typesetting
        </p>
      </div>
    </div>
  );
}

export default Location;
