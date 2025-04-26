import React from "react";
import { useSelector } from "react-redux";

const ConfirmOrderModal = () => {
      //   "product_ids": "1,2",
  // "s_product_qty": "2,1",
  // "c_phone": "01734252112",
  // "c_name": "test",
  // "courier": "steadfast",
  // "address": "mirpur 12 ramzanessamarket",
  // "advance": null,
  // "cod_amount": "1250",
  // "discount_amount": null,
  // "delivery_charge": "80",
    const { items } = useSelector((state) => state.carts);
    console.log(items);

  return (
    <>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Confirem Your Order</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
    </>
  );
};

export default ConfirmOrderModal;
