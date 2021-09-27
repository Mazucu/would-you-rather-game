import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import App from "./Components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "./Reducers";
import Middleware from "./Middleware";

const store = createStore(Reducers, Middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
