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
      .catch(err => {
        console.log(err);
      });
  };
  changingState = (title, state) => {
    console.log("id===>", title);
    const promise = axios.post(`http://localhost:4000/cards/${title}`, {
      state
    });
    promise
      .then(msg => {
        console.log(msg);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
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
                  {/* <div>C T:{e.cardTitle}</div> */}
                  state:
                  <select
                    onChange={x => {
                      this.changingState(e.cardTitle, x.target.value);
                      //console.log("e", e.target.value);
                    }}
                  >
                    <option>{e.currentWorkflow}</option>
                    {this.state.cardsStates.map(j => {
                      if (e.currentWorkflow !== j) {
                        return <option key={j}>{j}</option>;
                      }
                    })}
                  </select>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
                {/* <div className="model">model</div> */}
              </div>
            );
          }

          if (e.campaignId === this.props.campaignId) {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div className="card-detail">
                  {/* <div>C T:{e.cardTitle}</div> */}
                  state:
                  <select
                    onChange={x => {
                      this.changingState(e.cardTitle, x.target.value);
                      //console.log("e", e.target.value);
                    }}
                  >
                    <option>{e.currentWorkflow}</option>
                    {this.state.cardsStates.map(j => {
                      if (e.currentWorkflow !== j) {
                        return <option key={j}>{j}</option>;
                      }
                    })}
                  </select>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
                {/* <div className="model">model</div> */}
              </div>
            );
          } else if (this.props.campaignId === "all campaigns") {
            return (
              <div key={i} className="card">
                <div>
                  <img src={e.primaryMediaUrl} width="400px" height="200px" />
                </div>
                <div className="card-detail">
                  {/* <div>C T:{e.cardTitle}</div> */}
                  state:
                  <select
                    onChange={x => {
                      this.changingState(e.cardTitle, x.target.value);
                      //console.log("e", e.target.value);
                    }}
                  >
                    <option>{e.currentWorkflow}</option>
                    {this.state.cardsStates.map(j => {
                      if (e.currentWorkflow !== j) {
                        return <option key={j}>{j}</option>;
                      }
                    })}
                  </select>
                  {/* <div> Card Description: {e.cardDescription}</div> */}
                  <div> views: {e.views}</div>
                  <div> shares: {e.shares}</div>
                  <div> amount: ${e.listOfPlans[0].price.amount}</div>
                </div>
                {/* <div className="model">model</div> */}
              </div>
            );
          }
        })}
        <div className="add-card"> add card </div>
      </div>
    );
  }
}
Cards.cardsState = {
  saved: { pending: true },
  pending: { declined: true, active: true },
  active: { terminated: true, expired: true, paused: true },
  paused: { active: true },
  declined: null,
  terminated: null,
  expired: null
};

export default Cards;
