import React from 'react';
// import logo from './logo.svg';
import uselocalStorage from "use-local-storage";
import { Counter } from './features/counter/Counter';
import "./index.css"

function App() {

  const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light")

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme)
  }
  
  return (
    <div className="App" data-theme={theme}>
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
        <br></br>
        <button onClick={()=> switchTheme()}></button>
    </div>
  );
}

export default App;
