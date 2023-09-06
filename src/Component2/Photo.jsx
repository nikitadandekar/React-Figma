import React from "react";
import images70 from "../Images/Rectangle15.png";
import images71 from "../Images/Rectangle17.png";
import images72 from "../Images/Rectangle18.png";
import images73 from "../Images/Rectangle14.png";
import images74 from "../Images/Ellipse 2.png";
import images75 from "../Images/Rectangle.png";

function Photo() {
  return (
    <div className="pl-32">
      <h1 className="text-[rgba(0,0,0,1)] font-semibold text-[25px] font-[Poppins]">
        Our Team
      </h1>
      <div className="w-[4172px] h-[453px] flex mt-11 gap-11">
        <div>
          <img src={images70} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3 leading-10">
            CEO
          </h3>
          <h4 className="font-[Poppins] text-[18px] text-[rgba(0,0,0,1)] font-semibold ">
            John kabras
          </h4>
        </div>
        <div>
          <img src={images71} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            COO
          </h3>
          <h4 className="font-[Poppins] text-[18px] text-[rgba(0,0,0,1)] font-semibold ">
            Philips shene moris
          </h4>
        </div>
        <div>
          <img src={images72} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            Tech lead
          </h3>
          <h4 className="font-[Poppins] text-[18px]  font-semibold  ">
            Equarn shamir mohomad
          </h4>
        </div>
        <div>
          <img src={images73} />
          <h3 className="text-[16px] text-[rgba(106,106,106,1)] font-medium font-[Poppins] pt-3  leading-10">
            Head of UX
          </h3>
          <h4 className="font-[Poppins] text-[18px]  font-semibold ">
            Janka indrajith
          </h4>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={images74} />
        <img src={images74} />
        <img src={images74} />
        <img src={images75} />
      </div>
    </div>
  );
}

export default Photo;
