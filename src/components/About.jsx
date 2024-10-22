import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Pre-Final Year Student</b> of Computer Science and a
        <a href="https://www.aboutamazon.com/"> Full Stack developer </a>. 
        At the same time, I am   
        <b> Technical Head </b> of <b>JIIT Optica Chapter. </b>
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And like to try editing the game clips.
      </p>
    );

    const tech_stack = [
      "React.js",
      "Node.js",
      "Javascript",
      "MongoDB",
      "Cpp",
      "TypeScript",
      "Github"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Aryan Goyal" src={"https://res.cloudinary.com/ddqorevdz/image/upload/v1727974815/Aryan_Goyal_jkbgep.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
