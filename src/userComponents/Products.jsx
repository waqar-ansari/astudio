import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");
console.log("log1");

useEffect(() => {
    console.log("log2");
    
    dispatch(fetchProducts({ limit: 5, skip: 0 }));
  }, [dispatch]);

  const filteredProducts = products.filter(
    (product) =>
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2>Products</h2>
      <Filters setSearchQuery={setSearchQuery} />
      {loading == true ? (
        <div>Loading...</div>
      ) : (
        <DataTable data={filteredProducts} category={"products"} />
      )}
    </>
  );
};

export default Products;
