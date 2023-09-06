import React from "react";
import images62 from "../Images/Rectangle1.png";
import images63 from "../Images/apps.png";
import images64 from "../Images/Rectangle2.png";
import images65 from "../Images/startup.png";
import images66 from "../Images/Rectangle4.png";
import images67 from "../Images/coding.png";
import images68 from "../Images/Rectangle3.png";
import images69 from "../Images/Cloud.png";
import image from "../Images/Rectangle 20.png";

function Text() {
  return (
    <div className="pl-32">
      <img className="relative top-44" src={image} />
      <div className="flex mt-48 ">
        <div className="w-[499px] h-[437px]">
          <h2 className="w-[499px] h-[109px] font-[Poppins] text-[rgba(0,0,0,1)] text-[30px] font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>
          <p className="w-[] h-[] text-[rgba(88,88,88,1)] font-[Poppins] font-normal text-[20px]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects.
          </p>
          <button className="w-[193px] h-[51px] font-[Poppins] mt-11 text-[16px] text-[rgba(16,144,203,1)] rounded-lg border-solid border-[2px] border-[rgba(16,144,203,1)]">
            Contact us
          </button>
        </div>
        <div className="w-[766px] h-[395px] bg-[rgb(255,255,255)] ml-16">
          <div className=" flex mt-11 ml-9">
            <img src={images62} />
            <img
              className=" w-12 h-12 relative right-16 top-5"
              src={images63}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium ">
              Web Application
            </p>
            <img className="ml-24" src={images64} />
            <img className="relative right-16 w-12 h-12 top-5" src={images65} />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium  ">
              SEO
            </p>
          </div>
          <div className="flex mt-12 ml-9">
            <img src={images66} />
            <img
              className=" w-12 h-12 relative right-16 top-5"
              src={images67}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium ">
              Mobile Applications
            </p>
            <img className="ml-14" src={images68} />
            <img
              className=" w-12 h-12 relative right-16 top-5"
              src={images69}
            />
            <p className="text-[rgba(46,13,100,1)] text-[25px] font-[Poppins] font-medium  ">
              AR/VR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
