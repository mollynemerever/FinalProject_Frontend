import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome />
        </header>
      </div>
    );
  }
}
