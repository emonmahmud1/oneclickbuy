import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchProducts,
  selectProductById,
} from "../../redux/features/products/productsSlice";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { addCarts, productCountCartById } from "../../redux/features/carts/cartsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => selectProductById(state.products, id));
  const singleCartqty = useSelector((state) =>
    productCountCartById(state.carts, id)
  );
  console.log(singleCartqty);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [id]);

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
      <div className="grid lg:grid-cols-12 sm:grid-cols-1 gap-4 px-2">
        <div className="border col-span-4 h-full">
          <img
            className="flex-shrink-0 object-cover w-full h-full dark:border- rounded outline-none dark:bg-gray-500"
            src={`https://admin.refabry.com/storage/product/${product?.product_images[0].name}`}
            alt="product"
          />
        </div>
        <div className="border col-span-5 ">
          <h1 className="text-3xl font-semibold text-[#616363]">
            {product?.name}
          </h1>
          <div className=" divider h-1 divide-gray-300"></div>
          <div className="flex flex-col">
            <p className="flex">
              <span className="font-semibold text-xl">
                <del className="">{product?.price}</del>
              </span>{" "}
              <span>
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <p className="flex items-center">
              <span className="text-2xl font-medium">Offer Price:</span>{" "}
              <span className="text-3xl ml-2 font-bold">
                {product?.buying_price}
              </span>{" "}
              <span>
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <div className="my-3 text-xl font-semibold">
              <p>
                <span className="mr-2">Total in Stock:</span>
                {product?.stock}
              </p>
            </div>
            <div className=" divider h-1 divide-gray-300"></div>
            <div>
              <h2 className="text-3xl font-semibold">About Product</h2>
              <p className="text-[#616363] text-xl mt-3">
                {product?.short_desc}
              </p>
            </div>
          </div>
        </div>
        <div className="border col-span-3 ">
          <h3 className="text-xl my-2 text-green-500 font-semibold">
            {" "}
            {product?.stock > 0 ? "In Stoke" : "Out Of Stoke"}
          </h3>
          <div className="flex gap-2 items-center text-2xl font-semibold">
            <h1 className="">Added in Carts: </h1>
            <p>{singleCartqty > 0 ? singleCartqty : 0}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
