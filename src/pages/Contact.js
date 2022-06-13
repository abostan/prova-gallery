import React from "react";
import Page from "../components/Page";
import "../styles.css";
import ContactInfo from "../components/ContactInfo";

const Contact = (props) => (
  <Page {...props}>
    <div>
      <h1>Contact Me</h1>
      <p>
        If you are interested in showing or purchasing my work, please reach out
        to me and I'd be happy to provide additional details. My contact
        information is below.
      </p>
    </div>
    <footer className="main">
      <ContactInfo />
    </footer>
  </Page>
);

export default Contact;
