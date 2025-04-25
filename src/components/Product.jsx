import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCarts, productCountCartById } from "../redux/features/carts/cartsSlice";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";

const Product = ({ item }) => {
  const {
    id,
    unique_id,
    name,
    short_desc,
    image,
    video,
    category_id,
    is_published,
    price,
    stock,
    code,
    pre_order,
    stock_location,
    buying_price,
    has_variation,
    is_discount,
    discount_amount,
    discount_date,
    created_by,
    stock_location_id,
    created_at,
    updated_at,
    product_variation,
    variation_combinations,
    category,
    product_images,
  } = item;
  const singleCartqty = useSelector((state)=>productCountCartById(state.carts,id))
  const dispatch = useDispatch();
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
  const handleOnCart = () => {
    dispatch(
      addCarts({
        product_ids: id,
        s_product_qty: "1",
        cod_amount: buying_price,
      })
    );
  };
  const cart = useSelector((state) => state.carts);
  // console.log(cart);
  return (
    <>
      <div className="card bg-base-100  hover:shadow-2xl  hover:translate-y-1 transition-transform duration-300 ease-in-out shadow-md rounded-2xl">
        <div className="relative">
          <figure>
            <img
              src={`https://admin.refabry.com/storage/product/${product_images[0].name}`}
              alt="Shoes"
              className="object- h-[350px] w-full"
            />
          </figure>
          <p className="absolute bg-amber-200 rounded-br-xl rounded-bl-xl px-2 top-0 right-2 ">
            {stock}
          </p>
        </div>
        <div className="card-body text-center">
          <h2 className="font-bold text-xl lg:text-2xl">{name}</h2>
          <p className="text-[#6c8195]">{short_desc.slice(0, 100) + "...."}</p>

          <p className="flex justify-center items-center gap-1">
            <span className="font-semibold">
              <del className="">{price}</del> {discount_amount}
            </span>{" "}
            <FaBangladeshiTakaSign />
          </p>
        </div>
        <div className="flex gap-0 justify-between">
          <div className="w-full">
            <Link to={`/prodcuct-details/${id}`}
              className="btn bg-[#0C82A0] rounded-tr-none rounded-tl-none  rounded-bl-2xl text-white w-full hover:bg-black"
            >
              Details{" "}
              <span>
                <TbListDetails className="text-xl" />
              </span>
            </Link>
          </div>
          <div className="w-full">
            <button
              onClick={handleOnCart}
              className="btn bg-[#0C82A0] rounded-tr-none rounded-tl-none rounded-br-2xl text-white w-full hover:bg-black"
            >
              Cart{" "}
              <span>
                <BiCartDownload className="text-xl" />
              </span>
              <span>{singleCartqty>0? singleCartqty : ''}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
