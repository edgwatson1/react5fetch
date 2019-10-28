import React, { Component } from "react";
import "./App.css";
import GenerateJoke from "./GenerateJoke";
import DisplayJoke from "./DisplayJoke";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: {
        value: "",
        icon_url: "https://www.w3.org/TR/2017/CR-html52-20170808/images/elo.png"
      }
    };
  }

  getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(janis => {
        console.log(janis);
        this.setState({
          joke: janis
        });
      });
  }

  render() {
    return (
      <div className="App">
        <GenerateJoke selectJoke={() => this.getJoke()} />
        <DisplayJoke joke={this.state.joke} />
      </div>
    );
  }
}

export default App;
