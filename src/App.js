import React, { Component } from "react";
import Header from "./components/Header";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import DspTable from "./components/DspTable";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <PrimaryButton value="Primary button" />
          <SecondaryButton value="Secondary button" />
          <DspTable />
        </div>
      </div>
    );
  }
}

export default App;
