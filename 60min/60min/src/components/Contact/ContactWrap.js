import React from "react";
import "./ContactWrap.scss";
import ContactInform from "./ContactInform";
import ContactMail from "./ContactMail";

const ContactWrap = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <ContactInform />
        <ContactMail />
      </section>
    </div>
  );
};

export default ContactWrap;
