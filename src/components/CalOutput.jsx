import React, { Component } from "react";

class CalOutput extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          name="inputDisplay"
          type="text"
          className="form-control text-right"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          readOnly
          value={this.props.output}
        />
      </React.Fragment>
    );
  }
}

export default CalOutput;
