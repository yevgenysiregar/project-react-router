import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
    </div>
  );
};

export default App;
