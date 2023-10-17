import React from 'react';
import Section from '../Section';
import "../../stylesheets/Contact.css";
import {HiOutlineMail,HiOutlinePhone} from "react-icons/hi";
import { TfiGithub } from "react-icons/tfi";
import { RxLinkedinLogo } from "react-icons/rx";
import { PiGearBold } from "react-icons/pi";

const Contact = () => {
  return (
    <Section centered={true}>
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info-outer">
            <div className="contact-info">
                <div className="contact-icon center-child">
                  <HiOutlineMail/>
                </div>
                <a href="mailto:jamescrovo450@gmail.com">jamescrovo450@gmail.com</a>
            </div>
            <div className="contact-info">
              <div className="contact-icon center-child">
                <HiOutlinePhone/>
              </div>
              <a href="tel:267-429-5457">267-429-5457</a>
            </div>
        </div>
        <h3>Other Links</h3>
        <div className="other-links">
          <a
            title="Github" 
            href="https://github.com/JamesAC42" 
            className="center-child">
            <TfiGithub/>
          </a>
          <a 
            title="LinkedIn"
            href="https://linkedin.com/in/jamescrovo" 
            className="center-child">
            <RxLinkedinLogo/>
          </a>
          <a
            title="Hatsumei" 
            href="https://hatsumei.pro" 
            className="center-child">
            <PiGearBold/>
          </a>
        </div>
        <footer>
          <p>© James Crovo 2023</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;