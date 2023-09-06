import React from "react";
import images34 from "../Images/Rectangle4.png";
import images35 from "../Images/website-content.png";
import images36 from "../Images/Rectangle 7.png";
import images37 from "../Images/seo-tag.png";
import images38 from "../Images/Rectangle 8.png";
import images39 from "../Images/immersive1.png";
import images40 from "../Images/Rectangle 9.png";
import images41 from "../Images/coding1.png";

function Application1() {
  return (
    <div className="flex pt-16 pl-32 border-b-2 border-[#C7C7C7]">
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <img className="w-[83px] h-[83px] " src={images34} />
        <img
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images35}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            Web Application
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <img className="w-[83px] h-[83px] " src={images36} />
        <img
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images37}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            SEO
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <img className="w-[83px] h-[83px] " src={images38} />
        <img
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images39}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            AR/VR Solutions
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
      <div className="w-[1440px] h-[169px] bg-[#FFF] flex">
        <img className="w-[83px] h-[83px] " src={images40} />
        <img
          className="w-[41px] h-[41px] relative right-16 top-6"
          src={images41}
        />

        <div>
          <h2 className="text-[#000] font-[Poppins] text-[20px] font-semibold leading-[175%]">
            Mobile Applications
          </h2>
          <h2 className=" font-[Poppins] text-[15px] font-normal leading-[175%] text-[#969696]">
            Lorem Ipsum is simply
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Application1;
