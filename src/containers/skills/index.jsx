import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../pageHeaderContent";
import { skillData } from "./utils";
import { Line } from "rc-progress";
import "./style.scss";

const Skills = () => {
  return (
    <div className=" skills" id="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills_content">
        {skillData.map((item, key) => (
          <div key={key} className="skills_content_inner">
            <Animate
              play
              duration={1}
              delay={0.4}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills_content_inner_Title">{item.label}</h3>

              <div>
                {item.data.map((skillItem, key) => (
                  <AnimateKeyframes
                    play
                    duration={0.3}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progress" key={key}>
                      <p> {skillItem.skillName}</p>

                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
