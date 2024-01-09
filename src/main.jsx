import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/utils/118n.jsx";
import { Provider } from "react-redux";
import store from "./store/store";

import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
