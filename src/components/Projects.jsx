import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
        "Aegis": {
       title: "Aegis Mail ",
        desc:
          "A Platform made for filtering out spam mails and keep you safe.",
        techStack: "Node.js (Express.js), React.js, MongoDB, GmailAPI, FastAPI for ML interface",
        link: "https://github.com/AryanAg08/Aegis",
        open: "https://github.com/AryanAg08/Aegis",
        image: "/Aegis.png"
      },
       "CodeZen": {
       title: "CodeZen: An Online coding platform",
        desc:
          "A web-based coding platform supporting 5+ programming languages online compiler.",
        techStack: "Node.js (Express.js), React.js, MongoDB, GenAI, Docker",
        link: "https://github.com/AryanAg08/CodeZen-",
        open: "https://codezen.aryangoyal.space",
        image: "/CodeZen.png"
      },
       "Quip": {
       title: "Quip: A Collaborative Platform",
       desc:
          "A Platform made for student to study together and stay productive.",
        techStack: "Node.js (Express.js), React.js, MongoDB, ChakraUI, WebRTC",
        link: "https://github.com/AryanAg08/Quip-Study-Together",
        open: "https://github.com/AryanAg08/Quip-Study-Together",
        image: "/Quip.png"
      },
      "Bus Ticket": {
       title: "Real Time Bus Ticket Service",
        desc:
          "A Platform for Real Time Bus Ticket Service showcase.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL, Redis, Docker, Websockets, SendGrid",
        link: "https://github.com/AryanAg08/Bus-ticket-app",
        open: "https://busticket.aryangoyal.space/",
        image: "/BusTicket.png"
      }
    };
    const projects = {
      "Splitwise": {
        desc:
          "A backend application of Splitwise for group transactions.",
        techStack: "GOLang, Gin, MongoDB, RabbitMQ, Redis",
        link: "https://github.com/AryanAg08/Simplified-Splitwise",
      },
       "Catalog-Logger": {
        desc:
          "An application created for storing and verifying catalogs.",
        techStack: "Node.Js (Express.js), React.js, TailwindCSS, MongoDB",
        link: "https://github.com/AryanAg08/catalog-logger",
      },
      "Study Discord Bot": {
        title: "Friendly Bot",
        desc:
          "Engineered a custom Discord bot designed for educational purposes, enabling seamless interaction among users.",
        techStack: "JAVASCRIPT (DISCORD.JS)",
        link: "https://github.com/AryanAg08/Friendly_Bot-V13.6",
      },
       "Loginfy": {
        title: "Loginfy-Auth",
        desc:
          "A NPM package completely focused on simplifying Authentication & let's you customise more freely.",
        techStack: "JAVASCRIPT (NODE.JS)",
        link: "https://github.com/AryanAg08/Loginfy",
      },
      "Eventify": {
        title: "Event Ticket Generator and Validator",
        desc:
          "A Microservice based Platform for Validation and Generating Event Tickets.",
        techStack: "NODE.JS (EXPRESS.JS), REACT.JS, MONGODB",
        link: "https://github.com/AryanAg08/JSCOP-6.0-BACKEND",
       }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
