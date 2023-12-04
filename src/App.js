import React from 'react';
import logo from './logo.svg';
import uselocalStorage from "use-local-storage";
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {

  // const [theme, setTheme] = uselocalStorage("theme" ? "dark" : "light")


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
