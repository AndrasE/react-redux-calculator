import React, { useState } from "react";
import uselocalStorage from "use-local-storage";
import { Counter } from "./components/Counter";
import "./index.css";
import Buttons from "./components/Buttons";
import History from "./components/History";

function App() {
  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light");
  const [showHistory, setShowHistory] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  function toggleShowHistory() {
    setShowHistory((prevState) => !prevState);
  }

  return (
    <div className="App" data-theme={theme}>
      {/* <button onClick={switchTheme}></button> */}
      <Buttons changeTheme={switchTheme} theme={theme} />
      {/* <button> <img src={logo} className="App-logo" alt="logo" /></button> */}
      <History
        showHistory={showHistory}
        toggleShowHistory={toggleShowHistory}
      />
      <Counter toggleShowHistory={toggleShowHistory} />
    </div>
  );
}

export default App;
