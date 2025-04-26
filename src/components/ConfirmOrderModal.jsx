import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ConfirmOrderModal = () => {
  const { items } = useSelector((state) => state.carts);
  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    const c_name = e.target.name.value;
    const c_phone = e.target.phone.value;
    const address = e.target.address.value;
    const newData = { ...items, c_name, c_phone, address };

    console.log(newData);
    try {
      const res = await axios.post(
        `https://admin.refabry.com/api/public/order/create/`,
        newData
      );
      console.log(res);
    } catch (err) {
        toast.error('Network Error try again')
      console.log(err);
    }
  };

  return (
    <>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="font-bold text-lg">Confirm Your Order</h3>
        <p className="py-4">
          Total Payable Amount:{" "}
          <span className="font-semibold">{items.cod_amount}</span> Tk
        </p>

        <form onSubmit={handleConfirmOrder} className="flex flex-col gap-3 p-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-accent"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone</legend>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-accent"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address</legend>
            <textarea
              placeholder="Address"
              name="address"
              className="textarea textarea-accent"
            />
          </fieldset>

          <button
            type="submit"
            className="btn bg-[#0C82A0] text-white hover:bg-black mt-4"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </>
  );
};

export default ConfirmOrderModal;
