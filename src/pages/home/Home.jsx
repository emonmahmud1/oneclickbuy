import React, { useEffect } from "react";
import Product from "../../components/product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { items, isloading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
 

  if (isloading) {
    return <p>loding..........!!!!!!</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((product, idx) => (
        <Product key={idx} item={product} />
      ))}
    </div>
  );
};

export default Home;
