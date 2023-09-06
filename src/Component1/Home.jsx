import React from "react";
import Application1 from "../Component1/Application1";

import Lorem from "./Lorem";
import Lorem2 from "./Lorem2";

import Lorem3 from "./Lorem3";
import Lorem5 from "./Lorem5";
import Lorem6 from "./Lorem6";
import Lorem7 from "./Lorem7";
import Lorem8 from "./Lorem8";
import Header from "../Component/Header";
import Lorem4 from "./Lorem4";
import Home2 from "./Home2";
function Home() {
  return (
    <div className="bg-[rgb(229,229,229)] h-fit ">
      <div className="w-[1440px] h-[5240px] bg-[rgba(255,255,255,1)] ml-60  ">
        <Header />
        <Home2 />
        <Application1 />
        <Lorem />
        <Lorem2 />
        <Lorem3 />
        <Lorem4 />
        <Lorem5 />
        <Lorem6 />
        <Lorem7 />
        <Lorem8 />
      </div>
    </div>
  );
}

export default Home;
