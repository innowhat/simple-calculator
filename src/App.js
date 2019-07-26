import React from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Calculator />
      <Footer />
    </React.Fragment>
  );
}

export default App;
