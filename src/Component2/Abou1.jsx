import React from "react";
import images56 from "../Images/Rectangle16.png";
import images57 from "../Images/Rectangle19.png";
import images58 from "../Images/IMG.PNG";
function About1() {
  return (
    <div className="flex pl-24 gap-9 pt-16">
      <img className="w-[247px] h-[259px] relative top-12" src={images56} />
      <img className="w-[288px] h-[306px]" src={images57} />
      <div className="w-[565px] h-[318px]">
        <h2 className="text-[25px] text-[#1090CB] font-normal font-[Poppins] pt-6">
          About us
        </h2>
        <h3 className="text-[40px] font-semibold text-[#252525] w-[540px] h-[128px]  pt-6">
          Lorem Ipsum is simply dummy text of the printing.
        </h3>
        <p className="text-[#868686] font-[Poppins] font-normal text-[18px] w-[380px] h-[128px] leading-6 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
      <img className="relative left-20 bottom-52" src={images58} />
    </div>
  );
}

export default About1;
