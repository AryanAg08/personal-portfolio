import React, { Component } from 'react';
import "../styles/Intro.css";
import Typist from 'react-typist';
import EmailRounded from '@mui/icons-material/EmailRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FadeInSection from './FadeInSection';


export class Intro extends Component {
constructor () {
    super();
    this.state = {
        expanded: true,
        activeKey: "1",
        visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
}
handleSelect(eventKey) {
    this.setState({
        activeKey: eventKey,
    });
}

  render() {
    return (
      <div id="intro">

        <Typist avgTypingDelay={120}>
            <span className='intro-title'>
                {"hi, "}
                <span className='intro-name'>{"Aryan "}</span>
                {"this side."}
            </span>
        </Typist>
        <br/>
         
      <FadeInSection>
      <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a Full-Stack Developer. Fascinated with large-scale products and 
            new emerging technologies. Ping me if you wanna talk more about technologies!!
          </div>
          <a
            href="mailto:goyalaryan51@gmail.com"
            className="intro-contact"
          >
            <EmailRounded></EmailRounded>
            {" Say hi!"}
          </a>
          <a
          href="http://resume.aryangoyal.live"
          className='intro-resume'
          >
         <DescriptionRoundedIcon>   </DescriptionRoundedIcon>
             {" Resume! "}
          </a>
          </FadeInSection>
      </div>
    )
  }
}

export default Intro