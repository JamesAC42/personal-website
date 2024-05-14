import React from 'react';
import Section from '../Section';
import "../../stylesheets/Skills.css";
import skillInfo from './SkillInfo';
import {MdLightbulb, MdLightbulbOutline} from "react-icons/md";

const SkillCard = ({children, name, currentSkill, onSkillChange}) => {
    const [hover,setHover] = React.useState(false);
    return (
        <div
            title={name}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            onClick={() => onSkillChange(name)}
            className={"skillcard center-child" + 
              ((hover || currentSkill === name) ? " skillcard-hover" : "")}>
            <div className="skillcard-inner"></div>
            <div className="skillcard-background"></div>
            {children}
        </div>
    )
}

const SkillLevel = ({level}) => {
  const bulbs = [];
  for(let i = 0; i < 5; i++) {
    if(i < level) {
      bulbs.push(<MdLightbulb/>)
    } else {
      bulbs.push(<MdLightbulbOutline/>)
    }
  }
  return (
    <div className="bulbs-outer">
      {bulbs}
    </div>
  )
}

const Skills = () => {

  const [currentSkill, setCurrentSkill] = React.useState("TypeScript");
  const [currentBuffer, setCurrentBuffer] = React.useState("TypeScript");
  const [nextSkill, setNextSkill] = React.useState(null);
  const [sliding, setSliding] = React.useState(false);

  const transitionSkill = (skill) => {

    if(skill === currentSkill) return;
    setNextSkill(skill);
    setSliding(true);
    setCurrentBuffer(skill);

    setTimeout(() => {
      setCurrentSkill(skill);
      setNextSkill(null);
      setSliding(false);
    }, 300);

  }

  return (
    <Section centered={true}>
        <div className="skills-section">
            <h1>Skills</h1>
            <div className="skills-info-container">
              <div className={"skills-info-container-inner " + (sliding ? "sliding" : "")}>
                <div className="skills-info-next">
                  <div className="current-skill-name">{nextSkill}</div>
                  {
                    nextSkill ?
                    <SkillLevel level={skillInfo[nextSkill].level}/>
                    : null
                  }
                </div>
                <div className="skills-info-current">
                  <div className="current-skill-name">{currentSkill}</div>
                  <SkillLevel level={skillInfo[currentSkill].level}/>
                </div>
              </div>
            </div>
            <div className="skills-container">
                {
                  Object.keys(skillInfo).map(skill => 
                    <SkillCard 
                      name={skill}
                      currentSkill={currentBuffer}
                      onSkillChange={(newSkill) => transitionSkill(newSkill)}>
                        {skillInfo[skill].icon}
                      </SkillCard>  
                  )
                }
            </div>
        </div>
    </Section>
  );
};

export default Skills;