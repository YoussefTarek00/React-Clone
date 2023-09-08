import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "../src/components/RTK features/app/store.jsx";
import { Provider } from "react-redux";
import { fetchUsers } from "./components/RTK features/Slices/user/userSlice.jsx";
import "./index.css";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
