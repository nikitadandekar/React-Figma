import React from "react";
import images52 from "../Images/beneoshop.png";
import images53 from "../Images/caspio.png";
import images54 from "../Images/HyperGrid.png";
import images55 from "../Images/leotrippi.png";
import Circle3 from "../Images/Ellip3.png";
function Lorem6() {
  return (
    <div className=" h-[234px] pt-14 ">
      <img className="absolute z-30 mb-[30%]" src={Circle3} />
      <h2 className="text-[24px] h-[38px] w-[353px] text-[#000000] font-[Poppins] font-medium text-center ml-[36%] ">
        You will be in good Company
      </h2>
      <div className=" ml-48 flex gap-24">
        <img src={images52} />
        <img src={images53} />
        <img src={images54} />
        <img src={images55} />
      </div>
    </div>
  );
}

export default Lorem6;
