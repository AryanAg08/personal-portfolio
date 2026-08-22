import React, { Component } from "react";
import "../styles/Terminal.css";
import FadeInSection from "./FadeInSection";

const USER = "visitor@aryan.dev";
const PROMPT = `${USER}:~$`;

// Link helper
const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const HELP = (
  <div>
    <div className="t-line">Available commands:</div>
    <div className="t-grid">
      <span className="t-cmd">whoami</span>
      <span>who is this guy?</span>
      <span className="t-cmd">about</span>
      <span>a quick intro</span>
      <span className="t-cmd">experience</span>
      <span>where I've worked</span>
      <span className="t-cmd">projects</span>
      <span>things I've built</span>
      <span className="t-cmd">skills</span>
      <span>my tech stack</span>
      <span className="t-cmd">contact</span>
      <span>get in touch</span>
      <span className="t-cmd">socials</span>
      <span>find me online</span>
      <span className="t-cmd">resume</span>
      <span>open my resume</span>
      <span className="t-cmd">clear</span>
      <span>clear the screen</span>
      <span className="t-cmd">help</span>
      <span>show this menu</span>
    </div>
    <div className="t-dim">psst… there are a few hidden commands too 👀</div>
  </div>
);

const COMMANDS = {
  help: () => HELP,
  whoami: () => (
    <div>
      <div>
        <span className="t-accent">Aryan Goyal</span> — Software Development
        Engineer @ <span className="t-accent">GrexaAI</span>
      </div>
      <div className="t-dim">Go · microservices · Kubernetes · backend systems</div>
    </div>
  ),
  about: () => (
    <div>
      CS grad and full-time Software Developer{" "}
      <span className="t-accent">@ GrexaAI</span> who lives in the backend.
      Lately I'm deep in <span className="t-accent">Go</span>, microservices and
      cloud-native platforms — building AI chat agents by day and side projects
      by night. Type <span className="t-cmd">projects</span> or{" "}
      <span className="t-cmd">experience</span> to dig in.
    </div>
  ),
  experience: () => (
    <div>
      <div>
        <span className="t-accent">GrexaAI</span> — SDE{" "}
        <span className="t-dim">(Jun 2026 – present)</span>
      </div>
      <div className="t-indent">
        Backend microservices for a B2B CRM + comms platform; owns the AI Chat
        Agent Service (LLM tool-calling, agent memory, human-in-the-loop).
      </div>
      <div>
        <span className="t-accent">GrexaAI</span> — SDE Intern{" "}
        <span className="t-dim">(Jan 2026 – Jun 2026)</span>
      </div>
      <div className="t-indent">
        Built LLM conversation flows, agent tools, workers & cron jobs in Go.
      </div>
      <div>
        <span className="t-accent">VOAT Network</span> — Backend Intern{" "}
        <span className="t-dim">(Jun 2025 – Aug 2025)</span>
      </div>
      <div>
        <span className="t-accent">Mentorsity</span> — Backend Intern{" "}
        <span className="t-dim">(Jun 2024 – Oct 2024)</span>
      </div>
    </div>
  ),
  projects: () => (
    <div>
      <div>
        <span className="t-accent">→ LogSense</span> — microservices platform on
        Kubernetes ·{" "}
        <A href="https://logsense.cloud">logsense.cloud</A>
      </div>
      <div>
        <span className="t-accent">→ A.R.Y.A.</span> — autonomous personal AI
        assistant (Go + Flutter)
      </div>
      <div>
        <span className="t-accent">→ CodeZen</span> — online multi-language coding
        platform ·{" "}
        <A href="https://codezen.aryangoyal.space">codezen.aryangoyal.space</A>
      </div>
      <div>
        <span className="t-accent">→ Aegis</span> — spam-filtering mail platform
        with an ML interface
      </div>
      <div className="t-dim">
        …scroll down to the projects section for the rest.
      </div>
    </div>
  ),
  skills: () => (
    <div>
      <div>
        <span className="t-key">languages </span> Go · JavaScript · TypeScript ·
        C++
      </div>
      <div>
        <span className="t-key">backend   </span> Node.js · Gin · gRPC · REST
      </div>
      <div>
        <span className="t-key">data      </span> MongoDB · Redis · PostgreSQL ·
        RabbitMQ
      </div>
      <div>
        <span className="t-key">cloud     </span> Docker · Kubernetes · Helm · GCP
      </div>
    </div>
  ),
  contact: () => (
    <div>
      <div>
        email ·{" "}
        <A href="mailto:goyalaryan51@gmail.com">goyalaryan51@gmail.com</A>
      </div>
      <div className="t-dim">…or just run `socials`.</div>
    </div>
  ),
  socials: () => (
    <div>
      <div>
        github ·{" "}
        <A href="https://github.com/AryanAg08">github.com/AryanAg08</A>
      </div>
      <div>
        linkedin ·{" "}
        <A href="https://www.linkedin.com/in/aryan-goyal-70141b1b8/">
          in/aryan-goyal
        </A>
      </div>
    </div>
  ),
  resume: () => {
    window.open(
      "https://drive.google.com/file/d/10sK-YpsGcYtCG4U2O8QloCz06ExEvtqe/view?usp=sharing",
      "_blank",
      "noopener"
    );
    return <div className="t-dim">Opening resume in a new tab… 📄</div>;
  },

  // ---- hidden / easter eggs ----
  sudo: () => (
    <div className="t-warn">
      [sudo] password for visitor:{" "}
      <span className="t-dim">nice try — you don't have root here 😏</span>
    </div>
  ),
  "sudo rm -rf /": () => (
    <div className="t-warn">whoa there. let's keep the filesystem alive 🙃</div>
  ),
  coffee: () => (
    <pre className="t-art">{`      ( (
       ) )
    ........
    |      |]   brewing... ☕  fueled by caffeine & curl
    \\      /
     \`----'`}</pre>
  ),
  ls: () => (
    <div className="t-dim">
      about  experience  projects  skills  contact  resume
    </div>
  ),
  pwd: () => <div className="t-dim">/home/visitor/aryan-portfolio</div>,
  date: () => <div className="t-dim">{new Date().toString()}</div>,
  neofetch: () => (
    <div>
      <div>
        <span className="t-accent">aryan</span>@
        <span className="t-accent">portfolio</span>
      </div>
      <div className="t-dim">-----------------</div>
      <div>
        <span className="t-key">OS   </span> DeveloperOS (dark edition)
      </div>
      <div>
        <span className="t-key">Shell</span> aryan-sh 1.0
      </div>
      <div>
        <span className="t-key">Uptime</span> shipping since 2024
      </div>
      <div>
        <span className="t-key">Theme</span> ink + aqua
      </div>
    </div>
  ),
};

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [
        {
          type: "system",
          value: (
            <div>
              <div className="t-accent">aryan-sh v1.0</div>
              <div className="t-dim">
                Welcome! This is an interactive shell. Type{" "}
                <span className="t-cmd">help</span> and hit Enter to get started.
              </div>
            </div>
          ),
        },
      ],
      input: "",
      cmdHistory: [],
      histIndex: -1,
    };
    this.inputRef = React.createRef();
    this.bodyRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.bodyRef.current) {
      this.bodyRef.current.scrollTop = this.bodyRef.current.scrollHeight;
    }
  }

  focusInput = () => {
    if (this.inputRef.current) this.inputRef.current.focus();
  };

  runCommand = (raw) => {
    const cmd = raw.trim();
    const lower = cmd.toLowerCase();

    if (lower === "clear") {
      this.setState({ lines: [] });
      return;
    }

    let output;
    if (cmd === "") {
      output = null;
    } else if (COMMANDS[lower]) {
      output = COMMANDS[lower]();
    } else if (lower.startsWith("echo ")) {
      output = <div>{cmd.slice(5)}</div>;
    } else {
      output = (
        <div>
          <span className="t-warn">command not found:</span> {cmd}
          <span className="t-dim">
            {" "}
            — type <span className="t-cmd">help</span> for options.
          </span>
        </div>
      );
    }

    this.setState((prev) => ({
      lines: [
        ...prev.lines,
        { type: "input", value: cmd },
        ...(output !== null ? [{ type: "output", value: output }] : []),
      ],
    }));
  };

  handleKeyDown = (e) => {
    const { cmdHistory, histIndex, input } = this.state;

    if (e.key === "Enter") {
      this.runCommand(input);
      this.setState({
        input: "",
        cmdHistory: input.trim() ? [...cmdHistory, input] : cmdHistory,
        histIndex: -1,
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const idx =
        histIndex === -1 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      this.setState({ histIndex: idx, input: cmdHistory[idx] });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIndex === -1) return;
      const idx = histIndex + 1;
      if (idx >= cmdHistory.length) {
        this.setState({ histIndex: -1, input: "" });
      } else {
        this.setState({ histIndex: idx, input: cmdHistory[idx] });
      }
    }
  };

  render() {
    const { lines, input } = this.state;
    return (
      <div id="terminal">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ try me</span>
          </div>
          <div className="terminal-window" onClick={this.focusInput}>
            <div className="terminal-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">aryan-sh — bash</span>
            </div>
            <div className="terminal-body" ref={this.bodyRef}>
              {lines.map((line, i) => {
                if (line.type === "input") {
                  return (
                    <div className="terminal-row" key={i}>
                      <span className="terminal-prompt">{PROMPT}</span>
                      <span className="terminal-echo">{line.value}</span>
                    </div>
                  );
                }
                return (
                  <div className="terminal-out" key={i}>
                    {line.value}
                  </div>
                );
              })}
              <div className="terminal-row terminal-active">
                <span className="terminal-prompt">{PROMPT}</span>
                <input
                  ref={this.inputRef}
                  className="terminal-input"
                  value={input}
                  spellCheck="false"
                  autoComplete="off"
                  autoCapitalize="off"
                  aria-label="terminal input"
                  onChange={(e) => this.setState({ input: e.target.value })}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Terminal;
