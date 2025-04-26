import { createSlice } from "@reduxjs/toolkit";

const cartsSlicer = createSlice({
  name: "cart",
  initialState: {
    items: {
      product_ids: "",
      s_product_qty: "",
      cod_amount: "",
    //   c_phone: "",
    //   c_name: "",
      courier: "steadfast",
    //   address: "",
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
      //   console.log(idxofId);
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
    // orderProduct: (state, action) => {
    //   const c_phone = action.payload.c_phone || "";
    //   const c_name = action.payload.c_name || "";
    //   const courier = action.payload.courier || "";
    //   const address = action.payload.address || "";
    //   const discount_amount = action.payload.discount_amount || null;
    //   const delivery_charge = action.payload.delivery_charge || "";

    // },
  },
});
export const { addCarts } = cartsSlicer.actions;
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
