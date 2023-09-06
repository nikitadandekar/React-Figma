import React from "react";
import Header from "../Component/Header";
import Application from "./Application";
import Lorem from "./Lorem";
import Group from "./Group";
import Services1 from "./Services1";
import Project from "./Project";

import Email from "./Email";
import Socialmedia from "./Socialmedia";
function Services() {
  return (
    <div className="bg-[rgb(229,229,229)] ">
      <div className=" w-[1440px] h-[4080px] bg-[rgba(255,255,255,1)]  ml-60 mr-8">
        <Header />
        <Services1 />
        <Application />
        <Lorem />
        <Group />
        <Project />
        <Email />
        <Socialmedia />
      </div>
    </div>
  );
}

export default Services;
