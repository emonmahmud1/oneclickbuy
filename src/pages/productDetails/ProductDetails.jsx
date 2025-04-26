import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import {
  fetchProducts,
  selectProductById,
} from "../../redux/features/products/productsSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {
  addCarts,
  productCountCartById,
} from "../../redux/features/carts/cartsSlice";
import { BiCartDownload } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => selectProductById(state.products, id));
  const singleCartqty = useSelector((state) =>
    productCountCartById(state.carts, id)
  );



  const handleOnCart = () => {
    dispatch(
      addCarts({
        product_ids: product.id,
        s_product_qty: "1",
        cod_amount: product.buying_price,
      })
    );
  };

  return (
    <>
      <div className="grid grid-cols-12  gap-4 px-2">
        <div className="col-span-12 md:col-span-4 h-full">
          <img
            className="flex-shrink-0 object-cover w-full h-full dark:border- rounded outline-none dark:bg-gray-500"
            src={`https://admin.refabry.com/storage/product/${product?.product_images[0].name}`}
            alt="product"
          />
        </div>

        <div className="col-span-12 md:col-span-8">
          <h1 className="text-3xl font-semibold text-[#616363]">
            {product?.name}
          </h1>
          <div className=" divider h-1 divide-gray-300"></div>
          <div className="flex flex-col">
            <p className="flex">
              <span className="font-semibold text-md md:text-xl">
                <del className="">{product?.price}</del>
              </span>{" "}
              <span>
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-xl md:text-2xl  font-medium">
                Offer Price:
              </span>{" "}
              <span className="text-xl md:text-3xl ml-2 font-bold">
                {product?.buying_price}
              </span>{" "}
              <span>
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <div className="my-3 text-md font-semibold">
              <p>
                <span className="mr-2">Total in Stock:</span>
                {product?.stock}
              </p>
            </div>
            <div className=" divider h-1 divide-gray-300"></div>
            <div>
              <h2 className=" text-2xl  font-semibold">About Product</h2>
              <p className="text-[#616363] text-sm  mt-3">
                {product?.short_desc}
              </p>
            </div>
          </div>
          {/* carts */}
          <div className="divider"></div>
          <div>
            <div className="flex flex-col">
              <h3 className="text-md  my-2 text-green-500 font-semibold">
                {" "}
                {product?.stock > 0 ? "In Stoke" : "Out Of Stoke"}
              </h3>
              <div className="flex gap-2 items-center text-xl font-semibold">
                <h1 className="">Added in Carts: </h1>
                <p>{singleCartqty > 0 ? singleCartqty : 0}</p>
              </div>
              <div>
                <div className="mt-3 w-1/2">
                  <button
                    onClick={handleOnCart}
                    className="btn bg-[#0C82A0]  text-white w-full md:w-1/2 hover:bg-black"
                  >
                    Cart{" "}
                    <span>
                      <BiCartDownload className="text-xl" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
