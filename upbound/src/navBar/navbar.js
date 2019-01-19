import React, { Component } from "react";
import axios from "axios";
const campaigns = require("../compaings.json");
const searchImg = require("../pictures/search.jpg");
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignId: "",
      date: "",
      campaigns: []
    };
  }
  componentDidMount() {
    this.getDate();
    this.getCampaigns();
  }
  getCampaigns = () => {
    const promise = axios.get("http://localhost:4000/campaigns");
    promise.then(respond => {
      this.setState({ campaigns: respond.data.campaigns });
    });
  };
  getDate() {
    var date = { currentTime: new Date().toDateString() };

    this.setState({
      date: date
    });
  }

  render() {
    console.log(searchImg);
    return (
      <div className="navBar">
        <div>
          <select
            onChange={event => {
              this.setState({ campaignId: event.target.value });
              this.props.gettingCID(event.target.value);
              // console.log("event target ===> ", event.target.value);
              // console.log("event key  ===> ", event.target);
            }}
          >
            <option value="all campaigns">All campaigns</option>
            {this.state.campaigns.map(e => {
              return (
                <option key={e.id} value={e.id}>
                  {e.campaignName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          today:
          {this.state.date.currentTime}
        </div>
        <div>
          <input type="search" />
        </div>
      </div>
    );
  }
}
export default Navbar;
