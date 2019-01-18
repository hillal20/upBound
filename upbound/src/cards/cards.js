import React, { Component } from "react";
const cards = require("../cards.json");
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //console.log("cards ====> ", cards);
    return (
      <div className="cards">
        {cards.map((e, i) => {
          console.log("===> this.props", this.props.campaignId);
          if (e.campaignId === this.props.campaignId) {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div>campaign id:{e.campaignId}</div>
                <div> current work flow: {e.currentWorkflow}</div>
                <div>{e.cardDescription}</div>
              </div>
            );
          } else if (this.props.campaignId === "all campaigns") {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div>campaign id:{e.campaignId}</div>
                <div> current work flow: {e.currentWorkflow}</div>
                <div>{e.cardDescription}</div>
              </div>
            );
          }
        })}
        <div className="card"> add card </div>
      </div>
    );
  }
}
export default Cards;
