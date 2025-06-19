import React from "react";
import "./intro.css";
import Me from "../../assets/me.jpg";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Gokulraj P</span> <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I am a Full-stack developer specializing in .NET, React.js and Oracle{" "}
          <br />
          with a passion for building scalable, user-centric web applications.
        </p>
        <div className="btnContainer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button className="btn">
              <img src={btnImg} alt="Hire" className="btnImg" />
              Collaborate With Me
            </button>
          </Link>{" "}
          <a href="/Gokulraj_P_Resume.pdf" download className="btn resumeBtn">
            Resume
          </a>
        </div>
      </div>
      <img src={Me} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
