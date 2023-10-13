import React from 'react';
import Section from '../Section';

const Resume = () => {
  return (
    <Section>
        <object data="/JamesCrovoResume.pdf" type="application/pdf" width="100%" height="100%">
            <p>Unable to display PDF file. <a href="/JamesCrovoResume.pdf">Download</a> instead.</p>
        </object>
    </Section>
  );
};

export default Resume;