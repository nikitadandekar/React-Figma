import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Component1/Home";
import About from "./Component2/About";
import Services from "./Component3/Services";
import Blog from "./Component4/Blog";
import Contact from "./Component5/Contact";

import { Route, Router, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
