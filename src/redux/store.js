import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/features/products/productsSlice";
import cartsReducer from "../redux/features/carts/cartsSlice";

const store = configureStore({
  reducer: { products: productsReducer, carts: cartsReducer },
});
export default store;
