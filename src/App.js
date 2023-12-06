import React from "react";
import logo from "./logo.svg";
import uselocalStorage from "use-local-storage";
import { Counter } from "./components/Counter";
import "./index.css";
import Buttons from "./components/Buttons";


function App() {
  
  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      {/* <button onClick={switchTheme}></button> */}
      <Buttons changeTheme={switchTheme} theme={theme}/>
      {/* <button> <img src={logo} className="App-logo" alt="logo" /></button> */}
      <Counter />
    </div>
  );
}

export default App;
