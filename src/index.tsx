import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import Router from "./Routes/Router";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./app/utils/SnackbarUtils";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilsConfigurator />
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
