import React from 'react';
import { MdEmail } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import { FaBlog } from 'react-icons/fa';
import './ContactInform.scss';

const linkSpan = (link) => {
  return (
    <span>
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </span>
  );
};

const toggleTooltip = () => {
  const toolTip = document.getElementsByClassName('tooltip')[0];
  console.log(toolTip.style.visibility);
  if (
    toolTip.style.visibility === 'hidden' ||
    toolTip.style.visibility === ''
  ) {
    toolTip.style.visibility = 'visible';
    toolTip.style.opacity = 1;
  } else {
    toolTip.style.visibility = 'hidden';
    toolTip.style.opacity = 0;
  }
};

const copyText = () => {
  getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNodeContents(document.getElementsByClassName('email')[0]);
  getSelection().addRange(range);
  document.execCommand('copy');
  toggleTooltip();
  setTimeout(toggleTooltip, 1500);
};

const ContactInform = () => {
  return (
    <div className="contact-left">
      <p className="contact-title">Contact Us</p>
      <div className="link-container">
        <div className="email-wrapper" onClick={copyText}>
          <MdEmail />
          <span className="email">jhyooooooon@gmail.com</span>
          <span className="tooltip">COPY</span>
        </div>
        <div>
          <a
            href="https://github.com/youngsikwon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGithub />
          </a>
          {linkSpan('github.com/youngsikwon')}
        </div>
        <div>
          <a
            href="https://blog.naver.com/chon_5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBlog />
          </a>
          {linkSpan('blog.naver.com/chon_5')}
        </div>
      </div>
    </div>
  );
};

export default ContactInform;
