import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CssBaseline from "@material-ui/core/CssBaseline";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import App from "./App";
import "./index.css";

const middleware = [thunk];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
