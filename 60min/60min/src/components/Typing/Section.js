import React from "react";
import Typing from "./Typing/Typing";
import Newswrap from "./News/Newswrap";
import ContactWrap from "./Contact/ContactWrap";

const Section = () => {
  return (
    <section>
      <Typing />
      <Newswrap />
      <ContactWrap />
    </section>
  );
};

export default Section;
