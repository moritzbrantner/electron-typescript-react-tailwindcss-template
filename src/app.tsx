import * as React from "react";
import * as ReactDOM from "react-dom";

import TestMessage from "./components/TestMessage";

function render() {
  ReactDOM.render(
    <div className="app">
      <TestMessage />
    </div>,
    document.getElementById("app"));
};

render();