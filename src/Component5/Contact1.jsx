import React from "react";
import images29 from "../Images/Beverly.png";
import images30 from "../Images/Group6.png";
function Contact1() {
  return (
    <div className="flex ml-36 gap-10 mt-9">
      <div className="w-[437px] h-[256px]">
        <img src={images29} alt="" />

        <h2 className="text-[45px] font-semibold text-[rgba(0,0,0,1)]">
          Let’s Collaborate
        </h2>
        <p className="w-[437px] h-[71px] text-[20px] font-normal text-[rgba(119,119,119,1)]">
          Lorem Ipsum is simply dummy text of the printing .
        </p>
      </div>
      <img src={images30} alt="" />
    </div>
  );
}

export default Contact1;
