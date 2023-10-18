import React from 'react';
import {FaCuttlefish,FaNodeJs,FaReact} from "react-icons/fa";
import {SiCplusplus,SiCsharp,SiPhp,SiApache,SiHaskell,SiSass,SiBlazor,SiExpress} from "react-icons/si";
import {RiJavascriptFill} from "react-icons/ri";
import {BiLogoTypescript,BiLogoPostgresql,BiLogoPython,BiLogoTailwindCss} from "react-icons/bi";
import {LiaJava} from "react-icons/lia";
import {DiRedis,DiNginx} from "react-icons/di";
import {IoLogoAngular} from "react-icons/io";
import {PiLinuxLogoFill} from "react-icons/pi";

const skillInfo =  {
  "C": {level: 3, icon: <FaCuttlefish/>},
  "C++": {level: 4, icon: <SiCplusplus/>},
  "JavaScript": {level: 4, icon: <RiJavascriptFill/>},
  "TypeScript": {level: 5, icon: <BiLogoTypescript/>},
  "Java": {level: 3, icon: <LiaJava/>},
  "C#": {level: 4, icon: <SiCsharp/>},
  "PHP": {level: 3, icon: <SiPhp/>},
  "PostgreSQL": {level: 3, icon: <BiLogoPostgresql/>},
  "Redis": {level: 4, icon: <DiRedis/>},
  "Apache": {level: 2, icon: <SiApache/>},
  "Haskell": {level: 2, icon: <SiHaskell/>},
  "Nginx": {level: 3, icon: <DiNginx/>},
  "Python": {level: 3, icon: <BiLogoPython/>},
  "Angular": {level: 3, icon: <IoLogoAngular/>},
  "React": {level: 5, icon: <FaReact/>},
  "Linux": {level: 2, icon: <PiLinuxLogoFill/>},
  "NodeJS": {level: 5, icon: <FaNodeJs/>},
  "Sass": {level: 4, icon: <SiSass/>},
  "Blazor": {level: 3, icon: <SiBlazor/>},
  "TailwindCSS": {level: 1, icon: <BiLogoTailwindCss/>},
  "Express": {level: 4, icon: <SiExpress/>}
}

export default skillInfo;