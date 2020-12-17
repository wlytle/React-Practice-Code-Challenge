import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushis) => {
        this.setState({
          sushis,
        });
      });
  }

  state = {
    sushis: [],
    firstSushi: 0,
    eaten: [],
    remainingCash: 100,
  };

  //queue up four sushi to display
  getCurrentSushi = () => {
    let currentSushis = [];

    if (this.state.sushis.length) {
      let i = this.state.firstSushi;
      while (currentSushis.length < 4) {
        if (i >= this.state.sushis.length) {
          this.resetConveyor();
          i = 0;
        }
        currentSushis.push(this.state.sushis[i]);
        i++;
      }
    }
    return currentSushis;
  };

  resetConveyor = () => {
    this.setState({ firstSushi: 0 });
  };

  //move to the next 4 sushis
  moveConveyor = () => {
    this.setState((prevState) => {
      return { firstSushi: prevState.firstSushi + 4 };
    });
  };

  //Eat Sushi
  handleConsumption = ({ currentTarget }) => {
    let eaten = currentTarget.dataset.id;
    let price = this.state.sushis.find((sushi) => sushi.id === +eaten).price;
    if (price > this.state.remainingCash) return alert("Naw You broke!");

    this.setState((prevState) => {
      return {
        eaten: [...prevState.eaten, eaten],
        remainingCash: prevState.remainingCash - price,
      };
    });
  };

  updateCash = ({ target }) => {
    this.setState({
      remainingCash: target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.getCurrentSushi()}
          moveConveyor={this.moveConveyor}
          handleConsumption={this.handleConsumption}
          eaten={this.state.eaten}
        />
        <Table cash={this.state.remainingCash} eaten={this.state.eaten} />
        <SushiWallet
          remainingCash={this.state.remainingCash}
          updateCash={this.updateCash}
        />
      </div>
    );
  }
}

export default App;
