import React from "react";

import Location from "./Location";
import Contact1 from "./Contact1";
import Form from "./Form";
import Footer from "./Footer";
import Header from "../Component/Header";
function Contact() {
  return (
    <div className="bg-[rgb(229,229,229)] h-fit ">
      <div className=" w-[1440px] h-[2060px] bg-[rgba(255,255,255,1)] ml-60 ">
        <Header />
        <Contact1 />
        <Location />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
