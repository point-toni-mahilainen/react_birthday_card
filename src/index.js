import React from "react";
import { render } from "react-dom";
import Birthday from "./Birthday";

const App = () => (
  <div>
    <Birthday />
  </div>
);

render(<App />, document.getElementById("root"));
