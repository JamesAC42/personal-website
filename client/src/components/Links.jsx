import React from "react";
import "../stylesheets/Links.css";

const Links = ({
  activeSection,
  onSectionChange,
  sections
}) => {
  
  function cleanLink(link) {
    return link.toLowerCase().replace(' ', '');
  }
  
  return (
    
    <div className="pages-container">
      {
        sections.map((link) => 
          <div className="page-link">
            <a
               className={`nav-link ${activeSection === link ? 'active' : ''}`} 
               href={`#${cleanLink(link)}`}
               onClick={() => onSectionChange(link)}>
              {link}
            </a>
          </div>
        )
      }
    </div>
  );
};

export default Links;
