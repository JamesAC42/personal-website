import React from 'react';
import Section from '../Section';
import "../../stylesheets/Portfolio.css";

const Portfolio = () => {
  return (
    <Section scrollable={true}>
      <div className="portfolio-container">
        <h1>Portfolio</h1>

        <h2>Current Projects</h2>

        <h3>nasfaq</h3>
        <iframe 
          height="300px" 
          width="80%" 
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
          src="https://www.youtube.com/embed/o-cfx0hCubg">
        </iframe> 

        <h2>Past Projects</h2>
        <h3>sage</h3>
        <h3>chineseroom</h3>
        <h3>hatsumei</h3>
        <h3>redisdemo</h3>
        <h3>musicplayer</h3>
        <h3>yoyomi</h3>
        <h3>startpage</h3>
        <h3>minesweeper</h3>
        <h3>todotracker</h3>
        <h3>srvsa</h3>
        <h3>connectfour</h3>
        <h3>realhangeul</h3>
      </div>
    </Section>
  );
};

export default Portfolio;