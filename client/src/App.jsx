import Links from "./components/Links";
import "./stylesheets/App.css";
import React, { useState } from 'react';
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import Portfolio from "./components/sections/Portfolio";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

import { TfiGithub } from "react-icons/tfi";
import { RxLinkedinLogo } from "react-icons/rx";
import { PiGearBold } from "react-icons/pi";
import { BiMenu } from "react-icons/bi";

function App() {

  const [activeSection, setActiveSection] = useState("Home");
  const [hideLinks, setHideLinks] = useState(true);

  const sections = {
    "Home": Home,
    "About Me": AboutMe,
    "Portfolio": Portfolio,
    "Skills": Skills,
    "Resume": Resume,
    "Contact": Contact
  };

  return (
    <div className="container">
      <div className={"links-outer" + (hideLinks ? " hidden" : "")}>
        <Links 
          sections={Object.keys(sections)}
          activeSection={activeSection}
          onSectionChange={(section) => {
            setHideLinks(true);
            setActiveSection(section);
          }}/>
        <div className="external-links">
          <a title="Github" className="external-link" target="_blank" rel="noreferrer" href="https://github.com/JamesAC42/personal-website">
            <TfiGithub />
          </a>
          <a title="LinkedIn" className="external-link" target="_blank" rel="noreferrer" href="https://linkedin.com/in/jamescrovo">
            <RxLinkedinLogo />
          </a>
          <a title="Hatsumei" className="external-link" target="_blank" rel="noreferrer" href="https://hatsumei.pro">
            <PiGearBold />
          </a>
          <div
            onClick={() => setHideLinks(!hideLinks)} 
            className="links-pullout-tab center-child">
            <BiMenu/>
          </div>
        </div>
      </div>
      {
        sections[activeSection]
          ? React.createElement(sections[activeSection])
          : <div>Error: No such section</div>
      }
    </div>
  );
}

export default App;
