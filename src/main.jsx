import * as React from "react";

import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import Carts from "./pages/carts/Carts";
import { Provider } from "react-redux";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/prodcuct-details/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
