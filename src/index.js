import React from "react";
import ReactDOM from "react-dom";

// Redux-thunk
import thunk from "redux-thunk";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import CounterContainer from "./containers/CounterContainer";
import allReducers from "./reducers";

let store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById("root")
);
