import React from "react";
import "./Calc.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
    this.myRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = () => {
    let asa = document.getElementById("9").value;
    console.log(asa);
    let node = this.myRef.current.value;
    console.log(node);
    console.log(this.props.rate["USD"]);
    this.setState({ result: (+node * this.props.rate[asa]).toFixed(2) });
  };

  render() {
    return (
      <div className="calculator">
        <h3>Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>

          <div>
            <input
              type="number"
              defaultValue="0"
              name="count-currency"
              ref={this.myRef}
              onInput={this.calcRate}
            />
            <select name="type-currency" id="9" onChange={this.calcRate}>
              {Object.keys(this.props.rate).map((keyName, i) => (
                <option key={keyName} value={keyName} className="666">
                  {keyName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>RUB {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
