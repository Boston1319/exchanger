import React from "react";
import "./Rate.css";
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {}
    };
    this.currency = ["USD", "EUR", "GBP", "CNY"];
    this.getRate();
  }

  getRate = () => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ date: data.Date.slice(0, 10) });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.Valute[
            this.currency[i]
          ].Value.toFixed(2);
        }
        console.log(result);
        this.setState({ currencyRate: result });
      });
  };
  render() {
    return (
      <div className="rate">
        <h3>Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.currencyRate[keyName]}
              </div>
            </div>
          ))}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
