import React from "react";
import "./experience.css";

const Experience = () => {
  const timelineData = [
    {
      date: "Oct 19, 2023 – Present",
      title: "System Engineer",
      company: "Tata Consultancy Services",
      description:
        "Working as a full stack developer using .NET, React.js, and Oracle DB, focusing on feature enhancements, bug fixes, and end-to-end application development.",
    },
    
    {
      date: "May 3, 2023 – Aug 3, 2023",
      title: "Intern",
      company: "Virtusa",
      description:
        "Worked as a full stack intern gaining hands-on experience with .NET, React, and Oracle DB.",
    },
  ];

  return (
    <section id="experience">
      <h2 className="experienceTitle">Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timelineItem" key={index}>
            <div className="timelineDot"></div>
            <div className="timelineContent">
              <span className="timelineDate">{item.date}</span>
              <h3 className="timelineRole">
                {item.title} –{" "}
                <span className="timelineCompany">{item.company}</span>
              </h3>
              <p className="timelineDesc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
