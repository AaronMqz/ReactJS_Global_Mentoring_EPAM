import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomeTask1 } from "./components/react_functional_component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeTask1 />
      </header>
    </div>
  );
}

export default App;
