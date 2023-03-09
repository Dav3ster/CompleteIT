import React from 'react';

import "./styling/footerStyle.css"

const Footer = () => {
  const programmers = [
    {
      name: 'Joshua Toback',
      github: 'https://github.com/JoshuaToback',
      portfolio: 'https://joshuatoback.github.io/ReactPortfolio/',
      linkedin: 'https://www.linkedin.com/in/joshua-toback/',
    },
    {
      name: 'David Stewart',
      github: 'https://github.com/Dav3ster',
      portfolio: 'https://dav3ster.github.io/The-Real-Deal/',
      linkedin: 'https://www.linkedin.com/in/david-stewart-8b046725a/',
    },
    {
      name: 'Mark Turner',
      github: 'https://github.com/TBoneXX',
      portfolio: 'https://portfolio.com/programmer3',
      linkedin: 'https://www.linkedin.com/in/mark-edward-turner/',
    },
  ];

  return (
  <footer className="footer">
    <h3>Developed by the Three Musketeers</h3>
      <div className="programmers">
        {programmers.map(programmer => (
          <div className="programmer" key={programmer.name}>
            <h3 className="programmer__name">{programmer.name}</h3>
            <ul className="programmer__links">
              <li><a href={programmer.github}>Github</a></li>
              <li><a href={programmer.portfolio}>Portfolio</a></li>
              <li><a href={programmer.linkedin}>LinkedIn</a></li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
