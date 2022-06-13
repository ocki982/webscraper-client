import React from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ListTable from "../ListTable/ListTable";
import "./Table.scss";

const Table = () => {
  const [list, setList] = useState([]);
  const [loadingList, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        const { data } = await axios("http://localhost:8080/list");
        setList(data);
        setLoading(false);
      } catch (err) {
        setList([]);
        console.log(err);
        setLoading(false);
      }
    };
    fetchList();
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
      <h2 className="page__subtitle">Found 18 Matching Items</h2>
      <section className="table-container">
        {loadingList ? (
          <div>Loading List...</div>
        ) : (
          <ListTable columns={columns} data={list} />
        )}
      </section>
    </div>
  );
};

export default Table;
