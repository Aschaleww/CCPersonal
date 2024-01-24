import React from "react";
import PageHeaderContent from "../pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div>
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about_content">
        <h3>Full Stack Developer</h3>
      </div>
    </div>
  );
};

export default Portfolio;
