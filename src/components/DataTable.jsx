import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ data, category }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          {category === "users" ? (
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Maiden Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          ) :  <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>

        </tr>}
        </thead>
       {category==="users"? <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.maidenName}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>:
        <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
        }
      </Table>
    </>
  );
};

export default DataTable;
