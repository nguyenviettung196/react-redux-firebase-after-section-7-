import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./app/layout/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
