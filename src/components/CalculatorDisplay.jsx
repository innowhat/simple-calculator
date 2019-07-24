import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class CalculatorDisplay extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className=" col-8 offset-2">
          <div className="card">
            <div className="card-header">
              <Header />
            </div>
            <div className="card-body">
              <input
                class="form-control form-control-lg text-right"
                type="text"
                placeholder=".0"
                disabled="true"
              />
              <div class="col-sm-12">
                <div class="row text-center my-4 flex-wrap">
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="7"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="8"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="9"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="&times;"
                  />

                  <div class="w-100" />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="4"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="5"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="6"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="+"
                  />

                  <div class="w-100" />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="1"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="2"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="3"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="-"
                  />
                  <div class="w-100" />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="±"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="0"
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="."
                  />
                  <input
                    class="btn btn-info col-3 p-2 border"
                    type="button"
                    value="="
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
