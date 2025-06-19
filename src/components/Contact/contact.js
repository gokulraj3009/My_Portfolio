import "./contact.css";
import LinkedIn from "../../assets/linkedin1.png";
import Github from "../../assets/github1.png";
import Telephone from "../../assets/telephone.png";
import React, {useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [snackbar, setSnackbar] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submitted",process.env.REACT_APP_EMAILJS_SERVICE_ID);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("EmailJS success response:", result);
        setSnackbar({ message: '✅ Email sent successfully!', type: 'success' });
      setTimeout(() => setSnackbar({ message: '', type: '' }), 3000);
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSnackbar({ message: '❌ Failed to send email. Please try again.', type: 'error' });
      setTimeout(() => setSnackbar({ message: '', type: '' }), 3000);
      });
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/gokulrp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" className="link" />
            </a>
            <a
              href="https://github.com/gokulraj3009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" className="link" />
            </a>
            <a
              href="tel:+919360997116"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Telephone} alt="Telephone" className="link" />
            </a>
          </div>
        </form>
        {snackbar.message && (
          <div className={`snackbar ${snackbar.type}`}>
            {snackbar.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
