import React from "react";
import CalculatorDisplay from "./components/CalculatorDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CalculatorDisplay />
      <Footer />
    </React.Fragment>
  );
}

export default App;
