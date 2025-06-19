import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/programming1.jpg";


const projectData = [
  {
    img: Portfolio1,
    title: "Customized NameBoard GiftShop",
    desc: "An e-commerce web application for customizing and ordering personalized name boards.",
    link: "https://github.com/gokulraj3009/Customized_NameBoard_GiftShop",
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I have developed a variety of applications using .NET, React.js, and
        Oracle DB, showcasing my full-stack capabilities in building interactive
        UIs, robust APIs, and efficient data operations. Below are some of my
        works — feel free to explore them.
      </span>

      <div className="cardGrid">
        {projectData.map((project, index) => (
          <div className="projectCard" key={index}>
            <img src={project.img} alt="project" className="projectImg" />
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDesc">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              View Code
            </a>
          </div>
        ))}
      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
