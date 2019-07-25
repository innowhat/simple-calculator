import React, { Component } from "react";

class CalculatorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      displayInput: "",
      displayResult: 0
    };
  }

  //Reset/clear input
  handleReset = () => {
    this.setState({
      displayInput: ""
    });
  };

  handleInput = event => {
    const buttonValue = event.target.value;
    this.setState({
      displayInput: this.state.displayInput + buttonValue
    });
  };

  handleOutput = () => {
    const input = this.state.displayInput;
    this.setState({
      displayInput: eval(input)
    });
  };

  render() {
    return (
      <div className="container">
        <div className=" col-6 offset-3">
          <div className="card">
            <div className="card-header">
              <div className="input-group input-group-lg">
                <input
                  name="inputDisplay"
                  type="text"
                  className="form-control text-right"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  readOnly
                  value={this.state.displayInput}
                />
              </div>
            </div>
            <div className="card-body">
              <div className="col-sm-12">
                <div className="row text-center flex-wrap">
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="7"
                    name="7"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="8"
                    name="8"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="9"
                    name="9"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-info col-3 p-2 border"
                    type="button"
                    value="*"
                    name="x"
                    onClick={this.handleInput}
                  />

                  <div className="w-100" />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="4"
                    name="4"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="5"
                    name="5"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="6"
                    name="6"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-info col-3 p-2 border"
                    type="button"
                    value="+"
                    name="+"
                    onClick={this.handleInput}
                  />

                  <div className="w-100" />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="1"
                    name="1"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="2"
                    name="2"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="3"
                    name="3"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-info col-3 p-2 border"
                    type="button"
                    value="-"
                    name="-"
                    onClick={this.handleInput}
                  />
                  <div className="w-100" />
                  <input
                    className="btn  btn-warning col-3 p-2 border"
                    type="button"
                    value="."
                    name="."
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-secondary col-3 p-2 border"
                    type="button"
                    value="0"
                    name="0"
                    onClick={this.handleInput}
                  />
                  <input
                    className="btn btn-danger col-3 p-2 border"
                    type="button"
                    value="C"
                    name="C"
                    onClick={this.handleReset}
                  />
                  <input
                    className="btn btn-info col-3 p-2 border"
                    type="button"
                    value="/"
                    name="÷"
                    onClick={this.handleInput}
                  />
                  <div className="w-100" />
                  <input
                    className="btn btn-success col p-2 border"
                    type="button"
                    value="="
                    name="="
                    onClick={this.handleOutput}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">CAL</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
