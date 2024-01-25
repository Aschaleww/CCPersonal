import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../pageHeaderContent";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./style.scss";

const personalDetail = [
  {
    label: "Name:",
    value: "Aschalew Bekele Kebede",
  },
  {
    label: "Email:",
    value: "Aschalew.kebedee@gmail.com",
  },
  {
    label: "Address:",
    value: " Maryland Silver Spring United States",
  },
  {
    label: "Phone:",
    value: "(621)-233-9818",
  },
];
const jobSummary =
  "Driven Java developer with a deep focus on Java, Spring Framework, Spring Boot, and React. Specializing in crafting scalable solutions, I thrive on collaborative challenges. Let's ignite innovation together and turn visions into exceptional realities";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        // icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>we are software Developer here</p>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInfo">Personal Information</h3>
            {personalDetail.map((item, i) => (
              <ul key={i}>
                <li>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              </ul>
            ))}
          </Animate>
        </div>

        <div className="about_content_serviceWrapper">
          {/* <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          > */}
          <div className="about_content_serviceWrapper_inner">
            <div>
              <FaDev size={60} color="var(--yellow-theme-sub-text-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase
                size={60}
                color="var(--yellow-theme-sub-text-color)"
              />
            </div>
            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          {/* </Animate> */}
        </div>
      </div>
    </section>
  );
};

export default About;
