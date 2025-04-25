import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarts } from "../../redux/features/carts/cartsSlice";
import CartProduct from "../../components/cartProduct";

const Carts = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.carts);
//   console.log(items);
  const product_ids = items?.product_ids
    ? items.product_ids.split(",").map((p) => parseInt(p, 10))
    : [];

//   console.log(product_ids);
//   filterItems(product_ids);

  const handlecarts = () => {
    dispatch(addCarts({ product_ids: "1", s_product_qty: "3" }));
  };
  return (
    <>
      {product_ids && product_ids.length > 0 ? (
        <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ul className="flex flex-col divide-y dark:divide-gray-300">
            {product_ids.map((p_id, idx) => (
              <li
                key={idx}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <CartProduct id={p_id} />
              </li>
            ))}
          </ul>

          <div className="space-y-1 text-right">
            <p>
              Total amount: <span className="font-semibold">357</span>
            </p>
            <p className="text-sm dark:text-gray-600">
              Not including taxes and shipping costs
            </p>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-600"
            >
              Back <span className="sr-only sm:not-sr-only">to shop</span>
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
            >
              <span className="sr-only sm:not-sr-only">Continue to</span>{" "}
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-200px)] flex justify-center items-center">
          <p className="text-3xl">Your cart is empty</p>
        </div>
      )}
    </>
  );
};

export default Carts;
