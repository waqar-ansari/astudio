import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import Select from "react-select";

const pageSizeOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
];
const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const skip = (currentPage - 1) * pageSize;
    dispatch(
      fetchProducts({ category: selectedCategory, limit: pageSize, skip })
    );
  }, [dispatch, pageSize, currentPage, selectedCategory]);

  const filteredProducts = products.filter((product) => {
    console.log("Filtering product:", product);
    return (
      product.title.toLowerCase().toString().includes(searchQuery)||
      product.brand.toLowerCase().toString().includes(searchQuery)
  )
  });

  return (
    <>
      <h2>Products</h2>
      <div className="d-flex">
        <Filters
          setSearchQuery={setSearchQuery}
          placeholder="Search by Title and Brand"
        />

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="ms-3">Page Size:</span>
          <Select
            options={pageSizeOptions}
            defaultValue={pageSizeOptions[0]}
            onChange={(selectedOption) => setPageSize(selectedOption.value)}
          />
        </div>

        <select
          value={selectedCategory}
          className="ms-3"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={filteredProducts} category={"products"} />
      )}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </>
  );
};

export default Products;
