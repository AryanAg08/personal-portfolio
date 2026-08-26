import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Terminal from "./components/Terminal";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import ResumeViewer from "./components/ResumeViewer";
import SayHi from "./components/SayHi";
import "rsuite/dist/rsuite.css";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <Terminal></Terminal>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
      <ResumeViewer />
      <SayHi />
    </div>
  )
}

export default App
