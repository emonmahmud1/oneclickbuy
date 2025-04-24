import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    items: {}, 
  },
  reducers: {
    addCarts: (state, action) => {
        const id = action.payload.product_ids;
        const p_qty = action.payload.s_product_qty ||1;

        const p_ids = state.items.product_ids.split(',')
        const p_qtys = state.items.s_product_qty.split(',').map(q=>{return parseInt(q,10)})
    },
  },
});
export const { addCarts } = cartsSlice.actions;
export default cartsSlice.reducer;
