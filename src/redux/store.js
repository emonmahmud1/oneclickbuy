import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/features/products/productsSlice";
import cartsReducer from "../redux/features/carts/cartsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['carts','products']
}
const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,

})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
