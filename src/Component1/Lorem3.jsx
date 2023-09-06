import React from "react";
import images46 from "../Images/website-mockup.png";
import images47 from "../Images/blue.png";
import images48 from "../Images/happy.png";
import Circle4 from "../Images/Ellip3.png";
function Lorem3() {
  return (
    <div className=" h-[576px] flex  gap-16 mt-56 ">
      <img className="absolute z-50 " src={Circle4} />
      <img className="pl-24 relative bottom-24" src={images46} />
      <div className="w-[516px] h-[389px] ml-10">
        <div className="w-[391px] h-[58px]  flex ">
          <img src={images47} />
          <img className="relative right-12 w-9 h-9 top-3" src={images48} />
          <div className="w-[308px] h-[55px]  ">
            <h2 className="w-[308px] h-[30px] font-medium text-[17px] text-[rgba(0,0,0,1)] font-[Poppins]">
              Lorem Ipsum is simply dummy text
            </h2>
            <h2 className="font-[Poppins] text-[14px] font-normal text-[rgba(134,134,134,1)]">
              Lorem Ipsum is simply dummy text
            </h2>
          </div>
        </div>
        <h2 className="w-[516px] h-[91px] text-[30px] font-[Poppins] text-[rgba(37,37,37,1)]  font-semibold mt-10">
          <span className="text-[rgba(16,144,203,1)]">Lorem Ipsum </span>is
          simply dummy text of the printing.
        </h2>

        <p className="text-[16px] font-normal font-[Poppins] text-[rgba(84,84,84,1)]  w-[476px] h-[141px] mt-8 leading-8 ">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
      </div>
    </div>
  );
}

export default Lorem3;
