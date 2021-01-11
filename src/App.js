import "./App.css";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import React from "react";
import Battle from "./components/Battle";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <Popular /> */}
        <Battle />
      </div>
    );
  }
}

export default App;
