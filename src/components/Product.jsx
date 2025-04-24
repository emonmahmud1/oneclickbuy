import React from "react";
import { BiCartDownload } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Product = ({ items }) => {
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
  } = items;
  return (
    <>
      <div className="card bg-base-100  hover:shadow-2xl  hover:translate-y-1 transition-transform duration-300 ease-in-out shadow-md rounded-2xl">
        <figure>
          <img
            src={`https://admin.refabry.com/storage/product/${product_images[0].name}`}
            alt="Shoes"
            className="object- h-[350px] w-full"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-xl lg:text-2xl">{name}</h2>
          <p className="text-[#6c8195]">{short_desc.slice(0, 100) + "...."}</p>

          <p className="flex justify-center items-center gap-1">
            <span className="font-semibold">{price}</span>{" "}
            <FaBangladeshiTakaSign />
          </p>
        </div>
        <div className="card-actions ">
          <button className="btn bg-[#0C82A0] rounded-tr-none rounded-tl-none rounded-br-2xl rounded-bl-2xl text-white w-full hover:bg-black">
            Add To Cart{" "}
            <span>
              <BiCartDownload className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
