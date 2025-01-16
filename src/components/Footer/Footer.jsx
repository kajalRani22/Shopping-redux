import React from "react";
import "./Footer.css";
import { FaPinterest,FaFacebook,FaInstagram , FaPhoneAlt} from "react-icons/fa";
import {CiTwitter} from "react-icons/ci"
import {IoMdMail} from "react-icons/io"
import { footerLinks } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import payment from '../../assets/payment.png'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Rise Of coding.</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi
          error architecto temporibus eius! Saepe facilis libero non dolorem,
          deleniti totam illo voluptatum quis! Ipsum omnis quidem repudiandae
          delectus eius?
        </p>
        <div className="social-container">
<div className="social-icon" style={{backgroundColor: "#3b5999"}}>
    <FaFacebook className="icon"/>

</div>
<div className="social-icon" style={{backgroundColor: "#e44059"}}>
    <FaInstagram className="icon"/>

</div>
<div className="social-icon" style={{backgroundColor: "#3b5999"}}>
    <CiTwitter className="icon"/>

</div>
<div className="social-icon" style={{backgroundColor: "#e60023"}}>
    <FaPinterest className="icon"/>

</div>
        </div>
      </div>

     <div className="footer-center">
<h3>UseFul Links</h3>
<ul className="footer-list">
    {footerLinks.map((link)=>(
        <li key={link.id}className="footer-list-item">{link.title}</li>
    ))}
</ul>
     </div>

<div className="footer-right">
<h3 className="footer-title">Contact</h3>
<div className="contact-item">
    <FaLocationDot style={{marginRight: "10px"}}/>Ghaziabad
</div>
<div className="contact-item">
<FaPhoneAlt style={{marginRight:"10px"}}/>9862527888
</div>
<div className="contat-item">
       <IoMdMail style={{marginRight: "10px"}}/>kajal@gmail.com
</div>
<img className="payment" alt="" src={payment}/>
</div>
    </div>
  );
};

export default Footer;
