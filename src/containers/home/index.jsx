import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const hadleNavgation = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home_me">
        <h1>
          Hello, I'm Aschalew <br />
          Full Stack Java Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home_hire">
          <button className="home_hire-me" onClick={hadleNavgation}>
            Hire Me
          </button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
