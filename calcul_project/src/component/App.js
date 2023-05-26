import React, {useState} from "react";
import Display from "./Display";
import TitleBar from "./TitleBar";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  theme = {
    name: "light",
  }


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

  loadButtonClick = () =>{
    axios.get('api/data/req')
    .then(response => {
      console.log(response.data);
      this.state.total = response.data.value;
      // Display 컴포넌트에 전달되는 props를 변경합니다.
      this.forceUpdate();
    })
    .catch(error => {
      console.error("가져오기 실패");
    });
  }

  themeButtonClick = (newTheme) => {
    this.theme.name = newTheme;
    this.forceUpdate();
  }

  render() {
    return (
      <div className="component-app">
        {/* <TitleBar loadButtonClick={this.loadButtonClick} /> */}
        <TitleBar onThemeChange={this.themeButtonClick} />
        <Display value={this.state.next || this.state.total || "0"} theme={this.theme.name} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
