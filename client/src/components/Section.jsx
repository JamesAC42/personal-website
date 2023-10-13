import React from "react";
import "../stylesheets/Section.css";

const Section = ({ children, centered, scrollable }) => {

  let className = "section-inner";
  if(centered) className += " section-inner-center";
  if(scrollable) className += " section-inner-scrollable";

  return (
    <div className={"section-outer"}>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default Section;
