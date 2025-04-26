import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../redux/features/products/productsSlice";
import {
  addCarts,
  decreasesItem,
  productCountCartById,
  removeFromCart,
} from "../redux/features/carts/cartsSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartProduct = ({ id }) => {
  const dispatch = useDispatch();
  const { name, discount_amount, product_images, category, buying_price } =
    useSelector((state) => selectProductById(state.products, id));
  const singleProductCartqty = useSelector((state) =>
    productCountCartById(state.carts, id)
  );
  // console.log(product);
  const handleDecItem = () => {
    console.log(typeof id);
    dispatch(decreasesItem({ id, buying_price }));
  };

  const handleOnCart = () => {
    dispatch(
      addCarts({
        product_ids: id,
        s_product_qty: "1",
        cod_amount: buying_price,
      })
    );
  };

  return (
    <div className="flex w-full space-x-2 sm:space-x-4">
      <img
        className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
        src={`https://admin.refabry.com/storage/product/${product_images[0].name}`}
        alt="Polaroid camera"
      />
      <div className="flex flex-col justify-between w-full pb-4">
        <div className="flex justify-between w-full pb-2 space-x-2">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
              {name}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-lg flex font-semibold">
              {buying_price}{" "}
              <span>
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <p className="text-sm  dark:text-gray-400">
              *{singleProductCartqty}
            </p>
          </div>
        </div>
        <div className="flex text-sm divide-x gap-4">
          <button onClick={handleOnCart} className=" btn">+</button>
          <button onClick={handleDecItem} className="btn">-</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
