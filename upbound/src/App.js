import React, { Component } from "react";
import "./css/App.css";
import NavBar from "./navBar/navbar";
import Cards from "./cards/cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignId: ""
    };
  }
  gettingCID = x => {
    this.setState({ campaignId: x });
  };
  render() {
    return (
      <div className="App container">
        <div className="row">
          <h1>Dashboard</h1>
          <NavBar gettingCID={this.gettingCID} />
          <Cards campaignId={this.state.campaignId} />
        </div>
      </div>
    );
  }
}

export default App;
