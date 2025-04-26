import { createSlice } from "@reduxjs/toolkit";

const cartsSlicer = createSlice({
  name: "cart",
  initialState: {
    items: {
      product_ids: "",
      s_product_qty: "",
      cod_amount: "",
      courier: "steadfast",
      advance: null,
      discount_amount: null,
      delivery_charge: "80",
    },
  },
  reducers: {
    addCarts: (state, action) => {
      const id = parseInt(action.payload.product_ids);
      const p_qty = parseInt(action.payload.s_product_qty) || 1;
      const p_price = action.payload.cod_amount;

      const p_ids = state?.items?.product_ids
        ? state.items.product_ids.split(",").map((p) => parseInt(p, 10))
        : [];
      const p_qtys = state?.items?.s_product_qty
        ? state.items.s_product_qty.split(",").map((q) => parseInt(q, 10))
        : [];

      const currentPrice = (prev_p, new_p) => {
        return parseFloat(prev_p || 0) + parseFloat(new_p);
      };

      const idxofId = p_ids.indexOf(id);
      if (idxofId != -1) {
        p_qtys[idxofId] += 1;
        state.items.cod_amount = currentPrice(state.items.cod_amount, p_price);
      } else {
        p_ids.push(id);
        p_qtys.push(p_qty);
        state.items.cod_amount = currentPrice(state.items.cod_amount, p_price);
      }
      state.items.product_ids = p_ids.join(",");
      state.items.s_product_qty = p_qtys.join(",");
    },

    decreasesItem: (state, action) => {
      const idToDec = action.payload.id;
      const p_price = action.payload.buying_price
      console.log(idToDec);

      const p_ids = state?.items?.product_ids
        ? state.items.product_ids.split(",").map((p) => parseInt(p, 10))
        : [];
      const p_qtys = state?.items?.s_product_qty
        ? state.items.s_product_qty.split(",").map((q) => parseInt(q, 10))
        : [];
         const currentPrice = (prev_p, new_p) => {
        return parseFloat(prev_p || 0) - parseFloat(new_p);
      };
      const idxofId = p_ids.indexOf(idToDec);
      if (p_qtys[idxofId] > 1) {
        p_qtys[idxofId] -= 1;
         state.items.cod_amount = currentPrice(state.items.cod_amount, p_price);
      } else {
        p_ids.splice(idxofId, 1);
        p_qtys.splice(idxofId, 1);
        state.items.cod_amount = currentPrice(state.items.cod_amount, p_price);
      }
      state.items.product_ids = p_ids.join(",");
      state.items.s_product_qty = p_qtys.join(",");
    },
  },
});
export const { addCarts, removeFromCart,decreasesItem } = cartsSlicer.actions;
export default cartsSlicer.reducer;

export const productCountCartById = (state, id) => {
  const qtys = state?.items?.s_product_qty
    ? state.items.s_product_qty.split(",").map((q) => parseInt(q, 10))
    : [];
  const p_ids = state?.items?.product_ids
    ? state.items.product_ids.split(",").map((p) => parseInt(p, 10))
    : [];
  const idxofId = p_ids.indexOf(parseInt(id));

  if (idxofId != -1) {
    const singleCartQty = qtys[idxofId];
    return singleCartQty;
  } else return 0;
};
