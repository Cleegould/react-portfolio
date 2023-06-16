import React from 'react';
import myPic from "/Users/christopher/Desktop/20HW/react-portfolio/src/assets/IMG_2877.jpeg";
import myBackground from '/Users/christopher/Desktop/20HW/react-portfolio/src/assets/modern-banner-with-abstract-low-poly-design_1048-14340.avif';
import project1Image from '/Users/christopher/Desktop/20HW/react-portfolio/src/assets/Screenshot 2023-03-14 at 5.12.43 PM.png';
import project2Image from '/Users/christopher/Desktop/20HW/react-portfolio/src/assets/Screenshot 2023-05-15 at 6.16.30 PM.png';
import project3Image from '/Users/christopher/Desktop/20HW/react-portfolio/src/assets/Screenshot 2023-05-15 at 6.16.30 PM.png';
import project4Image from '/Users/christopher/Desktop/20HW/react-portfolio/src/assets/Screenshot 2023-05-15 at 6.16.30 PM.png';


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
    width: '400px', // Adjust the width to your desired size
    height: '200px', // Adjust the height to your desired size
  };

  return (
    <div style={containerStyle}>
      <div id="home">
        <h1>Chris' Portfolio Page</h1>
        <div>
          <img src={myPic} style={{ width: "25%" }} alt="good looking man" />
        </div>
        <p>
          Welcome to my portfolio. This portfolio is built with React. When you navigate through the pages, you will see a sample of some past class projects that I have worked on throughout this class. There will also be an about me section where you can find out a little more about me. Finally, there will be a contact section. Thanks!
        </p>
      </div>
      <div id="about">
        <h1>About</h1>
        <p>
          My name is Chris Gould. I am currently 40 years old and live in Grove City, Ohio. I have been married for almost 17 years and have been with my wife for 22. With her, I have 2 kids: a 13-year-old boy and a 10-year-old girl. I have 3 dogs: Ricky Bobby, Jackie Moon, and Ashley Schaffer. I am currently in Real Estate and also manage a construction company. I enjoy spending the small amount of spare time that I have with my family. My children are both in travel sports, and I get the opportunity to take them from place to place and enjoy watching them do what they love!
        </p>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <div className="project-images">
          <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
            <img src={project1Image} alt="Project 1" style={projectImageStyle} />
          </a>
          <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="Project 2" style={projectImageStyle} />
          </a>
          <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer">
            <img src={project3Image} alt="Project 3" style={projectImageStyle} />
          </a>
          <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
            <img src={project4Image} alt="Project 4" style={projectImageStyle} />
          </a>
        </div>
      </div>
      <div id="contact">
        <h1>Contact</h1>
        <p>
          {/* Add your contact information or contact form here */}
        </p>
      </div>
    </div>
  );
}
