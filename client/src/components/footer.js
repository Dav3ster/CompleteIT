import React from 'react';

import "./styling/footerStyle.css"

function Footer() {
  return (
    <div className="footer-container">
      <h3>Developed by the Three Musketeers</h3>
      <div className="footer-box">
        <img src="https://image.flaticon.com/icons/png/128/2010/2010528.png" alt="Code icon" />
        <h3>Code</h3>
        <p>Passionate about writing clean, efficient and maintainable code.</p>
      </div>
      <div className="footer-box">
        <img src="https://image.flaticon.com/icons/png/128/2947/2947871.png" alt="Coffee icon" />
        <h3>Coffee</h3>
        <p>Believes coffee is the fuel that powers great code.</p>
      </div>
      <div className="footer-box">
        <img src="https://image.flaticon.com/icons/png/128/2991/2991757.png" alt="Keyboard icon" />
        <h3>Learn</h3>
        <p>Always looking to learn new technologies and improve skills.</p>
      </div>
    </div>
  );
}

export default Footer;
