import React, { Component } from "react";
const cards = require("../cards.json");
class Cards extends Component {
  render() {
    console.log("cards ====> ", cards);
    return (
      <div className="cards">
        {cards.map((e, i) => {
          return (
            <div key={i} className="card">
              <div>campaign id:{e.campaignId}</div>
              <div> current work flow: {e.currentWorkflow}</div>
              <div>
                <img src={e.primaryMediaUrl} width="200px" height="200px" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cards;
