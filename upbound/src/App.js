import React, { Component } from "react";
import "./css/App.css";
import NavBar from "./navBar/navbar";
import Cards from "./cards/cards";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>welcome to react app</h1>
        <NavBar />
        <Cards />
      </div>
    );
  }
}

export default App;
