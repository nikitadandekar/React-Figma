import React from "react";

import Paragraph from "./Paragraph";
import Text from "./Text";
import Photo from "./Photo";
import Center from "./Center";
import Footer from "./Footer";
import About1 from "./Abou1";
import About2 from "./About2";
import Header from "../Component/Header";

function About() {
  return (
    <div className="bg-[rgb(229,229,229)] h-fit  ">
      <div className=" w-[1440px] h-[3992px] bg-[rgba(255,255,255,1)]  ml-60 ">
        <Header />
        <About1 />
        <About2 />
        <Paragraph />
        <Text />
        <Photo />
        <Center />
        <Footer />
      </div>
    </div>
  );
}

export default About;
