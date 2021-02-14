import React from 'react';
import './Footer.scss';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer-wrapper">
      <footer>
        <p className="footer-text">
          Copyright (c) {year} JHYOON. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
