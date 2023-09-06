import React from "react";
import images16 from "../Images/Rectangle5.png";
import images17 from "../Images/Rectangle6.png";
import images18 from "../Images/Rectangle8.png";
import images19 from "../Images/Rectangle7.png";

function Project() {
  return (
    <div className="mt-40 ml-40 ">
      <h1 className="text-[36px] font-medium text-black">Our latest Project</h1>
      <div className="flex mt-20 gap-10">
        <div className="w-[300px] h-[500px]">
          <img src={images16} alt="" />
          <p className="text-[23px] font-semibold text-black leading-8 pt-9">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <span className="text-[15px] font-normal text-[#424242] leading-7 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="w-[300px] h-[500px]">
          <img src={images17} alt="" />
          <p className="text-[23px] font-semibold text-black leading-8 pt-9">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <span className="text-[15px] font-normal text-[#424242] leading-7 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsu
          </span>
        </div>
        <div className="w-[300px] h-[500px]">
          <img src={images18} alt="" />
          <p className="text-[23px] font-semibold text-black leading-8 pt-9">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <span className="text-[15px] font-normal text-[#424242] leading-7 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </span>
        </div>
        <div className="w-[300px] h-[500px]">
          <img className="h-64" src={images19} alt="" />
          <p className="text-[23px] font-semibold text-black leading-8 pt-9">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <span className="text-[15px] font-normal text-[#424242] leading-7 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
