import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const githubLink = 'https://github.com/Cleegould';
  const linkedinLink = 'https://www.linkedin.com/in/christopher-gould-b70500160';
  const stackOverflowLink = 'https://stackoverflow.com/users/1234567';
  const twitterLink = 'https://twitter.com/ncohearnt';

  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '24px',
  };

  return (
    <div className="footer" style={footerStyle}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href={stackOverflowLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
      <a href={twitterLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
