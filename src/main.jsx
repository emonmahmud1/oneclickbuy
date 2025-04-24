import * as React from "react";

import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Carts from "./pages/carts/Carts";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/carts" element={<Carts />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);
