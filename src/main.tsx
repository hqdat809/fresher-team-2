import "./index.css";
import React from "react";
import App from "./App.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import configureStore from "./stores/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
