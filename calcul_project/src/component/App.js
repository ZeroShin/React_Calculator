import React from "react";
import Display from "./Display";
import TitleBar from "./TitleBar";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = async buttonName => {
    await this.setState(calculate(this.state, buttonName));

    if (buttonName === '=') {
      const value = this.state.total;
      axios.post('/api/data/save', { value })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error("에러발생");
        });
    }
  };

  render() {
    return (
      <div className="component-app">
        <TitleBar />
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
