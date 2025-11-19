import React from "react";
import "./About.css";
import Card from "../card/Card";
import reacticon from "../../assets/reacticon.png";
import materialui from "../../assets/MaterialUI.png";
import tailwindcss from "../../assets/TailwindCSS.png";
import htmlcssjs from "../../assets/htmlcssjs.png"

function About() {




  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>PERSONAL INFO</h1>
            <ul>
              <li>
                <span>Name </span>: RITIK BERIWAL
              </li>
              <li>
                <span>Age </span>: 21
              </li>
              <li>
                <span>EMAIL </span>: RITIKBERIWAL82@GMAIL.COM
              </li>
              <li>
                <span>Language Known </span>: HINDI,ENGLISH
              </li>
            </ul>
          </div>
          <div className="educationinfo">
            <h1>EDUCATION</h1>
            <ul>
              <li>MASTER IN COMPUTER APPLICATION</li>
              <li>
                <span>BRANCH </span>: IT AND COMPUTER SCIENCE
              </li>
              <li>
                <span>CGPA </span>: 7
              </li>
              <li>
                <span>DIPLOMA </span>: WEB DESIGNING + DEVELOPMENT
              </li>
            </ul>
          </div>
          <div className="skillsinfo">
            <h1>SKILLS</h1>
            <ul>
              <li>REACT JS</li>
              <li>MATERIAL UI</li>
              <li>HTML ,CSS ,JS ,SASS ,TAILWIND CSS ,BOOTSTRAP</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="React Js" image={reacticon} />
        <Card title="TailwindCss Material Ui Sass" image={tailwindcss}  />
        <Card title="Html Css Js " image={htmlcssjs}  />
      </div>
    </div>
  );
}

export default About;
