import React from 'react';
import Section from '../Section';
import "../../stylesheets/AboutMe.css";

const AboutMe = () => {
  return (
    <Section scrollable={true}>
      <div className="about-me-container">
        <h1>About Me</h1>
        <h2>Background</h2>
        <p>
            I was born in South Korea and raised in Philadelphia to my adoptive parents. I found programming to be my calling from a young age, when I taught myself Python in 4th grade. Creating simple command line games was a favorite past time of mine. In 6th grade, I began teaching myself web development. The first website I created was for an anti-bullying club that my friend and I created as an after school activity. 
        </p>
        <p>
            In high school, I was able to expedite my full stack education through various friends and colleagues who introduced me to technologies and tools beyond the plain HTML/CSS/JS stack such as react.js, angular.js, node.js, TypeScript, C++, Rust, PHP, and SQL. With these new ideas at my disposal, I began creating much more powerful software such as e-commerce CMS platforms for small businesses, apps to help me with school work, and online games to entertain my friends. It is also in high school where I began my internship with Aegis industrial software as a software engineer, gaining highly valuable exposure to concepts such as Agile, CI/CD, regression and performance testing, mobile development, Scrum, and working with a team of developers to create software from white board to production. I also gained experience with industry standard languages and frameworks such as C#, .NET, Java, and business intelligence.
        </p>
        <p>
            College formalized my computer science knowledge and instilled my love for machine learning concepts. I attended Rensselaer Polytechnic Institute from 2019-2022 and graduated summa cum laude with a Bachelor's in computer science and a minor in economics. College also gave me the opportunity to embark on many projects where I led a team of developers, most notably being NASFAQ, the financial market simulation game that attracted thousands of users and which I still maintain to this day. 
        </p>
        <p>
            Classes such as data mining gave me a peek at the power of data, which we can all now observe through revolutionary language and image models such as ChatGPT and Dall-e. It is in this field where my true passion lies, and my goal is to reenter higher education so that I can someday contribute in a meaningful way to the new era of computing. For now, I lend my skill and expertise to designing and creating beautiful software both professionally and in my own time. 
        </p>
        <h2>Other Interests</h2>
        <p>
            When I am not working on a project in my free time, I will find myself listening to music, playing my guitar, bass, trumpet, or piano, practicing my figure drawing and painting, or, more recently, playing chess. I like playing video games such as Factorio, Minecraft, or OSU when I have the time. I also enjoy cooking and trying out new recipes for my wife, who also enjoys cooking alongside me. 
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;