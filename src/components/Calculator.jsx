import React, { Component } from "react";
import CalKeys from "./CalKeys";
import CalOutput from "./CalOutput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ""
    };
  }

  // Reset/clear input
  handleReset = () => {
    this.setState({
      output: ""
    });
  };

  //Display what is inputed
  handleInput = event => {
    const { value } = event.target;
    if (value === "C") {
      this.handleReset();
    } else {
      this.setState({
        output: this.state.output + value
      });
    }
  };

  // Do the maths
  handleOutput = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        output: eval(this.state.output)
      });
    } catch (event) {
      console.log("error", event);
      this.setState({
        result: "error"
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className=" col-6 offset-3">
          <div className="card">
            <div className="card-header">
              <div className="input-group input-group-lg">
                <CalOutput output={this.state.output} />
              </div>
            </div>
            <div className="card-body">
              <div className="col-sm-12">
                <div className="row text-center flex-wrap">
                  <CalKeys
                    handleInput={this.handleInput}
                    handleOutput={this.handleOutput}
                  />
                </div>
              </div>
            </div>
            <div className="card-footer text-warning text-strong">
              {this.state.error}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
