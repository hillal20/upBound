import React, { Component } from "react";
const campaigns = require("../compaings.json");
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignId: ""
    };
  }
  render() {
    return (
      <div className="navBar">
        <h3>navBar</h3>
        <select
          onChange={event => {
            this.setState({ campaignId: event.target.value });
            this.props.gettingCID(event.target.value);
            // console.log("event target ===> ", event.target.value);
            // console.log("event key  ===> ", event.target);
          }}
        >
          <option>All campaigns</option>
          {campaigns.map(e => {
            return (
              <option key={e.id} value={e.id}>
                {e.campaignName}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default Navbar;
