import React from "react";
import Header from "../Component/Header";
import Ipsum from "./Ipsum";
import Blog1 from "./Blog1";
import Center from "./Center";
import Photos from "./Photos";
import Photos2 from "./Photos2";
import Email2 from "./Email2";
import Media2 from "./Media2";
function Blog() {
  return (
    <div className="bg-[rgb(229,229,229)] h-fit ">
      <div className=" w-[1440px] h-[3794px] bg-[rgba(255,255,255,1)]  ml-60 ">
        <Header />
        <Blog1 />
        <Ipsum />
        <Center />
        <Photos />
        <Photos2 />
        <Email2 />
        <Media2 />
      </div>
    </div>
  );
}

export default Blog;
