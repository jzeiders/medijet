import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Countries, Graphs, Home, Regions } from "./screens";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/regions" component={Regions} />
          <Route path="/countries" component={Countries} />
          <Route path="/graphs" component={Graphs} />
        </div>
      </Router>
    );
  }
}

export default App;
