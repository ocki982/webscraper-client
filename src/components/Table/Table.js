import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductTable from "../ProductTable/ProductTable";
import "./Table.scss";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios("http://localhost:8080/list");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setProducts([]);
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Name of Business",
        accessor: "name",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "City/State/ZIP",
        accessor: "city",
      },
      {
        Header: "Point of Contact",
        accessor: "contact",
      },
      {
        Header: "Telephone",
        accessor: "tel",
      },
      {
        Header: "Type of Service",
        accessor: "service",
      },
    ],
    []
  );

  return (
    <div className="page">
      <p className="page__text">
        <a href="https://www.irs.gov/">Home</a> / E-file Provider Search
      </p>
      <h1 className="page__title">Authorized IRS e-file Providers</h1>
      <h2 className="page__subtitle">Found 77 Matching Items</h2>
      <div className="table-container">
        {loading ? (
          <span>Loading Products...</span>
        ) : (
          <ProductTable columns={columns} data={products} />
        )}
      </div>
    </div>
  );
};

export default Table;
