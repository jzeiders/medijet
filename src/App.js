import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import thunk from "redux-thunk";
import Reducer from "./reducers";
import { Countries, Flights, Home, Regions } from "./screens";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/home" exact component={Home} />
            <Route path="/regions" component={Regions} />
            <Route path="/countries" component={Countries} />
            <Route path="/flights" component={Flights} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
