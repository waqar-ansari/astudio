import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";
import DataTable from "../components/DataTable";
import Filters from "../components/Filters";
import Select from "react-select";

const pageSizeOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
];

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const skip = (currentPage - 1) * pageSize;
    console.log("Fetching users with limit:", pageSize, "skip:", skip);
    dispatch(fetchUsers({ limit: pageSize, skip }));
  }, [dispatch, pageSize, currentPage]);

  const filteredUsers = users.filter((user) => {
    console.log("Filtering user:", user);
    return (
      user.firstName.toLowerCase().toString().includes(searchQuery) ||
      user.lastName.toLowerCase().toString().includes(searchQuery)
    );
  });

  console.log(searchQuery, "search query");

  return (
    <>
      <h2>Users</h2>
      <div className="d-flex">
        <Filters setSearchQuery={setSearchQuery} placeholder="Seach by First & Last name"/>
  
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="ms-3">Page Size:</span>
          <Select
            options={pageSizeOptions}
            defaultValue={pageSizeOptions[0]}
            onChange={(selectedOption) => setPageSize(selectedOption.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={filteredUsers} category={"users"} />
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

export default Users;
