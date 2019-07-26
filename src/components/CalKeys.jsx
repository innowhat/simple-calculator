import React from "react";

function CalKeys(props) {
  return (
    <React.Fragment>
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="7"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="8"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="9"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-info col-3 p-4 border"
        type="button"
        value="*"
        onClick={props.handleInput}
      />

      <div className="w-100" />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="4"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="5"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="6"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-info col-3 p-4 border"
        type="button"
        value="+"
        onClick={props.handleInput}
      />

      <div className="w-100" />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="1"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="2"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="3"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-info col-3 p-4 border"
        type="button"
        value="-"
        onClick={props.handleInput}
      />
      <div className="w-100" />
      <input
        className="btn  btn-warning col-3 p-4 border"
        type="button"
        value="."
        onClick={props.handleInput}
      />
      <input
        className="btn btn-secondary col-3 p-4 border"
        type="button"
        value="0"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-danger col-3 p-4 border"
        type="button"
        value="C"
        onClick={props.handleInput}
      />
      <input
        className="btn btn-info col-3 p-4 border"
        type="button"
        value="/"
        onClick={props.handleInput}
      />
      <div className="w-100" />
      <input
        className="btn btn-success col p-4 border"
        type="button"
        value="="
        onClick={props.handleOutput}
      />
    </React.Fragment>
  );
}

export default CalKeys;
