import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCarts, productCountCartById } from "../redux/features/carts/cartsSlice";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const {
    id,
    name,
    short_desc,
    price,
    stock,
    buying_price,
    discount_amount,
    product_images,
  } = item;
  const singleCartqty = useSelector((state)=>productCountCartById(state.carts,id))
  const dispatch = useDispatch();

  const handleOnCart = () => {
    dispatch(
      addCarts({
        product_ids: id,
        s_product_qty: "1",
        cod_amount: buying_price,
      })
    );
    toast.success('Item added to Cart')
  };

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
