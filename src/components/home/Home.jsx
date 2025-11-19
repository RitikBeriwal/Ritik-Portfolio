import React from "react";
import "./Home.css";
import right from "../../assets/right.png";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">RITIK BERIWAL</div>
          <div className="line3"><Typewriter
            words={["FRONTEND DEVELOPER", "REACT JS DEVELOPER","WEB DESGINING"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={right} alt="" />
      </div>
    </div>
  );
}

export default Home;
