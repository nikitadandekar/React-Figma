import React from "react";
import images23 from "../Images/Rectangle12.png";
import images24 from "../Images/Rectangle5.png";
import images25 from "../Images/Rectangle8.png";
import images26 from "../Images/Ellipse1.png";
import images27 from "../Images/Ellipse2.png";
import images28 from "../Images/Ellipse3.png";

function Photos2() {
  return (
    <div className="flex mt-24 ml-36 gap-7">
      <div className="w-[333px] h-[672px]">
        <img className="" src={images23} alt="" />
        <h2 className="text-[26px] font-semibold text-[rgba(0,0,0,1)] pt-6 leading-9">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-[16px] font-normal text-[rgba(66,66,66,1)] leading-7 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the .
        </p>
        <div className="w-[177px] h-[60px] flex gap-4 mt-6">
          <img src={images26} alt="" />
          <div>
            <div className="w-[102px] h-[30px] text-[18px] font-medium text-[rgba(0,0,0,1)]">
              Name here
            </div>
            <p className="text-[14px] font-normal text-[rgba(123,123,123,1)]">
              20.12.2020
            </p>
          </div>
        </div>
      </div>
      <div className="w-[333px] h-[672px]">
        <img src={images24} alt="" />
        <h2 className="text-[26px] font-semibold text-[rgba(0,0,0,1)] pt-6 leading-9">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-[16px] font-normal text-[rgba(66,66,66,1)] leading-7 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the .
        </p>
        <div className="w-[177px] h-[60px] flex gap-4 mt-6">
          <img src={images27} alt="" />
          <div>
            <div className="w-[102px] h-[30px] text-[18px] font-medium text-[rgba(0,0,0,1)]">
              Name here
            </div>
            <p className="text-[14px] font-normal text-[rgba(123,123,123,1)]">
              20.12.2020
            </p>
          </div>
        </div>
      </div>
      <div className="w-[333px] h-[672px]">
        <img src={images25} alt="" />
        <h2 className="text-[26px] font-semibold text-[rgba(0,0,0,1)] pt-6 leading-9">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-[16px] font-normal text-[rgba(66,66,66,1)] leading-7 pt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the .
        </p>
        <div className="w-[177px] h-[60px] flex gap-4 mt-6">
          <img src={images28} alt="" />
          <div>
            <div className="w-[102px] h-[30px] text-[18px] font-medium text-[rgba(0,0,0,1)]">
              Name here
            </div>
            <p className="text-[14px] font-normal text-[rgba(123,123,123,1)]">
              20.12.2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos2;
