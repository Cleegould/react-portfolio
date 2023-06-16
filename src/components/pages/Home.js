import React from 'react';
import myPic from '../assets/IMG_2877.jpeg';
import myBackground from '../assets/modern-banner-with-abstract-low-poly-design_1048-14340.avif';
import project1Image from '../assets/Screenshot 2023-03-14 at 5.12.43 PM.png';
import project2Image from '../assets/Screenshot 2023-05-15 at 6.16.30 PM.png';
import project3Image from '../assets/Screenshot 2023-06-15 at 9.28.33 PM.png';
import project4Image from '../assets/Screenshot 2023-06-15 at 9.33.07 PM.png';
import theDogs from '../assets/IMG_1117.jpeg';
import resume from '../assets/Chris Gould Resume 2018.pdf';

export default function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 35px',
    backgroundImage: `url(${myBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const projectImageStyle = {
    width: '400px',
    height: '200px',
    margin: '20px'
  };

  const aboutContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const aboutImageStyle = {
    width: '300px',
    height: 'auto',
    marginRight: '20px',
  };
  
  const homeStyle = {
    marginTop: '100px',
  };

  return (
    <div style={containerStyle}>
      <div id="home" style={homeStyle}>
        <div>
          <img src={myPic} style={{ width: "25%" }} alt="good looking man" />
        </div>
        <p>
          Welcome to my portfolio. This portfolio is built with React. When you navigate through the pages, you will see a sample of some past class projects that I have worked on throughout this class. There will also be an about me section where you can find out a little more about me. Finally, there will be a contact section. Thanks!
        </p>
      </div>
      <div id="about">
        <h1>About</h1>
        <div className="about-content" style={aboutContentStyle}>
          <img src={theDogs} alt="About Me" style={aboutImageStyle} />
          <div className="about-text">
            <p>
              My name is Chris Gould. I am currently 40 years old and live in Grove City, Ohio. I have been married for almost 17 years and have been with my wife for 22. With her, I have 2 kids: a 13-year-old boy and a 10-year-old girl. I have 3 dogs: Ricky Bobby, Jackie Moon, and Ashley Schaffer. I am currently in Real Estate and also manage a construction company. I enjoy spending the small amount of spare time that I have with my family. My children are both in travel sports, and I get the opportunity to take them from place to place and enjoy watching them do what they love!
            </p>
          </div>
        </div>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <div className="project-images">
          <a href="https://trengland.github.io/MoveMe-Scene/" target="_blank" rel="noopener noreferrer">
            <img src={project1Image} alt="Project 1" style={projectImageStyle} />
          </a>
          <a href="https://github.com/ALTaylor33/grilled-meats-and-treats" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="Project 2" style={projectImageStyle} />
          </a>
          <a href="https://sleepy-falls-23209.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={project3Image} alt="Project 3" style={projectImageStyle} />
          </a>
          <a href="https://texteditorpwahw19.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={project4Image} alt="Project 4" style={projectImageStyle} />
          </a>
        </div>
      </div>
      <div id="resume">
        <h1>Resume</h1>
        <p>
          Download my resume:
          <a href={resume} download>Resume.pdf</a>
        </p>
    
    <footer id="footer">
    <h2>Contact</h2>
    <p>
      For any inquiries or collaborations, please feel free to reach out to me.
    </p>
    {/* Add your contact form or contact information here */}
  </footer>
  </div>
    </div>
  );
}
