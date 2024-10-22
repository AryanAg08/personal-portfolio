import React from "react";
import "./App.css"
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import "rsuite/dist/rsuite.css";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        {/* <Experience></Experience> */}
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  )
}

export default App
