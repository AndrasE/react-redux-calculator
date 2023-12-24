import React, { useState } from "react";
import uselocalStorage from "use-local-storage";
import { Counter } from "./components/Counter";
import Buttons from "./components/Buttons";
import History from "./components/History";
import Chuck from "./components/Chuck";
import About from "./components/About";
import MoreAbout from "./components/MoreAbout";
import "./index.css";

function App() {
  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light");
  const [showHistory, setShowHistory] = useState(false);
  const [showChuck, setShowChuck] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  function toggleShowHistory() {
    setShowHistory((prevState) => !prevState);
  }

  function toggleShowChuck() {
    setShowChuck((prevState) => !prevState);
  }

  function toggleShowAbout() {
    setShowAbout((prevState) => !prevState);
  }

  function toggleShowMoreAbout() {
    setShowMoreAbout((prevState) => !prevState);
  }

  return (
    <div className="App" data-theme={theme}>
      <Buttons
        changeTheme={switchTheme}
        theme={theme}
        toggleShowChuck={toggleShowChuck}
        toggleShowAbout={toggleShowAbout}
      />
      <Counter toggleShowHistory={toggleShowHistory} />
      <History
        showHistory={showHistory}
        toggleShowHistory={toggleShowHistory}
      />
      <Chuck showChuck={showChuck} toggleShowChuck={toggleShowChuck} />
      <About
        showAbout={showAbout}
        toggleShowAbout={toggleShowAbout}
        toggleShowMoreAbout={toggleShowMoreAbout}
      />
      <MoreAbout
        showMoreAbout={showMoreAbout}
        toggleShowMoreAbout={toggleShowMoreAbout}
      />
    </div>
  );
}

export default App;
