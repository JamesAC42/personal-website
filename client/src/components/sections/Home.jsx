import React from 'react';
import Section from '../Section';
import "../../stylesheets/Home.css";
import headshot from "../../images/headshot.jpg";

const Home = () => {
  return (
    <Section centered={true}>
        <div className="name-header">
            James Crovo
        </div>
        <div className="subheader">
            Software Developer
        </div>
        <div className="profile-outer center-child">
            <img alt="headshot" src={headshot}/>
        </div>
        <div className="blurb">
            <p>
                Hello! I'm James, a software developer with a deep-rooted passion for full-stack engineering, AI, and machine learning. Beginning my professional journey at Aegis Software, I furthered my expertise with a Computer Science degree from Rensselaer Polytechnic Institute and now contribute at Epic Systems. My technical proficiency is evident in both professional capacities and self-developed projects that attract thousands of users. An avid learner, I make sure to keep myself updated with the latest in web tech and machine learning advancements. I am currently enrolled in Georgia Tech's Computer Science Master's program. When I'm not working on a project or learning something new, I spend my time raising my son and keeping up with my hobbies including playing the guitar, bass, painting, and cooking.
            </p>
        </div>
    </Section>
  );
};

export default Home;