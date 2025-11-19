import React from "react";
import "./Contact.css";
import contact from "../../assets/Contact.png";

function Contact() {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt="" />
        <h2>I'm here for contact</h2>
      </div>
      <div className="rightcontact">
      <form action="" className="contact-page">
        <label >Name</label>
        <input type="text" /><br />
        <label >Email</label>
        <input type="email" /><br />
        <label >Message</label>
        <textarea type="message" />
      </form>
      </div>
    </div>
  );
}

export default Contact;
