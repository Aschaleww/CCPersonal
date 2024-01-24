// Resume.jsx
import React from "react";
import PageHeaderContent from "../pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./util"; // Adjust the path accordingly

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        <div className="timeline_experience">
          <h3 className="timeline_experience_header"> Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-sub-text-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical_timeline_element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-sub-text-color)",
                }}
                // date="202 - present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-sub-text-color)",
                }}
              >
                <div className="vertical_timeline_element_title_wrapper">
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <h4>{item.subtitle}</h4>
                </div>

                <div>
                  <h3 className="kk">{item.year}</h3>
                </div>

                <p className="vertical_timeline_element_description">
                  {item.description}
                </p>
                <h1 className="pro">Project</h1>
                <div>
                  <li className="item">{item.Project1}</li>
                </div>
                <div>
                  <li className="item">{item.project2}</li>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline_education">
          <h3 className="timeline_education_header">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-sub-text-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline_experience_vertical_timeline_element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-sub-text-color)",
                }}
                // date="2023 - present"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-sub-text-color)",
                }}
              >
                <div className="vertical_timeline_element_title_wrapper">
                  <h3>{item.degree}</h3>
                  <h4>{item.school}</h4>
                </div>
                <div>
                  <h4>{item.year}</h4>
                </div>
                <p className="vertical_timeline_element_description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
