import React from "react";

import images3 from "../Images/Rectangle1.png";
import images5 from "../Images/coding.png";
import images4 from "../Images/Rectangle4.png";
import images6 from "../Images/apps.png";
import images7 from "../Images/Rectangle2.png";
import images8 from "../Images/startup.png";
import images9 from "../Images/Rectangle3.png";
import images10 from "../Images/immersive.png";
import images23 from "../Images/angle2.png";

function Application() {
  return (
    <div className="w-[1100px] h-[400px] bg-[rgba(210,210,210,1)] relative bottom-48 left-40">
      <img className="relative bottom-20 left-[950px]" src={images23} alt="" />
      <div className="flex">
        <div className="flex  w-[453px] h-[105px] ml-12 ">
          <img src={images4} alt="" />
          <img
            className="relative right-20 top-7 w-14 h-14"
            src={images5}
            alt=""
          />
          <div className="">
            <h2 className="text-[rgba(0,0,0,1)] font-medium text-[25px] ">
              Mobile Applications
            </h2>
            <p className=" font-normal text-[16px] text-[rgba(121,121,121,1)]">
              The simplest but robust technology to accompany with you
            </p>
          </div>
        </div>
        <div className="flex  w-[453px] h-[105px]  ml-12">
          <img src={images3} alt="" />
          <img
            className="relative right-20 top-7 w-14 h-14"
            src={images6}
            alt=""
          />
          <div className="">
            <h2 className="text-[rgba(0,0,0,1)] font-medium text-[25px] ">
              Web Applications
            </h2>
            <p className=" font-normal text-[16px] text-[rgba(121,121,121,1)]">
              Platform independant business solutions for maximum availability
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex  w-[453px] h-[105px] mt-8 ml-12">
          <img src={images7} alt="" />
          <img
            className="relative right-20 top-7 w-14 h-14"
            src={images8}
            alt=""
          />
          <div className="">
            <h2 className="text-[rgba(0,0,0,1)] font-medium text-[25px] ">
              SEO
            </h2>
            <p className=" font-normal text-[16px] text-[rgba(121,121,121,1)]">
              Let the world find you on top of others
            </p>
          </div>
        </div>
        <div className="flex  w-[453px] h-[105px] mt-8 ml-12">
          <img src={images9} alt="" />
          <img
            className="relative right-20 top-7 w-14 h-14"
            src={images10}
            alt=""
          />
          <div className="">
            <h2 className="text-[rgba(0,0,0,1)] font-medium text-[25px] ">
              AR/VR Solutions
            </h2>
            <p className=" font-normal text-[16px] text-[rgba(121,121,121,1)]">
              Advanced autonomous technologies to make life simple
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
