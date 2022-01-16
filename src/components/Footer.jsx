import React from "react";
import img1 from "../images/icon-facebook.svg";
import img2 from "../images/icon-twitter.svg";
import img3 from "../images/icon-instagram.svg";
import logo from "../images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="box-container">
        <div className="content">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="box">
            <a href="#faq">FAQs</a>
            <a href="#Contact">Contact Us</a>
          </div>
          <div className="box">
            <a href="#faq">Privacy Policy</a>
            <a href="#Contact">Press Kit</a>
          </div>
          <div className="box">
            <a href="#faq">Install Guide</a>
          </div>
        </div>
        <div className="media">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
