import React from 'react';
import Section from '../Section';
import "../../stylesheets/Resume.css";

const Resume = () => {
  return (
    <Section centered={true}>
        <div className="resume-container center-child">
            <object data="/JamesCrovoResume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Unable to display PDF file. <a href="/JamesCrovoResume.pdf">Download</a> instead.</p>
            </object>
        </div>
    </Section>
  );
};

export default Resume;