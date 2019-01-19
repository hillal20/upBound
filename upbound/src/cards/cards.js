import React, { Component } from "react";
import axios from "axios";
const cards = require("../cards.json");

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardsStates: [
        "saved",
        "pending",
        "active",
        "paused",
        "expired",
        "declined",
        "terminated"
      ]
    };
  }
  componentDidMount() {
    this.getCards();
  }
  getCards = () => {
    const promise = axios.get("http://localhost:4000/cards");
    promise
      .then(respond => {
        console.log("respond", respond.data);
        this.setState({ cards: respond.data.cards });
      })
      .catch();
  };
  render() {
    //console.log("cards ====> ", cards);
    return (
      <div className="cards">
        {this.state.cards.map((e, i) => {
          console.log("===> this.props", this.props.campaignId);
          if (
            this.props.campaignId === null ||
            this.props.campaignId === undefined ||
            !this.props.campaignId
          ) {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div className="card-detail">
                  {/* <div>Campaign id:{e.campaignId}</div> */}
                  <div> state: {e.currentWorkflow}</div>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
              </div>
            );
          }

          if (e.campaignId === this.props.campaignId) {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="400px" />
                </div>
                <div className="card-detail">
                  {/* <div>Campaign id:{e.campaignId}</div> */}
                  <div> state: {e.currentWorkflow}</div>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
              </div>
            );
          } else if (this.props.campaignId === "all campaigns") {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div className="card-detail">
                  {/* <div>Campaign id:{e.campaignId}</div> */}
                  <div> state: {e.currentWorkflow}</div>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
              </div>
            );
          }
        })}
        <div className="add-card"> add card </div>
      </div>
    );
  }
}
export default Cards;
