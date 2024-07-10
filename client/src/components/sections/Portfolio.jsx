import React, {useState} from 'react';
import Section from '../Section';
import "../../stylesheets/Portfolio.css";
import {FiLink2} from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai";
import { TfiGithub } from "react-icons/tfi";
import { BsCaretLeftSquareFill,BsCaretRightSquareFill } from "react-icons/bs";
import nasfaqbenchmark from "../../images/portfolio-screenshots/nasfaq/nasfaqbenchmark.png";
import nasfaqhome from "../../images/portfolio-screenshots/nasfaq/nasfaqhome.png";
import nasfaqmarket from "../../images/portfolio-screenshots/nasfaq/nasfaqmarket.png";
import nasfaqmutualfunds from "../../images/portfolio-screenshots/nasfaq/nasfaqmutualfunds.png";
import nasfaqoshiboard from "../../images/portfolio-screenshots/nasfaq/nasfaqoshiboard.png";
import sagecreate from "../../images/portfolio-screenshots/sage/sagecreate.png";
import sageprofile from "../../images/portfolio-screenshots/sage/sageprofile.png";
import chineseroom from "../../images/portfolio-screenshots/chineseroom.png";
import hatsumeihome from "../../images/portfolio-screenshots/hatsumeihome.png";
import redisdemo from "../../images/portfolio-screenshots/redisdemo.png";
import yoyomiboard from "../../images/portfolio-screenshots/yoyomi/yoyomiboard.jpg";
import yoyomireplies from "../../images/portfolio-screenshots/yoyomi/yoyomireplies.jpg";
import yoyomithread from "../../images/portfolio-screenshots/yoyomi/yoyomithread.jpg";
import todotracker from "../../images/portfolio-screenshots/todotracker/todotracker.png";
import todotrackeredit from "../../images/portfolio-screenshots/todotracker/todotrackeredit.png";
import srvsaedit from "../../images/portfolio-screenshots/srvsa/srvsaedit.png";
import srvsa from "../../images/portfolio-screenshots/srvsa/srvsa.png";
import connectfour from "../../images/portfolio-screenshots/connectfour/connectfour.png";
import connectfourrooms from "../../images/portfolio-screenshots/connectfour/connectfourrooms.png";
import fluidstartpage from "../../images/portfolio-screenshots/fluidstartpage.png";
import minesweeper from "../../images/portfolio-screenshots/minesweeper.png";
import musicplayer from "../../images/portfolio-screenshots/musicplayer.png";
import realhangeul from "../../images/portfolio-screenshots/realhangeul.png";
import shovel from "../../images/portfolio-screenshots/shovel.gif";
import dodec from "../../images/portfolio-screenshots/dodec.png";
import buckshot from "../../images/portfolio-screenshots/buckshot/buckshot-input.png";
import buckshotDownload from "../../images/portfolio-screenshots/buckshot/buckshot-download.png";
import buckshotResume from "../../images/portfolio-screenshots/buckshot/buckshot-resume.png";

const images = [buckshot, buckshotResume, buckshotDownload, dodec, shovel,nasfaqhome,nasfaqmarket,nasfaqbenchmark,nasfaqoshiboard,sagecreate,sageprofile,chineseroom,hatsumeihome,redisdemo,musicplayer,fluidstartpage,yoyomiboard,yoyomithread,yoyomireplies,minesweeper,todotracker,todotrackeredit,connectfour,connectfourrooms,realhangeul,srvsa,srvsaedit];

const Portfolio = () => {

  const [activeImage, setActiveImage] = useState(null);

  function scrollImage(dir) {
    if(!activeImage) return;
    const currentIndex = images.indexOf(activeImage);
    let newIndex = currentIndex + dir;
    if(newIndex < 0) newIndex = images.length - 1;
    if(newIndex >= images.length) newIndex = 0;
    setActiveImage(images[newIndex]);
  }

  return (
    <Section scrollable={true}>
      <div className="portfolio-container">
        <h1>Portfolio</h1>

        <h2>Current Projects</h2>

        {
          activeImage ? 
          <div className="image-viewer">
            <div className="image-viewer-inner">
              <div  
                onClick={() => scrollImage(-1)}
                className="scroll-image scroll-left">
                <BsCaretLeftSquareFill/>
              </div>
              <div
                onClick={() => setActiveImage(null)} 
                className="close-image-viewer"><AiFillCloseCircle/></div>
              <img src={activeImage} alt="active image"/>
              <div
                className="scroll-image scroll-right"
                onClick={() => scrollImage(1)}>
                <BsCaretRightSquareFill/>
              </div>
            </div>
          </div> : null
        }

        <h3>buckshot</h3>

        <div className="portfolio-links">
          <a 
            title="buckshot github"
            target="_blank"
            href="https://github.com/JamesAC42/buckshot"><TfiGithub/></a>
        </div>
        <p>
         Buckshot makes applying to jobs easy by simplifying the workflow of resume and cover letter creation - manage, generate, edit, and tailor all the different resumes you need for different companies in one place, then download each one in a clean, professional format with a single click.
        </p>
        <img onClick={() => setActiveImage(buckshot)} src={buckshot} alt="buckshot screenshots"/>
        <div className="portfolio-image-container">
          <img onClick={() => setActiveImage(buckshotResume)} src={buckshotResume} alt="buckshot resume"/>
          <img onClick={() => setActiveImage(buckshotDownload)} src={buckshotDownload} alt="buckshot download" />
        </div>

        <h3>dodec</h3>

        <div className="portfolio-links">
          <a 
            title="dodec github"
            target="_blank"
            href="https://github.com/JamesAC42/dodec"><TfiGithub/></a>
        </div>
        <p>
          Dodec is an LLM assistant that runs in a convenient desktop tool for when you need quick advice or an answer at your fingertips.
        </p>
        <img onClick={() => setActiveImage(dodec)} src={dodec} alt="dodec screenshot"/>

        <h3>shovel</h3>

        <div className="portfolio-links">
          <a 
            title="shovel"
            target="_blank"
            href="https://ovel.sh"><FiLink2/></a>
          <a 
            title="shovel github"
            target="_blank"
            href="https://github.com/JamesAC42/shovel"><TfiGithub/></a>
        </div>
        <p>
          Shovel is a minimalistic productivity tool built around the concept of deep work. It features collaborative rooms for journaling, keeping track of goals and tasks, logging hours worked, and a daily check-in.
        </p>
        <img onClick={() => setActiveImage(shovel)} src={shovel} alt="shovel screenshots"/>

        <h3>nasfaq</h3>
        <div className="portfolio-links">
          <a 
            title="nasfaq"
            target="_blank"
            href="https://nasfaq.biz"><FiLink2/></a>
          <a 
            title="nasfaq github"
            target="_blank"
            href="https://github.com/JamesAC42/nasfaq_client"><TfiGithub/></a>
        </div>
        <p>
          NASFAQ is a stock market simulation game where the financial instruments are coins that track the performance of a YouTube channel. Coin prices are normalized to an index based on how each channel is growing. The site features a market, several leaderboards, mutual funds, a discussion board, chat, gacha prizes and an auction, hats, faux superchats, a betting platform for the fake cash, and more. NASFAQ has thousands of registered users and an active fanbase of hundreds of players.
        </p>
        <img src={nasfaqhome} onClick={() => setActiveImage(nasfaqhome)}alt="nasfaq home page"/>
        <div className="portfolio-image-container">
          <img onClick={() => setActiveImage(nasfaqmarket)} src={nasfaqmarket} alt="nasfaq market page"/>
          <img onClick={() => setActiveImage(nasfaqbenchmark)} src={nasfaqbenchmark} alt="nasfaq benchmark page" />
          <img onClick={() => setActiveImage(nasfaqmutualfunds)} src={nasfaqmutualfunds} alt="nasfaq mutual funds" />
          <img onClick={() => setActiveImage(nasfaqoshiboard)} src={nasfaqoshiboard} alt="nasfaq oshiboard" />
        </div>
        <div className="iframe-container">
          <iframe 
            title="nasfaq demo video"
            height="300px" 
            width="80%" 
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            src="https://www.youtube.com/embed/o-cfx0hCubg">
          </iframe> 
        </div>

        <h2>Past Projects</h2>
        <h3>sage</h3>

        <div className="portfolio-links">
          <a 
            title="sage"
            target="_blank"
            href="https://github.com/JamesAC42/Sage"><TfiGithub/></a>
        </div>
        <p>
          Sage is a web based data visualization and real-time analytics platform for easily creating dashboards, monitoring trends, and generally making information available, digestible, and customizable. It was created as an open source project for a college class on open source development. I led a team of 3 other developers to create it within a semester.
        </p>
        <div className="portfolio-image-container">
          <img onClick={() => setActiveImage(sagecreate)} src={sagecreate} alt="sage creation page"/>
          <img onClick={() => setActiveImage(sageprofile)} src={sageprofile} alt="sage profile page" />
        </div>

        <h3>chineseroom</h3>

        <div className="portfolio-links">
          <a 
            title="nasfaq"
            target="_blank"
            href="https://hatsumei.pro/chineseroom/"><FiLink2/></a>
          <a 
            title="chineseroom"
            target="_blank"
            href="https://github.com/JamesAC42/chinese-room"><TfiGithub/></a>
        </div>
        <p>
          Final project for a cognitive science class I took my sophomore year at RPI. Essay and game based on Searle's Chinese Room experiment, meant to simulate the experience of the person inside the Chinese Room.
        </p>
        <img onClick={() => setActiveImage(chineseroom)} src={chineseroom} alt="chinese room game" />

        <h3>hatsumei</h3>

        <div className="portfolio-links">
          <a 
            title="hatsumei"
            target="_blank"
            href="https://hatsumei.pro"><FiLink2/></a>
        </div>
        <p>
          Hatsumei is where I host small and simple side projects.
        </p>
        <img onClick={() => setActiveImage(hatsumeihome)} src={hatsumeihome} alt="hatsumei home page"/>

        <h3>redisdemo</h3>

        <div className="portfolio-links">
          <a 
            title="redis demo"
            target="_blank"
            href="https://github.com/JamesAC42/redis_demo"><TfiGithub/></a>
        </div>
        <p>
          Small app to demonstrate the functionality of redis for an open source class. I used it to teach the class how to implement various redis data structures in a real application.
        </p>
        <img onClick={() => setActiveImage(redisdemo)} src={redisdemo} alt="redis demo"/>

        <h3>musicplayer</h3>
        
        <div className="portfolio-links">
          <a 
            title="musicplayer"
            target="_blank"
            href="https://github.com/JamesAC42/music_player"><TfiGithub/></a>
        </div>
        <p>
          React application to scan locally hosted music and functions as a music streaming platform to create playlists and listen.
        </p>
        <img onClick={() => setActiveImage(musicplayer)} src={musicplayer} alt="music player"/>

        <h3>startpage</h3>

        <div className="portfolio-links">
          <a 
            title="startpage"
            target="_blank"
            href="https://github.com/JamesAC42/startpage"><TfiGithub/></a>
        </div>
        <p>
          Startpage for a new browser tab. Has weather, news, and favorites.
        </p>
        <img onClick={() => setActiveImage(fluidstartpage)} src={fluidstartpage} alt="start page"/>

        <h3>yoyomi</h3>

        <div className="portfolio-links">
          <a 
            title="yoyomi"
            target="_blank"
            href="https://hatsumei.pro/yoyomi/"><FiLink2/></a>
          <a 
            title="yoyomi github"
            target="_blank"
            href="https://github.com/JamesAC42/yoyomi"><TfiGithub/></a>
        </div>
        <p>
          Yoyomi is a custom client for image boards. It has a more appealing design than most and is easy to navigate discreetly.
        </p>
        
        <img onClick={() => setActiveImage(yoyomiboard)} src={yoyomiboard} alt="yoyomi board"/>
        <div className="portfolio-image-container">
          <img onClick={() => setActiveImage(yoyomithread)} src={yoyomithread} alt="yoyomi thread"/>
          <img onClick={() => setActiveImage(yoyomireplies)} src={yoyomireplies} alt="yoyomi replies" />
        </div>

        <h3>minesweeper</h3>

        <div className="portfolio-links">
          <a 
            title="minesweeper"
            target="_blank"
            href="https://hatsumei.pro/minesweeper/"><FiLink2/></a>
          <a 
            title="minesweeper github"
            target="_blank"
            href="https://github.com/JamesAC42/minesweeper"><TfiGithub/></a>
        </div>
        <p>
          Minesweeper game
        </p>
        
        <img onClick={() => setActiveImage(minesweeper)} src={minesweeper} alt="minesweeper"/>

        <h3>todotracker</h3>

        <div className="portfolio-links">
          <a 
            title="todotracker github"
            target="_blank"
            href="https://github.com/JamesAC42/todoTracker"><TfiGithub/></a>
        </div>
        <p>
          todoTracker is an app that keeps track of tasks for multiple people at once, updating in real time to make the completion of tasks competitive and fun.
        </p>
        
        <img onClick={() => setActiveImage(todotracker)} src={todotracker} alt="todotracker main"/>
        <img onClick={() => setActiveImage(todotrackeredit)} src={todotrackeredit} alt="todotracker edit"/>

        <h3>connectfour</h3>

        <div className="portfolio-links">
          <a 
            title="connectfour github"
            target="_blank"
            href="https://github.com/JamesAC42/connect-four"><TfiGithub/></a>
        </div>
        <p>
          Online connect four game with rooms.
        </p>
        
        <img onClick={() => setActiveImage(connectfour)} src={connectfour} alt="connect four game"/>
        <img onClick={() => setActiveImage(connectfourrooms)} src={connectfourrooms} alt="connect four rooms"/>

        <h3>realhangeul</h3>
        
        <div className="portfolio-links">
          <a 
            title="realhangeul"
            target="_blank"
            href="https://hatsumei.pro/realhangeul/"><FiLink2/></a>
          <a 
            title="realhangeul github"
            target="_blank"
            href="https://github.com/JamesAC42/real-hangeul"><TfiGithub/></a>
        </div>
        <p>
          RealHangeul is a tool to help learn the Korean alphabet (Hangeul) by drilling each character and their sounds.
        </p>
        
        <img onClick={() => setActiveImage(realhangeul)} src={realhangeul} alt="real hangeul"/>

        <h3>srvsa</h3>
        
        <div className="portfolio-links">
          <a 
            title="srvsa github"
            target="_blank"
            href="https://github.com/JamesAC42/srvsa"><TfiGithub/></a>
        </div>
        <p>
          SRVSA stands for Spaced Repetition Vocabulary Study Aid. I created this in high school as a tool to help learn vocabulary words and other material that works well in flash card form. The spaced repetition process was inspired by programs such as Anki.
        </p>
        
        <img onClick={() => setActiveImage(srvsa)} src={srvsa} alt="srvsa"/>
        <img onClick={() => setActiveImage(srvsaedit)} src={srvsaedit} alt="srvsa edit"/>
      </div>
    </Section>
  );
};

export default Portfolio;