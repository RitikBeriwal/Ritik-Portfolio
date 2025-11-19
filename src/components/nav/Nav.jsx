import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
const menu=useRef()
const mobile=useRef()

  return (
    <nav>
      <h1>Portfolio</h1>
      <ul className="desktopmenu">
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>



<div className="hamburger" ref={menu} onClick={()=>{
  mobile.current.classList.toggle("activemobile")
  menu.current.classList.toggle("activeham")
}}>
  <div className="ham"></div>
  <div className="ham"></div>
  <div className="ham"></div>
</div>



      <ul className="mobilemenu" ref={mobile} >
        <li>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
