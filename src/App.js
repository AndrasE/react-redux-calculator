import React, { useState } from "react";
import uselocalStorage from "use-local-storage";
import { Counter } from "./components/Counter";
import Buttons from "./components/Buttons";
import History from "./components/History";
import Chuck from "./components/Chuck";
import "./index.css";


function App() {
  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light");
  const [showHistory, setShowHistory] = useState(false);
  const [showChuck, setShowChuck] = useState(false);

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

  return (
    <div className="App" data-theme={theme}>
      {/* <button onClick={switchTheme}></button> */}
      <Buttons
        changeTheme={switchTheme}
        theme={theme}
        toggleShowChuck={toggleShowChuck}
      />
      {/* <button> <img src={logo} className="App-logo" alt="logo" /></button> */}
      <History
        showHistory={showHistory}
        toggleShowHistory={toggleShowHistory}
      />
      <Chuck showChuck={showChuck} toggleShowChuck={toggleShowChuck} />
      <Counter toggleShowHistory={toggleShowHistory} />
    </div>
  );
}

export default App;
